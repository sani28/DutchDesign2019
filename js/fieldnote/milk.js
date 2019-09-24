$(document).ready(function() {

  const orderedDesignerImages = [
    document.getElementById("texels-vid"),
    document.getElementById("melkhuis-1"),
    document.getElementById("melkhuis-2"),
    document.getElementById("melkhuis-3"),
    document.getElementById("melkhuis-4"),
    document.getElementById("melkhuis-5"),
    document.getElementById("melkhuis-6"),
    document.getElementById("melkhuis"),
    document.getElementById("texels-5"),
    document.getElementById("texels-6"),
    document.getElementById("texels-7"),
    document.getElementById("texels-cap-2"),
    document.getElementById("texels-cap-3"),
    document.getElementById("quote1"),
    document.getElementById("end")
  ];


  var scrollControl = new ScrollMagic.Controller();


  for (let i = 0; i < orderedDesignerImages.length; i++) {
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
