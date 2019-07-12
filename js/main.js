$(document).ready(function() {
  var designerDots = [];
  var previewVideos = [];
  designerDots = $(".designer-dot").get();
  experienceDots = $(".experience-dot").get();
  previewVideos = $(".bg-preview-video").get();


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


}); //DOCREADY DON'T DELETE


// $(function changeArchiveImg(id) {
//    $('.archive-stack').each(function() {
//       var archiveId = $(this).attr("id");
//       var image = $('#' + archiveId + ' > a ').attr("id");
//       $('#' + archiveId).css({"background":"url(" + image + ".png)","background-size":"contain"});
//    });
// });
