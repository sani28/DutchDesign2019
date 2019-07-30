$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('widespace'),
   document.getElementById('lex_space'),
   document.getElementById('machinary'),
   document.getElementById('truecolours'),
   document.getElementById('colours'),
   document.getElementById('quote2'),
   document.getElementById('roughclog'),
   document.getElementById('manyclogs'),
   document.getElementById('clogcolours'),
   document.getElementById('quote3'),
   document.getElementById('pillar'),
   document.getElementById('roughcandles'),
   document.getElementById('quote4') ];

  var scrollControl = new ScrollMagic.Controller();
  for(let i=0; i<orderedDesignerImages.length; i++){
    new ScrollMagic.Scene({
      triggerElement: orderedDesignerImages[i],
      triggerHook: 0.8,
      offset: 100,
      reverse: true
    })
    .setClassToggle(orderedDesignerImages[i], "visible")
    .addTo(scrollControl);
  }
});
