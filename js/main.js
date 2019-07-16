$(document).ready(function() {
  var designerDots = [];
  var previewVideos = [];
  designerDots = $(".designer-dot").get();
  experienceDots = $(".experience-dot").get();
  previewVideos = $(".bg-preview-video").get();

  var targetDivs = document.querySelectorAll('.archive-stack'); //select all the archvie stack containers

  for (var i = 0; i < targetDivs.length; i++) { //for all the archive stack containers

    $("#ten").hover(function() {
        $("#ten").css("background-image", "url(./assets/2010.png)");
        $("#yearten").css("color", "white");
      },
      function() {
        $("#ten").css("background-image", "none");
        $("#yearten").css("color", "#7D246B");
      });

    $("#eleven").hover(function() {
        $("#eleven").css("background-image", "url(./assets/2011.png)");
        $("#yeareleven").css("color", "white");
      },
      function() {
        $("#eleven").css("background-image", "none");
        $("#yeareleven").css("color", "#7D246B");
      });

    $("#twelve").hover(function() {
        $("#twelve").css("background-image", "url(./assets/2012.png)");
        $("#yeartwelve").css("color", "black");
      },
      function() {
        $("#twelve").css("background-image", "none");
        $("#yeartwelve").css("color", "#7D246B");
      });

    $("#thirteen").hover(function() {
        $("#thirteen").css("background-image", "url(./assets/2013.png)");
        $("#yearthirteen").css("color", "white");
      },
      function() {
        $("#thirteen").css("background-image", "none");
        $("#yearthirteen").css("color", "#7D246B");
      });

    $("#fourteen").hover(function() {
        $("#fourteen").css("background-image", "url(./assets/2014.png)");
        $("#yearfourteen").css("color", "white");
      },
      function() {
        $("#fourteen").css("background-image", "none");
        $("#yearfourteen").css("color", "#7D246B");
      });

    $("#fifteen").hover(function() {
        $("#fifteen").css("background-image", "url(./assets/2015.png)");
        $("#yearfifteen").css("color", "white");
      },
      function() {
        $("#fifteen").css("background-image", "none");
        $("#yearfifteen").css("color", "#7D246B");
      });

    $("#sixteen").hover(function() {
        $("#sixteen").css("background-image", "url(./assets/2016.png)");
        $("#yearsixteen").css("color", "#4cb883");
      },
      function() {
        $("#sixteen").css("background-image", "none");
        $("#yearsixteen").css("color", "#7D246B");
      });

    $("#seventeen").hover(function() {
        $("#seventeen").css("background-image", "url(./assets/2017.svg)");
        $("#yearseventeen").css("color", "black");
      },
      function() {
        $("#seventeen").css("background-image", "none");
        $("#yearseventeen").css("color", "#7D246B");
      });

    $("#eighteen").hover(function() {
        $("#eighteen").css("background-image", "url(./assets/2018.png)");
        $("#yeareighteen").css("color", "white");
      },
      function() {
        $("#eighteen").css("background-image", "none");
        $("#yeareighteen").css("color", "#7D246B");
      });

    $("#nineteen").hover(function() {
        $("#nineteen").css("background-image", "url(./assets/2019.png)");
      },
      function() {
        $("#nineteen").css("background-image", "none");
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
    $("html").css("background-image", "linear-gradient(120deg, #C3EB23 0%, #C3EB23 100%)");
  }

  function hidePreviewVideos() {
    for (let i = 0, len = previewVideos.length; i < len; i++) {
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
  // is this better: https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/

  //TODO: I should be able to refactor this to reduce code length by 1/2
  for (let i = 0, len = designerDots.length; i < len; i++) {
    //passes designerDots as an array into a function
    $(designerDots[i]).mouseenter(function() {
      let currentDesigner = this;
      for (let j = 0, len = designerDots.length; j < len; j++) {
        if (designerDots[j] != currentDesigner) {
          $(designerDots[j]).addClass("dot-unhovered");
        };
      }
      playPreviewVideo(currentDesigner.id);
      hideExperienceDots();
    });
    $(designerDots[i]).mouseout(function() {
      let currentDesigner = this;
      for (let j = 0, len = designerDots.length; j < len; j++) {
        if (designerDots[j] != currentDesigner) {
          $(designerDots[j]).removeClass("dot-unhovered");
        };
      }
      revertBackground();
      showExperienceDots();
    });
  }


  //map vertical scroll to horizontal scroll using mousewheel
  $(function() {

     $("html").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 1);
     });

  });

}); //DOCREADY DON'T DELETE
