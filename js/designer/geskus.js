$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('texelsign'),
   document.getElementById('workshop'),
   document.getElementById('rebeccajan1'),
   document.getElementById('rebeccajan2'),
   document.getElementById('rebeccajan3'),
   document.getElementById('wool'),
   document.getElementById('woolnet'),
   document.getElementById('fishnet'),
   document.getElementById('quote1'),
   document.getElementById('sheepgif'),
   document.getElementById('maarten'),
   document.getElementById('quote2'),];

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
