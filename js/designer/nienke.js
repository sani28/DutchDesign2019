$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('nienkecandid'),
   document.getElementById('nienkecandid2'),
   document.getElementById('nienkecandid3'),
   document.getElementById('quote1'),
   document.getElementById('netting'),
   document.getElementById('samples'),
   document.getElementById('nienkequote'),
   document.getElementById('mournsmall'),
   document.getElementById('mourn')];

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
     triggerElement: "#seame",
     triggerHook: 0.8,
     offset: 300,
     reverse: true
   })
   .setClassToggle("#seame", "visible")
   .addTo(scrollControl);

});
