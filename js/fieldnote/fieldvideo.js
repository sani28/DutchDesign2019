$(document).ready(function() {
  var vidMouseTimer;
  var offset = $("#progress").offset();
  const vid = document.getElementById('exp-vid');
  const vidFig = document.getElementById("video-fig");
  const playback = document.getElementById("playback");
  const playPause = document.getElementById("play-pause");
  const fullscreen = document.getElementById("fs");
  const progress = document.getElementById("progress");
  const mq = window.matchMedia( "(min-width: 500px)" );

  function togglePlayPause() {
    if (vid.paused) {
      playPause.className = 'pause';
      vid.play();
    } else {
      playPause.className = 'play';
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
    var pos = (e.pageX - (offset.left))  / this.offsetWidth;
    vid.currentTime = pos * vid.duration;
  });

  fullscreen.addEventListener('click', function() {
    if (mq.matches) {
    toggleFullScreen();
    } else {
    toggleFullScreenMobile();
    }
  });

  $(document).on("click touchend", "#exp-vid, #play-pause", function() {
    togglePlayPause();
  });

  vid.addEventListener("playing", function() {
    $("#video-fig").removeClass("play-cursor");
    $("#video-fig").addClass("pause-cursor");
    $("#exp-vid").mousemove(function() {
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
