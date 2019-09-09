$(document).ready(function() {

  $(".geo-info").codex({
    speed: 30,
    duration: 2000
  });

  $('.mobile-slider').slick({
    arrow: false,
    dots: true,
    lazyload: true,
    infinite: true,
   });

  const orderedDesignerImages = [
    document.getElementById("soil-1"),
    document.getElementById("soil-2"),
    document.getElementById("soil-3"),
    document.getElementById("soil-cap-1"),
    document.getElementById("soil-cap-2"),
    document.getElementById("soil-4"),
    document.getElementById("soil-5"),
    document.getElementById("soil-cap-3"),
    document.getElementById("soil-7"),
    document.getElementById("soil-8"),
    document.getElementById("wrkshop-vid")
  ];

  const stagger = [
    document.getElementById("soil-6"),
    document.getElementById("soil-9"),
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
