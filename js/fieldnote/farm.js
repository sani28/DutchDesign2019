$(document).ready(function() {

  const orderedDesignerImages = [
    document.getElementById("farm-1"),
    document.getElementById("farm-2"),
    document.getElementById("farm-3"),
    document.getElementById("farm-4"),
    document.getElementById("farm-5"),
    document.getElementById("farm-6"),
    document.getElementById("farm-7"),
    document.getElementById("farm-cap-1"),
    document.getElementById("farm-cap-2"),
    document.getElementById("farm-cap-3"),
    document.getElementById("wrkshop-vid")
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
      triggerElement: "#farm-8",
      triggerHook: 0.8,
      offset: 300,
      reverse: true
    })
    .setClassToggle("#farm-8", "visible")
    .addTo(scrollControl);
});
