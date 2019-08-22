$(document).ready(function(){

//CURSOR
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  const $hoverables = document.querySelectorAll('.hoverable');

  //ELEMENTS
  const $designerDots = document.querySelectorAll(".designer-dot");
  const $experienceDots = document.querySelectorAll(".experience-dot");
  const $allDots = [ ...$designerDots, ...$experienceDots ];
  const $previewVideos = document.querySelectorAll(".bg-preview-video");
  const $fieldNotesBGs = document.querySelectorAll(".fieldnote-bg");
  const $hiddenElements = ["#top-nav", "#main-nav", "#main-logo", "#main-toggle"];
  var $animateDots = [];
  var designerNavList = $("#main-nav li").get();
  var intToggle = $("#toggle-int");
  var fieldToggle = $("#toggle-field");

  //STATES & STYLES
  var interviewsActive = true;
//////////////////////////////////////////////////////////////////////
/////////////// CURSOR SPECIFIC FUNCTIONS///////////////////////
//////////////////////////////////////////////////////////////////////
  // Listeners
  document.body.addEventListener('mousemove', onMouseMove);
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }
  // Move the cursor
  function onMouseMove(e) {
    TweenMax.to($smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 7 });
  }
  // Hover an element
  function onMouseHover() {
    TweenMax.to($smallBall, .3, {
      scale: 4 });
  }
  function onMouseHoverOut() {
    TweenMax.to($smallBall, .3, {
      scale: 1 });
  }


/////////////////////////////////////////////////////////////////////////
/////////////////////// ANIMATION RELATED  ///////////////////////////
/////////////////////////////////////////////////////////////////////////
var initTL = new TimelineLite({delay:0.5});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function initAnimation() {
  let visited = sessionStorage.getItem("visited");
  if(visited !== null) {
    return;
  } else {
    $animateDots = shuffle($allDots);
    for(let i=0; i<$animateDots.length; i++){
      initTL.from($animateDots[i], 0.08, {opacity: 0});
    }
    for(let i=0; i<$hiddenElements.length; i++){
      initTL.from($hiddenElements[i], 1.35, {opacity: 0, delay: 0.65},  "phase2");
    }
  }
}

/////////////////////////////////////////////////////////////////////////
/////////////// LANDING PAGE FUNCTIONS START HERE ///////////////////////
/////////////////////////////////////////////////////////////////////////
  const observer = lozad(); // lazy loads elements with '.lozad' selector
  observer.observe();
  initLandingPage();

  function initLandingPage(){
    toggleDotState();
    highlightDotsOnNavHover();
    initDesignerDotHover();
    initFieldNoteDotHover();
    initAnimation();
    $("#nav-blurb").mouseenter(toggleBlurb).mouseout(toggleBlurb);
    sessionStorage.visited = "true";
  }

  function hideUIElements(){
    for (let i=0; i<$hiddenElements.length; i++){
      $($hiddenElements[i]).addClass("hiddenUI");
    }
  }

  function showUIElements(){
    for (let i=0; i<$hiddenElements.length; i++){
      $($hiddenElements[i]).removeClass("hiddenUI");
    }
  }
  function toggleBlurb(){
    $("#home-cal").fadeToggle(350);
    $("#home-blurb").fadeToggle(350).toggleClass("hiddenUI");
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
    observer.observe();
    $("#grid-overlay").removeClass("hiddenUI");
  }

  function changeBGImage(fieldID){
    let bgImg = fieldID;
    switch (bgImg) {
      case "arnhemDot":
        $("#arnhem-bg").removeClass("hiddenUI");
        break;
      case "appianDot":
        $("#appian-bg").removeClass("hiddenUI");
        break;
      case "atelierDot":
        $("#atelier-bg").removeClass("hiddenUI");
        break;
      case "burgundyDot":
        $("#burgundian-bg").removeClass("hiddenUI");
        break;
      case "breweryDot":
        $("#cantillion-bg").removeClass("hiddenUI");
        break;
      case "feltingDot":
        $("#felting-bg").removeClass("hiddenUI");
        break;
      case "kikiDot":
        $("#kiki-bg").removeClass("hiddenUI");
        break;
      case "farmDot":
        $("#leeuwarden-bg").removeClass("hiddenUI");
        break;
      case "milkDot":
        $("#melkhuis-bg").removeClass("hiddenUI");
        break;
      case "rensDot":
        $("#rens-bg").removeClass("hiddenUI");
        break;
      case "romeDot":
        $("#roma-bg").removeClass("hiddenUI");
        break;
      case "texelsDot":
        $("#texels-bg").removeClass("hiddenUI");
        break;
      case "andreaDot":
        $("#andrea-bg").removeClass("hiddenUI");
        break;
      case "btsDot":
        $("#bts-bg").removeClass("hiddenUI");
        break;
    }
  }

  function hideBGImage(){
    for(let i=0, len=$fieldNotesBGs.length; i< len; i++){
      $($fieldNotesBGs[i]).addClass("hiddenUI");
    }
  }

  // function removeBackground(){
  //   document.getElementById("exp-landing-photo").style.background= "none";
  // }

  function hidePreviewVideos(){
    for(let i=0, len=$previewVideos.length; i< len; i++){
      $($previewVideos[i]).addClass("hiddenUI");
    }
    $("#grid-overlay").addClass("hiddenUI");
    $("html").css("background-color", "#DFEA4E");
  }

  function hideTitleOverlap(hovered){
    let headerWidth = $("#dot-headers").width();
    //TODO: Complete overlap
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
    $("#dot-headers").css("grid-row-start", Number(row)+3)
    $("#dot-headers").css("grid-row-end", Number(row)+3);
    $("#dot-headers").removeClass("hiddenUI");
  }

  function hideDesignerDots(){
    for (let i=0, len=$designerDots.length; i < len; i++){
      $($designerDots[i]).css("display", "none");
    }
  }

  function hideExperienceDots() {
    for (let i = 0, len = $experienceDots.length; i < len; i++) {
      $($experienceDots[i]).css("display", "none");
    }
  }

  function showExperienceDots() {
    for (let i = 0, len = $experienceDots.length; i < len; i++) {
      $($experienceDots[i]).css("display", "inline-block");
    }
  }

  function showDesignerDots() {
    for (let i = 0, len = $designerDots.length; i < len; i++) {
      $($designerDots[i]).css("display", "inline-block");
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
      for(let i=0; i<$designerDots.length; i++ ){
        $($designerDots[i]).addClass("active-dot");
      }
      for (let j=0; j<$experienceDots.length; j++){
        $($experienceDots[j]).removeClass("active-dot");
      }
    } else {
      for (let j=0; j<$experienceDots.length; j++){
        $($experienceDots[j]).addClass("active-dot");
      }
      for(let i=0; i<$designerDots.length; i++ ){
        $($designerDots[i]).removeClass("active-dot");
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
    for (let i=0, len=$designerDots.length; i < len; i++){
      $($designerDots[i]).mouseenter(function(){
        if(interviewsActive){
          changeInactiveState(this, $designerDots);
          playPreviewVideo(this.id);
          showTitleData(this);
          hideTitleOverlap(this);
          hideUIElements();
          hideExperienceDots();
        }
      });
      $($designerDots[i]).mouseout(function(){
        if(interviewsActive){
          changeInactiveState(this, $designerDots);
          hidePreviewVideos();
          $("#dot-headers").addClass("hiddenUI");
          showUIElements();
          showExperienceDots();
        }
      });
    }
  }

  function initFieldNoteDotHover(){
    for (let j=0, len=$experienceDots.length; j < len; j++){
      $($experienceDots[j]).mouseenter(function(){
        if(!interviewsActive){
          changeInactiveState(this, $experienceDots);
          showTitleData(this);
          changeBGImage(this.id);
          hideUIElements();
          hideDesignerDots();
        }
      });
      $($experienceDots[j]).mouseout(function(){
        if(!interviewsActive){
          changeInactiveState(this, $experienceDots);
          hideBGImage();
          $("#dot-headers").addClass("hiddenUI");
          showUIElements();
          showDesignerDots();
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
