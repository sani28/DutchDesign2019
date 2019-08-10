$(document).ready(function(){
  const orderedDesignerImages =
  [
    document.getElementById('lavacandid1'),
    document.getElementById('lavacandid2'),
    document.getElementById('lavacandid3'),
    document.getElementById('antonquote'),
    document.getElementById('enigma1'),
    document.getElementById('enigma2'),
    document.getElementById('enigma3'),
    document.getElementById('quote1'),
    document.getElementById('museums1'),
    document.getElementById('museums2'),
    document.getElementById('quote2'),
    document.getElementById('lisaquote'),
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
