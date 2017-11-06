var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();



var About = require('./models/about');

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:ullmusic2@ds249605.mlab.com:49605/heroku_tr27hmnt');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build')));

var router = express.Router();
// middleware to use for all requests
router.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});
//app.use('/', index);
// Serve static files from the React app
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

router.route('/about')

  // create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function (req, res) {

    var about = new About();      // create a new instance of the Bear model
    about.description = req.body.description;  // set the bears name (comes from the request)

    // save the bear and check for errors
    about.save(function (err) {
      if (err)
        res.send(err);

      res.json({ message: 'About created!', object: about });
    });

  })
  // get all the bears (accessed at GET http://localhost:8080/api/bears)
  .get(function (req, res) {
    About.find(function (err, about) {
      if (err)
        res.send(err);

      res.json(about);
    });
  });
router.route('/about/:about_id')
  // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get(function (req, res) {
    About.findById(req.params.about_id, function (err, about) {
      if (err)
        res.send(err);
      res.json(about);
    });
  })
  // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
  .put(function (req, res) {

    // use our bear model to find the bear we want
    About.findById(req.params.about_id, function (err, about) {

      if (err)
        res.send(err);

      about.description = req.body.description;  // update the bears info

      // save the bear
      about.save(function (err) {
        if (err)
          res.send(err);

        res.json({ message: 'About updated!' });
      });

    });
  })
  // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
  .delete(function (req, res) {
    About.remove({
      _id: req.params.about_id
    }, function (err, about) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3001;
app.listen(port);

module.exports = app;
