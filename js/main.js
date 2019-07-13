$(document).ready(function(){
  //ARRAY OF DOTS
  const designerDots = $(".designer-dot").get();
  const experienceDots = $(".experience-dot").get();
  const previewVideos = $(".bg-preview-video").get();
  var intToggle = $( "#toggle-int" );
  var expToggle = $( "#toggle-exp" );
  //STATES
  var interviewsActive = true; // T/F toggle interviews and experiences

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

  function changeInactiveState(hovered){
    let currentDot = hovered;
    for(let i=0, len=designerDots.length; i < len; i++){
      let deactivatedDot = designerDots[i];
      if(deactivatedDot!=currentDot){
        $(deactivatedDot).hasClass("dot-unhovered") ? $(deactivatedDot).removeClass("dot-unhovered") : $(deactivatedDot).addClass("dot-unhovered");
      }
    }
  }

  function toggleDotSize(){
    if(interviewsActive){
      for(let i=0; i<designerDots.length; i++ ){
        $(designerDots[i]).addClass("active-dot");
      }
      for (let j=0; j<experienceDots.length; j++){
        $(experienceDots[j]).removeClass("active-dot");
      }
    } else {
      for (let j=0; j<experienceDots.length; j++){
        $(experienceDots[j]).addClass("active-dot");
      }
      for(let i=0; i<designerDots.length; i++ ){
        $(designerDots[i]).removeClass("active-dot");
      }
    }
  }

  for (let i=0, len=designerDots.length; i < len; i++){
    $(designerDots[i]).mouseenter(function(){
      changeInactiveState(this);
      playPreviewVideo(this.id);
      hideExperienceDots();
    });
    $(designerDots[i]).mouseout(function(){
      changeInactiveState(this);
      revertBackground();
      showExperienceDots();
    });
  }

  expToggle.click(function(){
    if(!interviewsActive){
      return;
    }
    else{
      interviewsActive = false;
      $(this).addClass("active-state-toggle");
      $("#interview-toggle").removeClass("active-state-toggle");
      toggleDotSize();
    }
  });

  intToggle.click(function(){
      if(interviewsActive){
        return;
      }
      else{
        interviewsActive = true;
        $(this).addClass("active-state-toggle");
        $("#experience-toggle").removeClass("active-state-toggle");
        toggleDotSize();
      }
  });

}); //DOCREADY DON'T DELETE
