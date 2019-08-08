$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('aldocandid'),
   document.getElementById('aldocandid2'),
   document.getElementById('quote1'),
   document.getElementById('pot'),
   document.getElementById('pot2'),
   document.getElementById('pot3'),
   document.getElementById('quote2'),
   document.getElementById('aldoquote'),
   document.getElementById('swing'),
   document.getElementById('aldoquote2'),
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

   new ScrollMagic.Scene({
     triggerElement: "#swing2",
     triggerHook: 0.8,
     offset: 300,
     reverse: true
   })
   .setClassToggle( "#swing2", "visible")
   .addTo(scrollControl);
});
