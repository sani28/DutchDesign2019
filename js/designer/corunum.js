$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('lottework'),
   document.getElementById('unfired'),
   document.getElementById('lottequote'),
   document.getElementById('lottecandid'),
   document.getElementById('lottecandid2'),
   document.getElementById('lottecandid3'),
   document.getElementById('employee'),
   document.getElementById('employee2'),
   document.getElementById('employee3'),
   document.getElementById('reglazeclose'),
   document.getElementById('reglazemid'),
   document.getElementById('reglazehands'),
   document.getElementById('lottequote2'),
   document.getElementById('reglazemisc'),
   document.getElementById('reglazeplates')];

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
     triggerElement: "#workspace",
     triggerHook: 0.8,
     offset: 320,
     reverse: true
   })
   .setClassToggle("#workspace", "visible")
   .addTo(scrollControl);

});
