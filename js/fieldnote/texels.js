$(document).ready(function() {

  $(".geo-info").codex({
    speed: 30,
    duration: 2000
  });

  document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/texels/texels_banner.jpg')";

  const orderedDesignerImages = [
    document.getElementById("texels-vid"),
    document.getElementById("texels-1"),
    document.getElementById("texels-cap-1"),
    document.getElementById("texels-cap-2"),
    document.getElementById("texels-cap-3"),
    document.getElementById("texels-2"),
    document.getElementById("texels-3"),
    document.getElementById("texels-4"),
    document.getElementById("texels-5"),
    document.getElementById("texels-6"),
    document.getElementById("texels-7"),
    document.getElementById("texels-cap-2"),
    document.getElementById("texels-cap-3"),
    document.getElementById("texels-cap-4"),
    document.getElementById("quote1"),
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
