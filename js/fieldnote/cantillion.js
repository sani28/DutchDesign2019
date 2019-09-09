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
    document.getElementById("cant-1"),
    document.getElementById("cant-3"),
    document.getElementById("cant-4"),
    document.getElementById("cant-cap-1"),
    document.getElementById("cant-cap-2"),
    document.getElementById("cant-5"),
    document.getElementById("cant-6"),
    document.getElementById("cant-cap-3"),
    document.getElementById("cant-cap-4"),
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
      triggerElement: "#cant-2",
      triggerHook: 0.8,
      offset: 300,
      reverse: true
    })
    .setClassToggle("#cant-2", "visible")
    .addTo(scrollControl);
});
