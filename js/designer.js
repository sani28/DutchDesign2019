$(document).ready(function(){
  const vid = document.getElementById("designer-vid");
  const overlay = document.getElementById("designer-overlay");
  const vidSection = document.getElementById("top-video-section");
  const orderedDesignerImages =
  [document.getElementById("floris-candid2"), document.getElementById("floris-candid1"),  document.getElementById("floris-candid3"),
  document.getElementById('floris-quote1'), document.getElementById("floris-workshop"), document.getElementById("floris-space")];

  var scrollControl = new ScrollMagic.Controller();
  for(let i=0; i<orderedDesignerImages.length; i++){
    new ScrollMagic.Scene({
      triggerElement: orderedDesignerImages[i],
      triggerHook: 0.8,
      offset: 100,
      reverse: true
    })
    .setClassToggle(orderedDesignerImages[i], "visible")
    // .addIndicators({name: "image " + (i + 1)}) //USE FOR DEBUG
    .addTo(scrollControl);
  }
  new ScrollMagic.Scene({
    triggerElement:  "#floris-wip",
    triggerHook: 0.8,
    offset: 150,
    reverse: true
  })
  .setClassToggle("#floris-wip", "visible")
  .addTo(scrollControl);


  //VIDEO OVERLAY SHOW/HIDE
  vid.addEventListener("play", function(){
    overlay.style.display = "none";
    $("#top-video-section").removeClass("play-cursor");
    $("#top-video-section").addClass("pause-cursor");
  });

  vid.addEventListener("pause", function(){
    overlay.style.display = "";
    $("#top-video-section").removeClass("pause-cursor");
    $("#top-video-section").addClass("play-cursor");
  });

  vid.addEventListener("playing", function(){
    $("#top-video-section").removeClass("play-cursor");
    $("#top-video-section").addClass("pause-cursor");
  });

  vid.addEventListener("paused", function(){
    $("#top-video-section").removeClass("pause-cursor");
    $("#top-video-section").addClass("play-cursor");
  });

});
