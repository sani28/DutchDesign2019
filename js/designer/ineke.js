$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('inekecandid'),
   document.getElementById('inekecandid2'),
   document.getElementById('inekecandid3'),
   document.getElementById('quote1'),
   document.getElementById('salon1'),
   document.getElementById('salon2'),
   document.getElementById('quote2'),
   document.getElementById('instantdesk'),
   document.getElementById('inekedesk'),
   document.getElementById('fogorough'),
   document.getElementById('fogolabel'),
   document.getElementById('fogoisland'),
   document.getElementById('inekequote')
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
