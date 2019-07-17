$(document).ready(function(){
  //ARRAY OF DOTS
  const designerDots = $(".designer-dot").get();
  const experienceDots = $(".experience-dot").get();
  const previewVideos = $(".bg-preview-video").get();
  var designerNavList = $("#main-nav>.designer-list li").get();
  var intToggle = $( "#toggle-int" );
  var expToggle = $( "#toggle-field" );

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
    manageDesignerDotHover();
    manageFieldNoteDotHover();
  }


  function playPreviewVideo(videoID) {
    let currentVideo = videoID;
    hideUIElements();
    switch (currentVideo) { //takes a string from the index html
      case "lexDot":
        $("#lex-preview-vid").css("display", "block");
        break;
      case "valentinDot":
        $("#valentin-preview-vid").css("display", "block");
        break;
    }
  }

  function hideUIElements(){
    $("#main-blurb").css("display", "none");
    $("#main-nav").css("display", "none");
    $("#main-logo").css("display", "none");
    $("#main-toggle").css("display", "none");
  }

  function showUIElements(){
    $("#main-toggle").css("display", "grid");
    $("#main-logo").css("display", "block");
    $("#main-nav").css("display", "block");
    $("#main-blurb").css("display", "block");
  }

  function revertBackground() {
    hidePreviewVideos();
    showUIElements();
    $("html").css("background-color", "#DFEA4E");
  }

  function hidePreviewVideos(){
    for(let i=0, len=previewVideos.length; i< len; i++){
      $(previewVideos[i]).css("display", "none");
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

  function changeInactiveState(hovered){
    if (interviewsActive){
      for(let i=0, len=designerDots.length; i < len; i++){
        let currentDot = hovered;
        let deactivatedDot = designerDots[i];
        if(deactivatedDot!=currentDot){
          $(deactivatedDot).hasClass("dot-unhovered") ? $(deactivatedDot).removeClass("dot-unhovered") : $(deactivatedDot).addClass("dot-unhovered");
        }
      }
    }
    else {
      for (let j=0, len=experienceDots.length; j < len; j++){
        let currentDot = hovered;
        let deactivatedDot = experienceDots[j];
        if(deactivatedDot!=currentDot){
          $(deactivatedDot).hasClass("dot-unhovered") ? $(deactivatedDot).removeClass("dot-unhovered") : $(deactivatedDot).addClass("dot-unhovered");
        }
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

  function highlightDotsOnNavHover(){
    for(let i=0; i < designerNavList.length; i++){
      $(designerNavList[i]).mouseenter(function(){
        let currentID = this.id;
        $("#" + currentID + "Dot").addClass("nav-highlighted");
      });
      $(designerNavList[i]).mouseout(function(){
        let currentID = this.id;
        $("#" + currentID + "Dot").removeClass("nav-highlighted");
      })
    }
  }

  function manageDesignerDotHover(){
    for (let i=0, len=designerDots.length; i < len; i++){
      $(designerDots[i]).mouseenter(function(){
        if(interviewsActive){
          changeInactiveState(this);
          playPreviewVideo(this.id);
          hideExperienceDots();
        }

      });
      $(designerDots[i]).mouseout(function(){
        if(interviewsActive){
          changeInactiveState(this);
          revertBackground();
          showExperienceDots();
        }
      });
    }
  }

  function manageFieldNoteDotHover(){
    for (let j=0, len=experienceDots.length; j < len; j++){
      $(experienceDots[j]).mouseenter(function(){
          changeInactiveState(this);
      });
      $(experienceDots[j]).mouseout(function(){
          changeInactiveState(this);
      });
    }
  }
  function toggleDotState(){
    expToggle.click(function(){
      if(!interviewsActive){
        return;
      }
      else{
        interviewsActive = false;
        $(this).addClass("active-state-toggle");
        $("#toggle-int").removeClass("active-state-toggle");
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
        $("#toggle-field").removeClass("active-state-toggle");
        toggleDotSize();
      }
    });
  }


}); //DOCREADY DON'T DELETE


// $(function changeArchiveImg(id) {
//    $('.archive-stack').each(function() {
//       var archiveId = $(this).attr("id");
//       var image = $('#' + archiveId + ' > a ').attr("id");
//       $('#' + archiveId).css({"background":"url(" + image + ".png)","background-size":"contain"});
//    });
// });
