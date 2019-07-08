$(document).ready(function(){


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
  // is this better: https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/

  for (var i=0, len=designerDots.length; i < len; i++){
    //passes designerDots as an array into a function
    $(designerDots[i]).mouseenter(function(){
      var current = this;
      for(var j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=current){
          $(designerDots[j]).addClass("dot-unhovered");
        };
      }
      changeBackground();
    });
    $(designerDots[i]).mouseout(function(){
      var current = this;
      for(var j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=current){
          $(designerDots[j]).removeClass("dot-unhovered");
        };
      }
      revertBackground();
    });
  }



}); //DOCREADY
