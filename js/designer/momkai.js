$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('harald1'),
   document.getElementById('harald2'),
   document.getElementById('queen'),
   document.getElementById('oncodevid'),
   document.getElementById('oncode'),
   document.getElementById('correspondents'),
   document.getElementById('physical'),
   document.getElementById('digital'),
   document.getElementById('haraldquote'),
];

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
