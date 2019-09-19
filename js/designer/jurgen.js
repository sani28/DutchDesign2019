$(document).ready(function(){
  const orderedDesignerImages =
  [
    document.getElementById('warehouse'),
    document.getElementById('jurgs'),
    document.getElementById('quote1'),
    document.getElementById('waterschool'),
    document.getElementById('waterschool2'),
    document.getElementById('waterschool3'),
    document.getElementById('quote2'),
    document.getElementById('cheesemaker'),
    document.getElementById('quote3'),
    document.getElementById('jurgenquote')
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
    triggerElement: "#cheesemaker2",
    triggerHook: 0.8,
    offset: 300,
    reverse: true
  })
  .setClassToggle("#cheesemaker2", "visible")
  .addTo(scrollControl);
});
