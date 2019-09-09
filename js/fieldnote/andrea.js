$(document).ready(function(){

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

  const orderedDesignerImages = [
    document.getElementById("in-workshop"),
    document.getElementById("wrkshop-vid"),
    document.getElementById("sketch-1"),
    document.getElementById("sketch-2"),
    document.getElementById("group-pic"),
    document.getElementById("outdoor-1"),
    document.getElementById("caption1"),
    document.getElementById("quote4"),
    document.getElementById("caption2"),
    document.getElementById("end")];


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

  new ScrollMagic.Scene({
    triggerElement: "#outdoor-2",
    triggerHook: 0.8,
    offset: 300,
    reverse: true
  })
  .setClassToggle("#outdoor-2", "visible")
  .addTo(scrollControl);


});
