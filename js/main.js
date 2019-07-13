$(document).ready(function(){
  //ARRAY OF DOTS
  const designerDots = $(".designer-dot").get();
  const experienceDots = $(".experience-dot").get();
  const previewVideos = $(".bg-preview-video").get();
  var intToggle = $( "#toggle-int" );
  var expToggle = $( "#toggle-exp" );
  //STATES
  var interviewsActive = true; // T/F toggle interviews and experiences


  var targetDivs = document.querySelectorAll('.archive-stack'); //select all the archvie stack containers

  for (var i = 0; i < targetDivs.length; i++) { //for all the archive stack containers

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




  function playPreviewVideo(videoID) {
    let currentVideo = videoID;
    switch (currentVideo) { //takes a string from the index html
      case "lexDot":
        $("#lex-preview-vid").css("display", "block");
        break;
      case "valentinDot":
        $("#valentin-preview-vid").css("display", "block");
        break;
    }
  }

  function revertBackground() {
    hidePreviewVideos();
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

  // function showDesignerDots(){
  //   for (let i=0, len=designerDots.length; i<len; i++){
  //     $(designerDots[i]).css("display", "inline-block");
  //   }
  // }
  //
  // function hideDesignerDots(){
  //   for (let i=0, len=designerDots.length; i<len; i++){
  //     $(designerDots[i]).css("display", "none");
  //   }
  // }

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
    for (let j=0, len=experienceDots.length; j < len; j++){
      $(experienceDots[j]).mouseenter(function(){
          changeInactiveState(this);
          // playPreviewVideo(this.id);
          // hideDesignerDots();
      });
      $(experienceDots[j]).mouseout(function(){
          changeInactiveState(this);
          // revertBackground();
          // showDesignerDots();}
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


// $(function changeArchiveImg(id) {
//    $('.archive-stack').each(function() {
//       var archiveId = $(this).attr("id");
//       var image = $('#' + archiveId + ' > a ').attr("id");
//       $('#' + archiveId).css({"background":"url(" + image + ".png)","background-size":"contain"});
//    });
// });
