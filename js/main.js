$(document).ready(function(){

//CURSOR
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  var $hoverables = document.querySelectorAll('.hoverable');

  //ELEMENTS
  const $designerDots = document.querySelectorAll(".designer-dot");
  const $experienceDots = document.querySelectorAll(".experience-dot");
  const $allDots = [ ...$designerDots, ...$experienceDots ];
  const $previewVideos = document.querySelectorAll(".bg-preview-video");
  const $fieldNotesBGs = document.querySelectorAll(".fieldnote-bg");
  const $hiddenElements = ["#top-nav", "#main-nav", "#main-logo", "#main-toggle"];
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
    setState();
    initAnimation();
    showHideBlurb();
    toggleDotState();
    changeActiveSwitch();
    toggleDotSize();
    changeMenuItems();
    highlightDotsOnNavHover();
    initDesignerDotHover();
    initFieldNoteDotHover();
    sessionStorage.visited = "true";
  }

  //sessionStorage for last seen nav, and active states
  function setState(){
    let state = sessionStorage.getItem("digestif");
    if (state == "designer"){
      interviewsActive = true;
    } else if (state == "fieldnotes"){
      interviewsActive = false;
    } else if (state == null){
      interviewsActive = true;
    }
  }

  function showHideBlurb(){
    $("#nav-blurb").mouseenter(toggleBlurb).mouseout(toggleBlurb);
  }
  //state dependant, changes dot sizes
  function toggleDotSize(){
    if(interviewsActive){
      for(let i=0; i<$designerDots.length; i++ ){
        $($designerDots[i]).addClass("active-dot");
        $($designerDots[i]).addClass("hoverable");
      }
      for (let j=0; j<$experienceDots.length; j++){
        $($experienceDots[j]).removeClass("active-dot");
      }
    } else {
      for (let j=0; j<$experienceDots.length; j++){
        $($experienceDots[j]).addClass("active-dot");
        $($experienceDots[j]).addClass("hoverable");
      }
      for(let i=0; i<$designerDots.length; i++ ){
        $($designerDots[i]).removeClass("active-dot");
      }
    }
  }

  //state dependant, changes menu list
  function changeMenuItems(){
    if(interviewsActive){
      $("#designer-list").removeClass("hiddenUI");
      $("#fnotes-list").addClass("hiddenUI");
    } else {
      $("#fnotes-list").removeClass("hiddenUI");
      $("#designer-list").addClass("hiddenUI");
    }
  }

  //state dependant dot controller
  function initDesignerDotHover(){
    for (let i=0, len=$designerDots.length; i < len; i++){
      $($designerDots[i]).mouseenter(function(){
        if(interviewsActive){
          changeInactiveState(this, $designerDots);
          showTitleData(this);
          scrambleSubheader();
          playPreviewVideo(this.id);
          hideUIElements();
          hideExperienceDots();
          hideOverlaps($designerDots);
        }
      });
      $($designerDots[i]).mouseout(function(){
        if(interviewsActive){
          changeInactiveState(this, $designerDots);
          hidePreviewVideos();
          $("#dot-headers").addClass("hiddenUI");
          showUIElements();
          showExperienceDots();
          showDesignerDots();
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
          scrambleSubheader();
          changeBGImage(this.id);
          hideUIElements();
          hideDesignerDots();
          hideOverlaps($experienceDots);
        }
      });
      $($experienceDots[j]).mouseout(function(){
        if(!interviewsActive){
          changeInactiveState(this, $experienceDots);
          hideBGImage();
          $("#dot-headers").addClass("hiddenUI");
          showUIElements();
          showDesignerDots();
          showExperienceDots();
        }
      });
    }
  }

  function changeActiveSwitch(){
    if(interviewsActive){
      $("#toggle-int").addClass("active");
      $("#toggle-field").removeClass("active");
    } else{
      $("#toggle-field").addClass("active");
      $("#toggle-int").removeClass("active");
    }
  }

  // behaviour on click for field notes + designer switch
  function toggleDotState(){
    fieldToggle.click(function(){
        interviewsActive = false;
        changeActiveSwitch();
        toggleDotSize();
        changeMenuItems();
        preloadFieldNotesImages();
        sessionStorage.digestif = "fieldnotes";
    });
    intToggle.click(function(){
        interviewsActive = true;
        changeActiveSwitch();
        toggleDotSize();
        changeMenuItems();
        sessionStorage.digestif = "designer";
    });
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
      case "trulyDot":
        $("#truly-preview-vid").removeClass("hiddenUI");
        break;
      case "nienkeDot":
        $("#nienke-preview-vid").removeClass("hiddenUI");
        break;
      case "jurgenDot":
        $("#jurgen-preview-vid").removeClass("hiddenUI");
        break;
      case "corunumDot":
        $("#corunum-preview-vid").removeClass("hiddenUI");
        break;
      case "florisDot":
        $("#floris-preview-vid").removeClass("hiddenUI");
        break;
      case "futuresDot":
        $("#futures-preview-vid").removeClass("hiddenUI");
        break;
      case "matthewsDot":
        $("#matthews-preview-vid").removeClass("hiddenUI");
        break;
      case "pepeDot":
        $("#pepe-preview-vid").removeClass("hiddenUI");
        break;
      case "inekeDot":
        $("#ineke-preview-vid").removeClass("hiddenUI");
        break;
      case "momkaiDot":
        $("#momkai-preview-vid").removeClass("hiddenUI");
        break
      case "lavaDot":
        $("#lava-preview-vid").removeClass("hiddenUI");
        break
      case "aldoDot":
        $("#aldo-preview-vid").removeClass("hiddenUI");
        break
      case "rebeccaDot":
        $("#rebecca-preview-vid").removeClass("hiddenUI");
        break
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


  function hidePreviewVideos(){
    for(let i=0, len=$previewVideos.length; i< len; i++){
      $($previewVideos[i]).addClass("hiddenUI");
    }
    $("#grid-overlay").addClass("hiddenUI");
    $("html").css("background-color", "#DFEA4E");
  }

  function hideOverlaps(arr){
    let headers = document.getElementById("hover-title");
    let dots = arr;
    for(let i=0; i<$designerDots.length; i++){
      let curr = dots[i];
      if(collision(headers, dots[i])){
        $(dots[i]).css("display", "none");
      }
    }
  }

  function collision(el1, el2){
    let r1 = $(el1);
    let r2 = $(el2);

    let r1x = r1.offset().left;
    let r1w = r1.width();
    let r1y = r1.offset().top;
    let r1h = r1.height();

    let r2x = r2.offset().left;
    let r2w = r2.width();
    let r2y = r2.offset().top;
    let r2h = r2.height();

    if( r1y+r1h < r2y ||
        r1y > r2y+r2h ||
        r1x > r2x+r2w ||
        r1x+r1w < r2x ){
        return false;
    }else{
        return true;
    }
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

  function scrambleSubheader(){
    $("#hover-subtitle").codex({
      speed: 80,
      duration: 600,
      keep_whitespaces: true
    });
  }

  function preloadFieldNotesImages(){
    for (let i=0, len = $fieldNotesBGs.length; i < len; i++ ){
        observer.triggerLoad($fieldNotesBGs[i]);
    }
  }


  //////////////// MOBILE ONLY ///////////////////////////
  var mobileVidSlides = document.getElementsByClassName('bg-mobile-video');
  var mobileHeader = $("#mobile-title");
  var mobileSubhead = $("#mobile-subtitle");
  var mobileMenuFilms = true;

  $('.mobile-video-slider').slick({
    draggable: true,
    swipeToSlide: true,
    lazyload: 'ondemand',
    infinite: true,
    fade: true,
    centerMode: true,
    slidesToShow: 1
   });

   $('.mobile-video-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      let next = mobileVidSlides[nextSlide-1];
      if(nextSlide !== 0){
        mobileHeader.text(next.dataset.title);
        mobileSubhead.text(next.dataset.subtitle);
      } else {
        mobileHeader.text("");
        mobileSubhead.text("");
      }
      if(currentSlide == 0){
        return
      } else {
        $(mobileVidSlides[currentSlide-1]).stop();
      }
    });


    //TODO: goal is to switch the views back and forth between mobile-designer-list and mobile-fieldnote-Listeners
    $("#sidenav-films").on('click', function(){
      if(mobileMenuFilms){
        return
      } else{
        mobileMenuFilms = true;
        $(this).addClass("active");
        $("#sidenav-fn").removeClass("active");
        $("#mobile-fieldnotes-list").addClass("hiddenUI");
        $("#mobile-designers-list").removeClass("hiddenUI");
        $("#mobile-nav-menu").text("Films");
      }
    });

    $("#sidenav-fn").on('click', function(){
      if (!mobileMenuFilms) {
        return
      } else{
        mobileMenuFilms = false;
        $(this).addClass("active");
        $("#sidenav-films").removeClass("active");
        $("#mobile-designers-list").addClass("hiddenUI");
        $("#mobile-fieldnotes-list").removeClass("hiddenUI");
        $("#mobile-nav-menu").text("Field Notes");
      }
    })

    $("#mobile-nav-menu").on("click", function(){
      openNav();
    });

    $("#sidenav-close").on("click", function(){
      closeNav();
    });

    function openNav() {
      document.getElementById("mobile-sidenav").style.width = "100vw";
    }

    function closeNav() {
      document.getElementById("mobile-sidenav").style.width = "0";
    }

}); //DOCREADY DON'T DELETE
