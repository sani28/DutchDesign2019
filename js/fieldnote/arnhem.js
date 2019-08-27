$(document).ready(function() {

  document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/arnhem/arnhem-8.png')";

  $('.mobile-slider').slick({
    arrow: false,
    dots: true,
    lazyload: true,
    infinite: true,
   });

   
  $(".geo-info").codex({
    speed: 30,
    duration: 2000
  });

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
    document.getElementById("dune2"),
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
