$(document).ready(function(){

//CURSOR
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  var $hoverables = document.getElementsByClassName('.hoverable');

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
      initTL.from($animateDots[i], 0.095, {opacity: 0});
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
  $.when(initLandingPage()).then(initBehaviour());

  function initLandingPage(){
    setState();
    preloadVideo();
    initAnimation();
    sessionStorage.visited = "true";
  }

  function initBehaviour(){
    showHideBlurb();
    toggleDotState();
    changeActiveSwitch();
    toggleDotSize();
    changeMenuItems();
    highlightDotsOnNavHover();
    initDesignerDotHover();
    initFieldNoteDotHover();
  }

  function preloadVideo(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       return;
     } else {
       for (let i=0, len = $previewVideos.length; i < len; i++ ){
          observer.triggerLoad($previewVideos[i]);
       }
     }
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
        $hoverables = document.querySelectorAll('.hoverable');
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
          $(".cursor__ball").css("mix-blend-mode", "multiply");
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
          $(".cursor__ball").css("mix-blend-mode", "multiply");
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
          $(".cursor__ball").css("mix-blend-mode", "multiply");
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
          $(".cursor__ball").css("mix-blend-mode", "multiply");
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
        $("#lex-preview-vid").show();
        break;
      case "valentinDot":
        $("#valentin-preview-vid").removeClass("hiddenUI");
        $("#valentin-preview-vid").show();
        break;
      case "trulyDot":
        $("#truly-preview-vid").removeClass("hiddenUI");
        $("#truly-preview-vid").show();
        break;
      case "nienkeDot":
        $("#nienke-preview-vid").removeClass("hiddenUI");
        $("#nienke-preview-vid").show();
        break;
      case "jurgenDot":
        $("#jurgen-preview-vid").removeClass("hiddenUI");
        $("#jurgen-preview-vid").show();
        break;
      case "corunumDot":
        $("#corunum-preview-vid").removeClass("hiddenUI");
        $("#corunum-preview-vid").show();
        break;
      case "florisDot":
        $("#floris-preview-vid").removeClass("hiddenUI");
        $("#floris-preview-vid").show();
        break;
      case "futuresDot":
        $("#futures-preview-vid").removeClass("hiddenUI");
        $("#futures-preview-vid").show();
        break;
      case "matthewsDot":
        $("#matthews-preview-vid").removeClass("hiddenUI");
        $("#matthews-preview-vid").show();
        break;
      case "pepeDot":
        $("#pepe-preview-vid").removeClass("hiddenUI");
        $("#pepe-preview-vid").show();
        break;
      case "inekeDot":
        $("#ineke-preview-vid").removeClass("hiddenUI");
        $("#ineke-preview-vid").show();
        break;
      case "momkaiDot":
        $("#momkai-preview-vid").removeClass("hiddenUI");
        $("#momkai-preview-vid").show();
        break
      case "lavaDot":
        $("#lava-preview-vid").removeClass("hiddenUI");
        $("#lava-preview-vid").show();
        break
      case "aldoDot":
        $("#aldo-preview-vid").removeClass("hiddenUI");
        $("#aldo-preview-vid").show();
        break
      case "rebeccaDot":
        $("#rebecca-preview-vid").removeClass("hiddenUI");
        $("#rebecca-preview-vid").show();
        break
      case "edwinDot":
        $("#edwin-preview-vid").removeClass("hiddenUI");
        $("#edwin-preview-vid").show();
        break
      case "widDot":
        $("#wid-preview-vid").removeClass("hiddenUI");
        $("#wid-preview-vid").show();
        break
      case "reglazeDot":
        $("#reglaze-preview-vid").removeClass("hiddenUI");
        $("#reglaze-preview-vid").show();
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
        $("#arnhem-bg").show();
        break;
      case "appianDot":
        $("#appian-bg").removeClass("hiddenUI");
        $("#appian-bg").show();
        break;
      case "atelierDot":
        $("#atelier-bg").removeClass("hiddenUI");
        $("#atelier-bg").show();
        break;
      case "burgundyDot":
        $("#burgundian-bg").removeClass("hiddenUI");
        $("#burgundian-bg").show();
        break;
      case "breweryDot":
        $("#cantillion-bg").removeClass("hiddenUI");
        $("#cantillion-bg").show();
        break;
      case "feltingDot":
        $("#felting-bg").removeClass("hiddenUI");
        $("#felting-bg").show();
        break;
      case "kikiDot":
        $("#kiki-bg").removeClass("hiddenUI");
        $("#kiki-bg").show();
        break;
      case "farmDot":
        $("#leeuwarden-bg").removeClass("hiddenUI");
        $("#leeuwarden-bg").show();
        break;
      case "milkDot":
        $("#melkhuis-bg").removeClass("hiddenUI");
        $("#melkhuis-bg").show();
        break;
      case "rensDot":
        $("#rens-bg").removeClass("hiddenUI");
        $("#rens-bg").show();
        break;
      case "romeDot":
        $("#roma-bg").removeClass("hiddenUI");
        $("#roma-bg").show();
        break;
      case "texelsDot":
        $("#texels-bg").removeClass("hiddenUI");
        $("#texels-bg").show();
        break;
      case "andreaDot":
        $("#andrea-bg").removeClass("hiddenUI");
        $("#andrea-bg").show();
        break;
      case "btsDot":
        $("#bts-bg").removeClass("hiddenUI");
        $("#bts-bg").show();
        break;
    }
  }

  function hideBGImage(){
    for(let i=0, len=$fieldNotesBGs.length; i< len; i++){
      $($fieldNotesBGs[i]).fadeOut(200);
    }
  }


  function hidePreviewVideos(){
    for(let i=0, len=$previewVideos.length; i< len; i++){
      $($previewVideos[i]).fadeOut(200);
    }
    $("#grid-overlay").addClass("hiddenUI");
    $("html").css("background-color", "#DFEA4E");
  }

  function hideOverlaps(arr){
    let headers = document.getElementById("hover-title");
    let dots = arr;
    for(let i=0; i<dots.length; i++){
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
  const mobileHeader = $("#mobile-title");
  const mobileSubhead = $("#mobile-subtitle");
  const slideNumber = $("#current-slide");
  var totalSlides = 14;
  var mobileMenuFilms = true;


  // slick custom dots courtesy of https://codepen.io/swarad07/pen/xmzQKm swarad07
  function setBoundries(slick, state) {
    if (state === 'default') {
      slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
    }
  }

  // Slick Selector.
  var slickSlider = $('#mobile-video-slider');
  var maxDots = 5;
  var transformXIntervalNext = -18;
  var transformXIntervalPrev = 18;

  slickSlider.on('init', function (event, slick) {
    $(this).find('ul.slick-dots').wrap("<div class='slick-dots-container'></div>");
    $(this).find('ul.slick-dots li').each(function (index) {
      $(this).addClass('dot-index-' + index);
    });
    $(this).find('ul.slick-dots').css('transform', 'translateX(0)');
    setBoundries($(this),'default');
  });

  var transformCount = 0;
  slickSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var totalCount = $(this).find('.slick-dots li').length;
    if (totalCount > maxDots) {
      if (nextSlide > currentSlide) {
        if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
          if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
            transformCount = transformCount + transformXIntervalNext;
            $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
            var nextSlidePlusOne = nextSlide + 1;
            $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1');
            $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
            var pPointer = nextSlide - 3;
            var pPointerMinusOne = pPointer - 1;
            $(this).find('ul.slick-dots li').eq(pPointerMinusOne).removeClass('p-small-1');
            $(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1');
          }
        }
      }
      else {
        if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
          if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
            transformCount = transformCount + transformXIntervalPrev;
            $(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
            var nextSlidePlusOne = nextSlide - 1;
            $(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1');
            $(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
            var nPointer = currentSlide + 3;
            var nPointerMinusOne = nPointer - 1;
            $(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1');
            $(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1');
          }
        }
      }
    }
  });

  $('button').on('click', function()  {
      $('#mobile-video-slider').slick('slickGoTo', 4);
    // gallery.slick('slickGoTo', parseInt(slideIndex));
  });

  $('#mobile-video-slider').slick({
    dots: true,
    draggable: true,
    infinite: false,
    swipeToSlide: true,
    focusOnSelect: true,
    fade: true,
    slidesToShow: 1
   });


   $('#mobile-video-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      let next = mobileVidSlides[nextSlide-1];
      if(nextSlide !== 0){
        mobileHeader.text(next.dataset.title);
        mobileSubhead.text(next.dataset.subtitle);
        slideNumber.text(next.dataset.order);
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

    for(let i = 0; i<mobileVidSlides.length; i++){
        $(mobileVidSlides[i]).on('click', function(){
          window.location.assign(this.dataset.href);
        });
    }

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
