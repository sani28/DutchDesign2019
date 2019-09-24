$(document).ready(function() {

  const orderedDesignerImages = [
    document.getElementById("texels-vid"),
    document.getElementById("texels-1"),
    document.getElementById("texels-cap-1"),
    document.getElementById("texels-cap-2"),
    document.getElementById("texels-cap-3"),
    document.getElementById("texels-2"),
    document.getElementById("texels-3"),
    document.getElementById("texels-4"),
    document.getElementById("texels-5"),
    document.getElementById("texels-6"),
    document.getElementById("texels-7"),
    document.getElementById("texels-cap-2"),
    document.getElementById("texels-cap-3"),
    document.getElementById("texels-cap-4"),
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
