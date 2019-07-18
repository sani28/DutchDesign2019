
$(document).ready(function(){
  //ARRAY OF DOTS
  const designerDots = $(".designer-dot").get();
  const experienceDots = $(".experience-dot").get();
  const previewVideos = $(".bg-preview-video").get();
  const hiddenElements = ["#main-blurb", "#main-nav", "#main-logo", "#main-toggle"];
  var designerNavList = $("#main-nav li").get();
  var intToggle = $("#toggle-int");
  var fieldToggle = $("#toggle-field");

  //STATES
  var interviewsActive = true; // T/F toggle interviews and experiences
  var targetDivs = document.querySelectorAll('.archive-stack'); //select all the archvie stack containers

  for (let i = 0; i < targetDivs.length; i++) { //for all the archive stack containers

    $("#2010").hover(function() {
        $("#2010").css("background-image", "url(./assets/2010.png)");
      },
      function() {
        $("#2010").css("background-image", "none");
      });

    $("#2011").hover(function() {
        $("#2011").css("background-image", "url(./assets/2011.png)");
      },
      function() {
        $("#2011").css("background-image", "none");
      });

    $("#2012").hover(function() {
        $("#2012").css("background-image", "url(./assets/2012.png)");
      },
      function() {
        $("#2012").css("background-image", "none");
      });

    $("#2013").hover(function() {
        $("#2013").css("background-image", "url(./assets/2013.png)");
      },
      function() {
        $("#2013").css("background-image", "none");
      });

    $("#2014").hover(function() {
        $("#2014").css("background-image", "url(./assets/2014.png)");
      },
      function() {
        $("#2014").css("background-image", "none");
      });

    $("#2015").hover(function() {
        $("#2015").css("background-image", "url(./assets/2015.png)");
      },
      function() {
        $("#2015").css("background-image", "none");
      });

    $("#2016").hover(function() {
        $("#2016").css("background-image", "url(./assets/2016.png)");
      },
      function() {
        $("#2016").css("background-image", "none");
      });

    $("#2017").hover(function() {
        $("#2017").css("background-image", "url(./assets/2017.svg)");
      },
      function() {
        $("#2017").css("background-image", "none");
      });

    $("#2018").hover(function() {
        $("#2018").css("background-image", "url(./assets/2018.png)");
      },
      function() {
        $("#2018").css("background-image", "none");
      });

    $("#2019").hover(function() {
        $("#2019").css("background-image", "url(./assets/2019.png)");
      },
      function() {
        $("#2019").css("background-image", "none");
      });

  }; //end of archive loop


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

  function revertBackground() {
    hidePreviewVideos();
    $("html").css("background-color", "#DFEA4E"); //use a variable in SASS
  }

  function hidePreviewVideos(){
    for(let i=0, len=previewVideos.length; i< len; i++){
      $(previewVideos[i]).addClass("hiddenUI");
    }
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
    }s
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
          hideUIElements();
          hideExperienceDots();
        }
      });
      $(designerDots[i]).mouseout(function(){
        if(interviewsActive){
          changeInactiveState(this, designerDots);
          revertBackground();
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
          hideUIElements();
        }
      });
      $(experienceDots[j]).mouseout(function(){
        if(!interviewsActive){
          changeInactiveState(this, experienceDots);
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
