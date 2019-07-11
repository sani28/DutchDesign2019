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
      case "valentinDot":
        $("#valentin-preview-vid").css("display", "block");
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

  function changeInactiveState(dot){
    let deactivatedDot = dot;
     $(deactivatedDot).hasClass("dot-inactive") ? $(deactivatedDot).removeClass("dot-inactive") : $(deactivatedDot).addClass("dot-inactive");
  }

  for (let i=0, len=designerDots.length; i < len; i++){
    $(designerDots[i]).mouseenter(function(){
      let currentDesigner = this;
      for(let j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=currentDesigner){
          changeInactiveState(designerDots[j]);
        };
      }
      playPreviewVideo(currentDesigner.id);
      hideExperienceDots();
    });
    $(designerDots[i]).mouseout(function(){
      let currentDesigner = this;
      for(let j=0, len=designerDots.length; j <len; j++){
        if(designerDots[j]!=currentDesigner){
          changeInactiveState(designerDots[j]);
        };
      }
      revertBackground();
      showExperienceDots();
    });
  }

}); //DOCREADY DON'T DELETE
