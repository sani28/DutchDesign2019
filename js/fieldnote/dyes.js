$(document).ready(function() {

  $(".geo-info").codex({
    speed: 30,
    duration: 2000
  });

  document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/dyes/rens_banner.jpg')";

  const orderedDesignerImages = [
    document.getElementById("dyes-1"),
    document.getElementById("dyes-2"),
    document.getElementById("dyes-3"),
    document.getElementById("dyes-4"),
    document.getElementById("dyes-5"),
    document.getElementById("dyes-6"),
    document.getElementById("dyes-7"),
    document.getElementById("dyes-8"),
    document.getElementById("dyes-vid"),
    document.getElementById("dyes-cap-1"),
    document.getElementById("dyes-cap-2"),
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
});
