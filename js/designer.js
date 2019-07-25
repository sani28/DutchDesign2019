$(document).ready(function(){
  const vid = document.getElementById("designer-vid");
  const overlay = document.getElementById("designer-overlay");
  const vidSection = document.getElementById("top-video-section");
  const orderedDesignerImages =
  [document.getElementById("floris-candid2"), document.getElementById("floris-candid1"),  document.getElementById("floris-candid3"),
  document.getElementById('floris-quote1'), document.getElementById("floris-workshop"), document.getElementById("floris-space"),
  document.getElementById("floris-wip")];

  var scrollControl = new ScrollMagic.Controller({container: "#scroll-container", loglevel: 3});
  var scene = new ScrollMagic.Scene({
    triggerElement: "#scroll-container"
  });
  //CHAIN OBJECTS HERE

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

  new ScrollMagic.Scene({
									triggerElement: "#trigger2",
									triggerHook: 0.9,
									offset: 50, // move trigger to center of element
									reverse: false // only do once
								})
								.setClassToggle("#reveal2", "visible") // add class toggle
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);





  // //REPLACE FOLLOWING scrollY WITH SCROLLMAGIC
  // window.addEventListener('scroll', function(e) {
  //   console.log(window.scrollY);
  //   if(window.scrollY > 300){
  //     orderedDesignerImages[0].classList.add("show");
  //     orderedDesignerImages[0].classList.remove("hide");
  //   }
  //   if(window.scrollY > 500){
  //     orderedDesignerImages[1].classList.add("show");
  //     orderedDesignerImages[1].classList.remove("hide");
  //   }
  //   if(window.scrollY > 700){
  //     orderedDesignerImages[2].classList.add("show");
  //     orderedDesignerImages[2].classList.remove("hide");
  //     orderedDesignerImages[3].classList.add("show");
  //     orderedDesignerImages[3].classList.remove("hide");
  //   }
  //   if(window.scrollY > 1300){
  //     orderedDesignerImages[4].classList.add("show");
  //     orderedDesignerImages[4].classList.remove("hide");
  //   }
  //   if(window.scrollY > 1700){
  //     orderedDesignerImages[5].classList.add("show");
  //     orderedDesignerImages[5].classList.remove("hide");
  //   }
  //   if(window.scrollY > 1600){
  //     orderedDesignerImages[6].classList.add("show");
  //     orderedDesignerImages[6].classList.remove("hide");
  //   }
  // });




});
