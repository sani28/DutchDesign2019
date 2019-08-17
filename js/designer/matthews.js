$(document).ready(function(){
  const orderedDesignerImages =
  [
    document.getElementById('iancandid'),
    document.getElementById('nicolecandid'),
    document.getElementById('kristinecandid'),
    document.getElementById('quote1'),
    document.getElementById('matthewsquote'),
    document.getElementById('mopop'),
    document.getElementById('quote2'),
    document.getElementById('mopop2'),
    document.getElementById('matthewsquote2')
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
