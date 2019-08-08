$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('ifcandid'),
   document.getElementById('ifcandid2'),
   document.getElementById('ifcandid3'),
   document.getElementById('quote1'),
   document.getElementById('ifquote1'),
   document.getElementById('kexp'),
   document.getElementById('kexpspace'),
   document.getElementById('kexp-print1'),
   document.getElementById('kexp-print2'),
   document.getElementById('kexp-print3'),
   document.getElementById('quote2'),
   document.getElementById('ifquote2'),
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
