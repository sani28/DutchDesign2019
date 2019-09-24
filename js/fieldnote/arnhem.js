$(document).ready(function() {
  
  const orderedDesignerImages = [
    document.getElementById("enroute"),
    document.getElementById("alexSihloutte"),
    document.getElementById("krollerMuller"),
    document.getElementById("riding-1"),
    document.getElementById("riding-2"),
    document.getElementById("top-align"),
    document.getElementById("baseline"),
    document.getElementById("baseline-2"),
    document.getElementById("baseline-3"),
    document.getElementById("onGrass"),
    document.getElementById("dune1"),
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

  new ScrollMagic.Scene({
      triggerElement: "#dune2",
      triggerHook: 0.8,
      offset: 300,
      reverse: true
    })
    .setClassToggle("#dune2", "visible")
    .addTo(scrollControl);
});
