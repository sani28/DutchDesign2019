$(document).ready(function(){

  var designerDots = $(".designer-dot").get();
  var startingBG = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
  var previewVideos = $(".bg-preview-video").get();

  function playPreviewVideo(videoID){
    var currentVideo = videoID;
    switch(videoID){ //takes a string from the index html
      case "lexDot":
        $("#lex-preview-vid").css("display", "block");
        break;
      case "valentineDot":
        $("#valentine-preview-vid").css("display", "block");
        break;
    }
  }

  function revertBackground(){
    hidePreviewVideos();
    $("html").css("background-image", startingBG);
  }
  function hidePreviewVideos(){
    for(var i=0, len=previewVideos.length; i< len; i++){
      $(previewVideos[i]).css("display", "none");
    }
  }
  // is this better: https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/

  //TODO: I should be able to refactor this to reduce code length by 1/2
  for (var i=0, len=designerDots.length; i < len; i++){
    //passes designerDots as an array into a function
    $(designerDots[i]).mouseenter(function(){
      var currentDesigner = this;
      for(var j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=currentDesigner){
          $(designerDots[j]).addClass("dot-unhovered");
        };
      }
      playPreviewVideo(currentDesigner.id);
    });
    $(designerDots[i]).mouseout(function(){
      var currentDesigner = this;
      for(var j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=currentDesigner){
          $(designerDots[j]).removeClass("dot-unhovered");
        };
      }
      revertBackground();
    });
  }


}); //DOCREADY
