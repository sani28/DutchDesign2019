$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('trulycandid1'),
   document.getElementById('trulycandid2'),
   document.getElementById('trulycandid3'),
   document.getElementById('quote1'),
   document.getElementById('sofaclose'),
   document.getElementById('quote2'),
   document.getElementById('typo1'),
   document.getElementById('typo2'),
   document.getElementById('typo3'),
   document.getElementById('quote3'),
   document.getElementById('joelquote'),
   document.getElementById('katequote')
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
     triggerElement: "#sofawide",
     triggerHook: 0.8,
     offset: 300,
     reverse: true
   })
   .setClassToggle("#sofawide", "visible")
   .addTo(scrollControl);

   new ScrollMagic.Scene({
     triggerElement: "#katequote",
     triggerHook: 0.8,
     offset: 300,
     reverse: true
   })
   .setClassToggle("#katequote", "visible")
   .addTo(scrollControl);
});
