$(document).ready(function(){
  var designerDots = [];
  var previewVideos = [];
  designerDots = $(".designer-dot").get();
  experienceDots = $(".experience-dot").get();
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
    $(".background").css("background-image", "linear-gradient(205deg, white, blue 60%, cyan)");
  }
  function hidePreviewVideos(){
    for(let i=0, len=previewVideos.length; i< len; i++){
      $(previewVideos[i]).css("display", "none");
    }
  }

  function hideExperienceDots(){
    for (let i=0, len=experienceDots.length; i<len; i++){
      $(experienceDots[i]).css("display", "none");
    }
  }

  function showExperienceDots(){
    for (let i=0, len=experienceDots.length; i<len; i++){
      $(experienceDots[i]).css("display", "inline-block");
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
      hideExperienceDots();
    });
    $(designerDots[i]).mouseout(function(){
      let currentDesigner = this;
      for(let j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=currentDesigner){
          $(designerDots[j]).removeClass("dot-unhovered");
        };
      }
      revertBackground();
      showExperienceDots();
    });
  }


}); //DOCREADY DON'T DELETE
