$(document).ready(function(){
  console.log("WE READY");
  var designerDots = $(".designer-dot").get();
  var startingBG = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
  var bgVideo = $("#designer-preview-vid");

  function changeBackground(){
    bgVideo.css("display", "block");
  }
  function revertBackground(){
    bgVideo.css("display", "none");
    $("html").css("background-image", startingBG);
  }

  for (var i=0, len=designerDots.length; i < len; i++){
    $(designerDots[i]).mouseenter(function(){
      changeBackground();
    });
    $(designerDots[i]).mouseout(function(){
      revertBackground();
    })
  }
});
