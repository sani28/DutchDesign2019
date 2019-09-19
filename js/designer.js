$(document).ready(function() {
  var vidMouseTimer;
  var vid = document.getElementById("designer-vid");
  var vidFig = document.getElementById("video-fig");
  const playback = document.getElementById("playback");
  const playPause = document.getElementById("play-pause");
  const overlay = document.getElementById("designer-overlay");
  const fullscreen = document.getElementById("fs");
  const progress = document.getElementById("progress");
  const scrollProg = document.getElementById("scroll-progress");
  // const subtitle = document.getElementById("subs");
  const mq = window.matchMedia( "(min-width: 500px)" );
  var scrollController = new ScrollMagic.Controller();
  var scrollControl = new ScrollMagic.Controller();
  var jumpController = new ScrollMagic.Controller();
  var progController = new ScrollMagic.Controller();
  var totalHeight = document.body.scrollHeight;

  var revertProgress = TweenLite.from("#animate", 0.5, {
    autoAlpha: 0,
    scale: 0.7
  });

  var fillProgAnimation = new TimelineLite()
    .add(TweenLite.to(scrollProg, 1.0, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  var showScrollProgress = new ScrollMagic.Scene({
      offset: 200,
      reverse: true
    })
    .setClassToggle("#scroll-tool", "visible")
    .addTo(progController);

  var scrollBackProgress = new ScrollMagic.Scene({
      triggerElement: "a#scroll-top",
      duration: 200,
      triggerHook: "onLeave"
    })
    .setTween(revertProgress)
    .addTo(scrollController);

  var fillScrollProgress = new ScrollMagic.Scene({
      duration: totalHeight - 200,
      offset: 175,
      tweenChanges: true
    })
    .setTween(fillProgAnimation)
    .addTo(progController);


  var backButtonDarken = new ScrollMagic.Scene({
      triggerElement: "#designer-toggle",
      triggerHook: 0.14,
      reverse: true
    })
    .setClassToggle("#back-btn", "purple")
    .addTo(scrollControl);

  var backButtonLighten = new ScrollMagic.Scene({
      triggerElement: "#endimg",
      triggerHook: 0.14,
      offset: 60,
      reverse: true
    })
    .setClassToggle("#back-btn", "white")
    .addTo(scrollControl);

  function pathPrepare($el) {
    let lineLength = $el.getTotalLength();
    $el.style.strokeDasharray = lineLength;
    $el.style.strokeDashoffset = lineLength;
  }

  $('#toggle-transcript').click(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#toggle-overview').removeClass('active');
    $('.designer-summary').hide();
    $('#overview').hide();
    $('#scroll-tool').hide();
    $("#footer").hide();
    $('.transcript').show();
    $('.transcript').css("display", "grid");
  });

  //toggle to overview
  $('#toggle-overview').click(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#toggle-transcript').removeClass('active');
    $('.designer-summary').fadeIn("slow");
    $('#overview').fadeIn("slow");
    $('#scroll-tool').show();
    $("#footer").show();
    $('.transcript').hide();
  });


  //////////////////// SCROLLING BEHAVIOUR ////////////

  // for the scroll-progress bar
  pathPrepare(scrollProg);

  $(document).on("click", "#scroll-top", function(e) {
    scrollController.scrollTo("#video-fig");
  });

  $(document).on("click", "#scroll-text", function(e) {
    scrollController.scrollTo("#video-fig");
  });

  $(document).on("click", "#scroll-down", function(e) {
    jumpController.scrollTo("#designer-toggle");
  });

  jumpController.scrollTo(function(newpos) {
    TweenLite.to(window, 0.6, {
      scrollTo: {
        y: newpos - 30
      },
      ease: Power1.easein
    });
  });

  scrollController.scrollTo(function(newpos) {
    if (window.pageYOffset > (document.body.clientHeight * 0.45)) {
      TweenLite.to(window, 1.3, {
        scrollTo: {
          y: newpos
        },
        ease: Power1.easeIn
      });
    } else {
      TweenLite.to(window, 0.6, {
        scrollTo: {
          y: newpos
        },
        ease: Power1.easeIn
      });
    }
  });

  $('.mobile-slider').slick({
    arrow: false,
    dots: true,
    lazyload: true,
    infinite: true,
   });

  //////////// VIDEO PLAYER BEHAVIOUR ////////

  function togglePlayPause() {
    if (vid.paused) {
      playPause.className = 'pause';
      overlay.style.display = "none";
      vid.play();
      $(".overlayBG").removeClass("hiddenUI");
    } else {
      playPause.className = 'play';
      overlay.style.display = "";
      vid.pause();
    }
  }

  function onTrackedVideoFrame(currentTime, duration) {
    let curr = Math.floor(currentTime);
    let dur = Math.floor(duration);
    $("#currentTime").text(formatTime(curr));
    $("#vidDuration").text(formatTime(dur));
  }

  function initTime(){
    $("#vidDuration").text(formatTime(vid.duration));
  }


  function formatTime(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
  }

  function toggleFullScreen() {
    if (vidFig.requestFullscreen) {
      vidFig.requestFullscreen();
    } else if (vidFig.mozRequestFullScreen) {
      vidFig.mozRequestFullScreen();
    } else if (vidFig.webkitRequestFullscreen) {
      vidFig.webkitRequestFullscreen();
    } else if (vidFig.msRequestFullscreen) {
      vidFig.msRequestFullscreen();
    }
    if (window.innerHeight == screen.height) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  function toggleFullScreenMobile(){
    vid.webkitEnterFullscreen();
    vid.enterFullscreen();
  }

  vid.addEventListener('timeupdate', function() {
    let playbackPos = (vid.currentTime / vid.duration);
    playback.style.width = (playbackPos * 100) + "%";
    onTrackedVideoFrame(this.currentTime, this.duration);
  });

  progress.addEventListener('click', function(e) {
    var pos = (e.pageX - progress.offsetLeft) / this.offsetWidth;
    vid.currentTime = pos * vid.duration;
  });

  fullscreen.addEventListener('click', function() {
    if (mq.matches) {
    toggleFullScreen();
    } else {
    toggleFullScreenMobile();
    }
  });

  $(document).on("click touchend", "#designer-overlay, #designer-vid, #play-pause", function() {
    togglePlayPause();
  });

  vid.addEventListener("playing", function() {
    $("#video-fig").removeClass("play-cursor");
    $("#video-fig").addClass("pause-cursor");
    $("#designer-vid").mousemove(function() {
      if (vidMouseTimer) {
        clearTimeout(vidMouseTimer);
        vidMouseTimer = 0;
      }
      $('#vid-controls').removeClass("hoveraction");
      $("#video-fig").removeClass("hoveraction");
      vidMousetimer = setTimeout(function() {
        $('#vid-controls').addClass("hoveraction");
        $("#video-fig").addClass("hoveraction");
      }, 4000)
    });
  });

  vid.addEventListener("pause", function() {
    $("#video-fig").removeClass("pause-cursor");
    $("#video-fig").addClass("play-cursor");
  });


});

/////////////////////// MOUSE AND HOVER INTERACTIONS ///////////////////
