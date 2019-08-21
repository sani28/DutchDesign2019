
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
