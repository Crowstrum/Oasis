var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AboutSchema = new Schema({
    description: String
});

module.exports = mongoose.model('About', AboutSchema);