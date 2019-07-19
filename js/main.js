
$(document).ready(function(){
  //ARRAY OF DOTS
  const designerDots = $(".designer-dot").get();
  const experienceDots = $(".experience-dot").get();
  const previewVideos = $(".bg-preview-video").get();
  const fieldNotesBGs = $(".fieldnote-bg").get();
  const hiddenElements = ["#main-blurb", "#main-nav", "#main-logo", "#main-toggle"];
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
    $("html").css("background-color", "#DFEA4E");
  }

  function showTitleData(hovered){
    let dot = hovered;
    let title = dot.dataset.title;
    let subtitle = dot.dataset.subtitle;
    console.log ("Hovered on: " + title + ", " + subtitle);
    /*PSEUDO code:
    Look at the hovered hovered dot
    Get the title and subtitle
    Show title + subtitle element
    Position this element above hovered dot

    */
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
        $("#" + currentID + "Dot").addClass("nav-highlighted");
      });
      $(designerNavList[i]).mouseout(function(){
        let currentID = this.id;
        $("#" + currentID + "Dot").removeClass("nav-highlighted");
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
        $(this).addClass("active-toggle");
        $("#toggle-int").removeClass("active-toggle");
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
        $(this).addClass("active-toggle");
        $("#toggle-field").removeClass("active-toggle");
        toggleDotSize();
        changeMenuItems();
      }
    });
  }


}); //DOCREADY DON'T DELETE
