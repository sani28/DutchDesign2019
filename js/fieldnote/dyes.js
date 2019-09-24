$(document).ready(function() {

  const orderedDesignerImages = [
    document.getElementById("dyes-1"),
    document.getElementById("dyes-2"),
    document.getElementById("dyes-4"),
    document.getElementById("dyes-5"),
    document.getElementById("dyes-7"),
    document.getElementById("dyes-8"),
    document.getElementById("dyes-vid"),
    document.getElementById("dyes-cap-1"),
    document.getElementById("dyes-cap-2"),
    document.getElementById("wrkshop-vid")
  ];

  const stagger = [
    document.getElementById("dyes-3"),
    document.getElementById("dyes-6"),
  ]


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

  for (let i = 0; i < stagger.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: stagger[i],
        triggerHook: 0.8,
        offset: 300,
        reverse: true
      })
      .setClassToggle(stagger[i], "visible")
      .addTo(scrollControl);
  }
});
