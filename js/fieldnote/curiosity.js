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
    document.getElementById("kiki1"),
    document.getElementById("kiki2"),
    document.getElementById("prod-1"),
    document.getElementById("prod-2"),
    document.getElementById("prod-4"),
    document.getElementById("prod-5"),
    document.getElementById("quote1"),
    document.getElementById("caption2"),
    document.getElementById("end")
  ];

  const stagger = [
    document.getElementById("prod-3"),
    document.getElementById("prod-6"),
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
