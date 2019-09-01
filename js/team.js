$(window).load(function() {

  $('.str4').liMarquee({
    direction: 'up',
    loop:-1,
    scrolldelay: 0,
    scrollamount: 90,
    inverthover: false,
    hoverstop: false,
  });
});


$('.mobile-slider').slick({
  arrow: false,
  dots: true,
  lazyload: true,
  infinite: true,
 });

 const alex = document.getElementById("a").id = "alex";
 const angus = document.getElementById("a").id = "angus";
 const brandon = document.getElementById("a").id = "brandon";
 const breanne = document.getElementById("a").id = "breanne";
 const gabe = document.getElementById("a").id = "gabe";
 const jenny = document.getElementById("a").id = "jenny";
 const linda = document.getElementById("a").id = "linda";
 const marie = document.getElementById("a").id = "marie";
 const marine = document.getElementById("a").id = "marine";
 const nikita = document.getElementById("a").id = "nikita";
 const rocky = document.getElementById("a").id = "rocky";
 const russell = document.getElementById("a").id = "russell";
 const sanny = document.getElementById("a").id = "sanny";
 const team = document.getElementById("a").id = "team";


//CURSOR
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  const $hoverables = document.querySelectorAll('.hoverable');

//STATES & STYLES
var interviewsActive = true;
//////////////////////////////////////////////////////////////////////
/////////////// CURSOR SPECIFIC FUNCTIONS///////////////////////
//////////////////////////////////////////////////////////////////////
// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}
// Move the cursor
function onMouseMove(e) {
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7 });
}
// Hover an element
function onMouseHover() {
  TweenMax.to($smallBall, .3, {
    scale: 4 });
}
function onMouseHoverOut() {
  TweenMax.to($smallBall, .3, {
    scale: 1 });
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };

}

/* ----------------- DOTS JS ----------------------------- */

;( function( window ) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function DotNav( el, options ) {
		this.nav = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	DotNav.prototype.options = {};

	DotNav.prototype._init = function() {
		// special case "dotstyle-hop"
		var hop = this.nav.parentNode.className.indexOf( 'dotstyle-hop' ) !== -1;

		var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;

		dots.forEach( function( dot, idx ) {
			dot.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				if( idx !== current ) {
					dots[ current ].className = '';

					// special case
					if( hop && idx < current ) {
						dot.className += ' current-from-right';
					}

					setTimeout( function() {
						dot.className += ' current';
						current = idx;
						if( typeof self.options.callback === 'function' ) {
							self.options.callback( current );
						}
					}, 25 );
				}
			} );
		} );
	}

	// add to global namespace
	window.DotNav = DotNav;

})( window );


[].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
  new DotNav( nav, {
    callback : function( idx ) {
    }
  } );
});
