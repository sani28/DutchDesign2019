$(document).ready(function() {

  $('.mobile-slider').slick({
    arrow: false,
    dots: true,
    lazyload: true,
    infinite: true,
   });


  //scramble text for field note geo info
  $(".geo-info").codex({
    speed: 30,
    duration: 2000
  });

  document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/appian/appian-1.jpg')";

  const orderedDesignerImages = [
    document.getElementById("keyroad"),
    document.getElementById("appianroad"),
    document.getElementById("catacomb"),
    document.getElementById("ap-bike-1"),
    document.getElementById("ap-bike-vid"),
    document.getElementById("inGrass"),
    document.getElementById("ap-field-vid"),
    document.getElementById("appianStone"),
    document.getElementById("quote1"),
    document.getElementById("caption2"),
    document.getElementById("app-cap-1"),
    document.getElementById("app-cap-2"),
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
