$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('pepecandid'),
   document.getElementById('pepecandid2'),
   document.getElementById('pepecandid3'),
   document.getElementById('quote1'),
   document.getElementById('skinlamp'),
   document.getElementById('skintoy'),
   document.getElementById('quote2'),
   document.getElementById('nothingness'),
   document.getElementById('quote3')
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
     triggerElement: "#pepenothing",
     triggerHook: 0.7,
     offset: 300,
     reverse: true
   })
   .setClassToggle("#pepenothing", "visible")
   .addTo(scrollControl);

});
