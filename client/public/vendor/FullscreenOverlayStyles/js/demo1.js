
var triggerBttn;
var overlay;
var closeBttn;
var deets = function () {
	var transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	};
	var transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
	var support = { transitions: Modernizr.csstransitions };

	function toggleOverlay() {
		if (classie.has(overlay, 'open')) {
			classie.remove(overlay, 'open');
			classie.add(overlay, 'close');
			var onEndTransitionFn = function (ev) {
				if (support.transitions) {
					if (ev.propertyName !== 'visibility') return;
					this.removeEventListener(transEndEventName, onEndTransitionFn);
				}
				classie.remove(overlay, 'close');
			};
			if (support.transitions) {
				overlay.addEventListener(transEndEventName, onEndTransitionFn);
			}
			else {
				onEndTransitionFn();
			}
		}
		else if (!classie.has(overlay, 'close')) {
			classie.add(overlay, 'open');
		}

		$('.wrap-home-onepage-header').slideToggle();

	}

	triggerBttn.addEventListener('click', toggleOverlay);
	closeBttn.addEventListener('click', toggleOverlay);
	$('.home-onepage-menu-overlay a').on('click', toggleOverlay);
};

var calback = function () {
	triggerBttn = document.getElementById('trigger-overlay');
	overlay = document.querySelector('div.overlay');
	closeBttn = document.querySelector('.overlay-close');
	if (!triggerBttn || !overlay || !closeBttn) {
		check();
		return;
	} else {
		deets();
	}
}

var check = function () {
	if (!triggerBttn || !overlay || !closeBttn) {
		window.requestAnimationFrame(calback);
	} else {
		alert('got em');
	}
}
document.addEventListener('DOMContentLoaded', check);
