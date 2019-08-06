
$(document).ready(function(){
  //ELEMENTS
  const designerDots = $(".designer-dot").get();
  const experienceDots = $(".experience-dot").get();
  const previewVideos = $(".bg-preview-video").get();
  const fieldNotesBGs = $(".fieldnote-bg").get();
  const hiddenElements = ["#top-nav", "#main-nav", "#main-logo", "#main-toggle", "#toggle-int", "#toggle-field"];
  var designerNavList = $("#main-nav li").get();
  var intToggle = $("#toggle-int");
  var fieldToggle = $("#toggle-field");

  //STATES
  var interviewsActive = true; // T/F toggle interviews and experiences

/////////////////////////////////////////////////////////////////////////
/////////////// LANDING PAGE FUNCTIONS START HERE ///////////////////////
/////////////////////////////////////////////////////////////////////////
  initLandingPage();

  function initLandingPage(){
    toggleDotState();
    highlightDotsOnNavHover();
    initDesignerDotHover();
    initFieldNoteDotHover();
  }

  function hideUIElements(){
    for (let i=0; i<hiddenElements.length; i++){
      $(hiddenElements[i]).addClass("hiddenUI");
    }
  }

  function showUIElements(){
    for (let i=0; i<hiddenElements.length; i++){
      $(hiddenElements[i]).removeClass("hiddenUI");
    }
  }
  function toggleBlurb(){
    $("#home-blurb").toggleClass("hiddenUI");
    $("#home-cal").toggleClass("hiddenUI");
  }

  $("#nav-blurb").mouseenter(toggleBlurb).mouseout(toggleBlurb);

  function playPreviewVideo(videoID) {
    let currentVideo = videoID;
    switch (currentVideo) {
      case "lexDot":
        $("#lex-preview-vid").removeClass("hiddenUI");
        break;
      case "valentinDot":
        $("#valentin-preview-vid").removeClass("hiddenUI");
        break;
    }
    $("#grid-overlay").removeClass("hiddenUI");
  }

  function changeBGImage(fieldID){
    let bgImg = fieldID;
    switch (bgImg) {
      case "arnhemDot":
        console.log(bgImg);
        $("#arnhem-bg").removeClass("hiddenUI");
        break;
    }
  }

  function hideBGImage(){
    for(let i=0, len=fieldNotesBGs.length; i< len; i++){
      $(fieldNotesBGs[i]).addClass("hiddenUI");
    }
  }

  function hidePreviewVideos(){
    for(let i=0, len=previewVideos.length; i< len; i++){
      $(previewVideos[i]).addClass("hiddenUI");
    }
    $("#grid-overlay").addClass("hiddenUI");
    $("html").css("background-color", "#DFEA4E");
  }

  function showTitleData(hovered){
    //TODO: THIS CODE SEEMS SUPER DIRTY
    let dot = hovered;
    let col = $(dot).parent().css("grid-column-start");
    let row = $(dot).parent().css("grid-row-start");
    $("#hover-subtitle").text(dot.dataset.subtitle);
    $("#hover-title").text(dot.dataset.title);
    $("#dot-headers").css("grid-column-start", 0);
    $("#dot-headers").css("grid-column-end", Number(col)+8);
    $("#dot-headers").css("grid-row-start", Number(row)+4)
    $("#dot-headers").css("grid-row-end", Number(row)+4);
    $("#dot-headers").removeClass("hiddenUI");
  }

  function hideExperienceDots() {
    for (let i = 0, len = experienceDots.length; i < len; i++) {
      $(experienceDots[i]).css("display", "none");
    }
  }

  function showExperienceDots() {
    for (let i = 0, len = experienceDots.length; i < len; i++) {
      $(experienceDots[i]).css("display", "inline-block");
    }
  }

  function changeInactiveState(hovered, dotArray){
    let currentDot = hovered;
    for(let i=0, len=dotArray.length; i < len; i++){
      let deactivatedDot = dotArray[i];
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

  function changeMenuItems(){
    if(interviewsActive){
      $("#designer-list").removeClass("hiddenUI");
      $("#fnotes-list").addClass("hiddenUI");
    } else {
      $("#fnotes-list").removeClass("hiddenUI");
      $("#designer-list").addClass("hiddenUI");
    }
  }

  function highlightDotsOnNavHover(){
    for(let i=0; i < designerNavList.length; i++){
      $(designerNavList[i]).mouseenter(function(){
        let currentID = this.id;
        $("#" + currentID + "Dot").addClass("nav-highlight");
      });
      $(designerNavList[i]).mouseout(function(){
        let currentID = this.id;
        $("#" + currentID + "Dot").removeClass("nav-highlight");
      });
    }
  }

  function initDesignerDotHover(){
    for (let i=0, len=designerDots.length; i < len; i++){
      $(designerDots[i]).mouseenter(function(){
        if(interviewsActive){
          changeInactiveState(this, designerDots);
          playPreviewVideo(this.id);
          showTitleData(this);
          hideUIElements();
          hideExperienceDots();
        }
      });
      $(designerDots[i]).mouseout(function(){
        if(interviewsActive){
          changeInactiveState(this, designerDots);
          hidePreviewVideos();
          $("#dot-headers").addClass("hiddenUI");
          showUIElements();
          showExperienceDots();
        }
      });
    }
  }

  function initFieldNoteDotHover(){
    for (let j=0, len=experienceDots.length; j < len; j++){
      $(experienceDots[j]).mouseenter(function(){
        if(!interviewsActive){
          changeInactiveState(this, experienceDots);
          changeBGImage(this.id);
          hideUIElements();
        }
      });
      $(experienceDots[j]).mouseout(function(){
        if(!interviewsActive){
          changeInactiveState(this, experienceDots);
          hideBGImage();
          showUIElements();
        }
      });
    }
  }

  function toggleDotState(){
    fieldToggle.click(function(){
      if(!interviewsActive){
        return;
      }
      else{
        interviewsActive = false;
        $(this).addClass("active");
        $("#toggle-int").removeClass("active");
        toggleDotSize();
        changeMenuItems();
      }
    });
    intToggle.click(function(){
      if(interviewsActive){
        return;
      }
      else{
        interviewsActive = true;
        $(this).addClass("active");
        $("#toggle-field").removeClass("active");
        toggleDotSize();
        changeMenuItems();
      }
    });
  }


}); //DOCREADY DON'T DELETE
