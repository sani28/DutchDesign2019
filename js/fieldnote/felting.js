$(document).ready(function(){

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
  document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/felting/felting-1.jpg')";

  const orderedDesignerImages = [
    document.getElementById("felt-2"),
    document.getElementById("felt-3"),
    document.getElementById("linda"),
    document.getElementById("roy"),
    document.getElementById("will"),
    document.getElementById("angus"),
    document.getElementById("felt-4"),
    document.getElementById("felt-5"),
    document.getElementById("felt-6"),
    document.getElementById("quote1"),
    document.getElementById("felting-2"),
    document.getElementById("wrkshop-vid")];


  var scrollControl = new ScrollMagic.Controller();


  for(let i=0; i<orderedDesignerImages.length; i++){
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
