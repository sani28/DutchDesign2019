$(document).ready(function(){
  var designerDots = [];
  var previewVideos = [];
  
  designerDots = $(".designer-dot").get();
  previewVideos = $(".bg-preview-video").get();

  function playPreviewVideo(videoID){
    let currentVideo = videoID;
    switch(currentVideo){ //takes a string from the index html
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
    $("html").css("background-image", "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)");
  }
  function hidePreviewVideos(){
    for(let i=0, len=previewVideos.length; i< len; i++){
      $(previewVideos[i]).css("display", "none");
    }
  }
  // is this better: https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/

  //TODO: I should be able to refactor this to reduce code length by 1/2
  for (let i=0, len=designerDots.length; i < len; i++){
    //passes designerDots as an array into a function
    $(designerDots[i]).mouseenter(function(){
      let currentDesigner = this;
      for(let j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=currentDesigner){
          $(designerDots[j]).addClass("dot-unhovered");
        };
      }
      playPreviewVideo(currentDesigner.id);
    });
    $(designerDots[i]).mouseout(function(){
      let currentDesigner = this;
      for(let j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=currentDesigner){
          $(designerDots[j]).removeClass("dot-unhovered");
        };
      }
      revertBackground();
    });
  }


}); //DOCREADY DON'T DELETE
