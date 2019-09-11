$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('edwin-1'),
   document.getElementById('edwin-2'),
   document.getElementById('edwin-3'),
   document.getElementById('caption1'),
   document.getElementById('quote1'),
   document.getElementById('deschool-1'),
   document.getElementById('tirzo-1'),
   document.getElementById('tirzo-2'),
   document.getElementById('tirzo-2'),
   document.getElementById('edwinquote'),
   document.getElementById('chicago-1'),
   document.getElementById('chicago-2'),
   document.getElementById('edwinquote2') ];

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
  new ScrollMagic.Scene({
    triggerElement: "#deschool-2",
    triggerHook: 0.8,
    offset: 300,
    reverse: true
  })
  .setClassToggle("#deschool-2", "visible")
  .addTo(scrollControl);
});
