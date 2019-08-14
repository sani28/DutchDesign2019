$(document).ready(function(){
  const orderedDesignerImages =
  [document.getElementById('inekecandid'),
   document.getElementById('inekecandid2'),
   document.getElementById('inekecandid3'),
   document.getElementById('quote1'),
   document.getElementById('salon1'),
   document.getElementById('quote2'),
   document.getElementById('instantdesk'),
   document.getElementById('inekedesk'),
   document.getElementById('fogorough'),
   document.getElementById('fogolabel'),
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

  new ScrollMagic.Scene({
    triggerElement: "#salon2",
    triggerHook: 0.8,
    offset: 300,
    reverse: true
  })
  .setClassToggle("#salon2", "visible")
  .addTo(scrollControl);

  new ScrollMagic.Scene({
    triggerElement: "#fogoisland",
    triggerHook: 0.8,
    offset: 300,
    reverse: true
  })
  .setClassToggle("#fogoisland", "visible")
  .addTo(scrollControl);
});
