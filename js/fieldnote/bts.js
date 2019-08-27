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
   
  document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/bts/bti_banner.jpg')";

  const orderedDesignerImages = [
    document.getElementById("bti-1"),
    document.getElementById("bti-2"),
    document.getElementById("bti-3"),
    document.getElementById("bti-4"),
    document.getElementById("bti-5"),
    document.getElementById("bti-6"),
    document.getElementById("bti-7"),
    document.getElementById("bts-sec7-img2"),
    document.getElementById("bts-sec7-img3"),
    document.getElementById("bts-cap-1"),
    document.getElementById("bts-cap-2"),
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
