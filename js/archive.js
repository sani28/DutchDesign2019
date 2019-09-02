$(document).ready(function() {

  var targetDivs = document.querySelectorAll('.archive-stack'); //select all the archvie stack containers

  for (var i = 0; i < targetDivs.length; i++) { //for all the archive stack containers

    $("#ten").hover(function() {
        $("#ten").css("background-image", "url(../assets/2010-BG.svg)");
        $("#yearten").css("color", "white");
      },
      function() {
        $("#ten").css("background-image", "none");
        $("#yearten").css("color", "#7D246B");
      });

    $("#eleven").hover(function() {
        $("#eleven").css("background-image", "url(../assets/2011-BG.svg)");
        $("#yeareleven").css("color", "white");
      },
      function() {
        $("#eleven").css("background-image", "none");
        $("#yeareleven").css("color", "#7D246B");
      });

    $("#twelve").hover(function() {
        $("#twelve").css("background-image", "url(../assets/2012-BG.svg)");
        $("#yeartwelve").css("color", "black");
      },
      function() {
        $("#twelve").css("background-image", "none");
        $("#yeartwelve").css("color", "#7D246B");
      });

    $("#thirteen").hover(function() {
        $("#thirteen").css("background-image", "url(../assets/2013-BG.svg)");
        $("#yearthirteen").css("color", "white");
      },
      function() {
        $("#thirteen").css("background-image", "none");
        $("#yearthirteen").css("color", "#7D246B");
      });

    $("#fourteen").hover(function() {
        $("#fourteen").css("background-image", "url(../assets/2014-BG.svg)");
        $("#yearfourteen").css("color", "white");
      },
      function() {
        $("#fourteen").css("background-image", "none");
        $("#yearfourteen").css("color", "#7D246B");
      });

    $("#fifteen").hover(function() {
        $("#fifteen").css("background-image", "url(../assets/2015-BG.svg)");
        $("#yearfifteen").css("color", "white");
      },
      function() {
        $("#fifteen").css("background-image", "none");
        $("#yearfifteen").css("color", "#7D246B");
      });

    $("#sixteen").hover(function() {
        $("#sixteen").css("background-image", "url(../assets/2016-BG.png)");
        $("#yearsixteen").css("color", "white");
      },
      function() {
        $("#sixteen").css("background-image", "none");
        $("#yearsixteen").css("color", "#7D246B");
      });

    $("#seventeen").hover(function() {
        $("#seventeen").css("background-image", "url(../assets/2017-BG.svg)");
        $("#yearseventeen").css("color", "black");
      },
      function() {
        $("#seventeen").css("background-image", "none");
        $("#yearseventeen").css("color", "#7D246B");
      });

    $("#eighteen").hover(function() {
        $("#eighteen").css("background-image", "url(../assets/2018-BG.svg)");
        $("#yeareighteen").css("color", "white");
      },
      function() {
        $("#eighteen").css("background-image", "none");
        $("#yeareighteen").css("color", "#7D246B");
      });

    $("#nineteen").hover(function() {
        $("#nineteen").css("background-image", "url(../assets/2019-BG.svg)");
        $("#eighteen").css("background-image", "url(../assets/2018-BG.svg)");
        $("#seventeen").css("background-image", "url(../assets/2017-BG.svg)");
        $("#sixteen").css("background-image", "url(../assets/2016-BG.svg)");
        $("#fifteen").css("background-image", "url(../assets/2015-BG.svg)");
        $("#fourteen").css("background-image", "url(../assets/2014-BG.svg)");
        $("#thirteen").css("background-image", "url(../assets/2013-BG.svg)");
        $("#twelve").css("background-image", "url(../assets/2012-BG.svg)");
        $("#eleven").css("background-image", "url(../assets/2011-BG.svg)");
        $("#ten").css("background-image", "url(../assets/2010-BG.svg)");
        $("#yearten").css("color", "white");
        $("#yeareleven").css("color", "white");
        $("#yeartwelve").css("color", "black");
        $("#yearthirteen").css("color", "white");
        $("#yearfourteen").css("color", "white");
        $("#yearfifteen").css("color", "white");
        $("#yearsixteen").css("color", "white");
        $("#yearseventeen").css("color", "black");
        $("#yeareighteen").css("color", "white");
        $("#yearnineteen").css("color", "white");
      },

      function() {
        $("#nineteen").css("background-image", "none");
        $("#eighteen").css("background-image", "none");
        $("#seventeen").css("background-image", "none");
        $("#sixteen").css("background-image", "none");
        $("#fifteen").css("background-image", "none");
        $("#fourteen").css("background-image", "none");
        $("#thirteen").css("background-image", "none");
        $("#twelve").css("background-image", "none");
        $("#eleven").css("background-image", "none");
        $("#ten").css("background-image", "none");
        $("#yearten").css("color", "#7D246B");
        $("#yeareleven").css("color", "#7D246B");
        $("#yeartwelve").css("color", "#7D246B");
        $("#yearthirteen").css("color", "#7D246B");
        $("#yearfourteen").css("color", "#7D246B");
        $("#yearfifteen").css("color", "#7D246B");
        $("#yearfifteen").css("color", "#7D246B");
        $("#yearsixteen").css("color", "#7D246B");
        $("#yearseventeen").css("color", "#7D246B");
        $("#yeareighteen").css("color", "#7D246B");
        $("#yearnineteen").css("color", "#7D246B");
      });

  }; //end of archive loop


  //map vertical scroll to horizontal scroll using mousewheel
  $(function() {

    $("html").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 1);
    });

  });

});
