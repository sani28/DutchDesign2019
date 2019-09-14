var vidMouseTimer;
var vid = document.getElementById("reglaze-video");
var vidFig = document.getElementById("vid-container");
var overlay = document.getElementById("reglaze-overlay");
var fullscreen = document.getElementById("fs");
var progress = document.getElementById("progress");
var playPause = document.getElementById("play-pause");

vid.addEventListener('timeupdate', function() {
  let playbackPos = (vid.currentTime / vid.duration);
  playback.style.width = (playbackPos * 100) + "%";
  onTrackedVideoFrame(this.currentTime, this.duration);
});

progress.addEventListener('click', function(e) {
  var pos = (e.pageX - progress.offsetLeft) / this.offsetWidth;
  vid.currentTime = pos * vid.duration;
});

function togglePlayPause() {
  if (vid.paused) {
    playPause.className = 'pause';
    overlay.style.display = "none";
    vid.play();
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

// function setVideoTimestamps() {
//   for (let i = 0, len = timeStamps.length; i < len; i++) {
//     $(timeStamps[i]).click(function(){
//       vid.currentTime = $(this).data("time");
//       //TODO: the below could be removed depending on how we implement
//       $("#nav-overlay").css("display", "none");
//       vid.play();
//     })
//   }
// }

vid.addEventListener("playing", function(){;
  $("#vid-container").addClass("pause-cursor");
  $("#reglaze-overlay").addClass("pause-cursor");
  $("#vid-container").removeClass("play-cursor");
  $("#reglaze-overlay").removeClass("play-cursor");
});

vid.addEventListener("pause", function(){
  $("#vid-container").addClass("play-cursor");
  $("#reglaze-overlay").addClass("play-cursor");
  $("#vid-container").removeClass("pause-cursor");
  $("#reglaze-overlay").removeClass("pause-cursor");
});

function togglePlayPause(){
  if(vid.paused){
    playPause.className = 'pause';
    $("#reglaze-overlay").css("display", "none");
    $("#nav-overlay").css("display", "none");
    vid.play();
  }
  else {
    vid.pause();
    playPause.className = 'play';
    $("#reglaze-overlay").css("display", "grid");
    $("#nav-overlay").css("display", "grid");
    $(".overlayBG").removeClass("hiddenUI");
  }
}

$("#wid-video").mousemove(function() {
    if (vidMouseTimer) {
        clearTimeout(vidMouseTimer);
        vidMouseTimer = 0;
    }
    $('#vid-controls').removeClass("hoveraction");
    $("#vid-container").removeClass("hoveraction");
    vidMousetimer = setTimeout(function() {
        $('#vid-controls').addClass("hoveraction");
        $("#vid-container").addClass("hoveraction");
    }, 4000)
});

$(document).on("click", "#reglaze-video, #play-pause, #reglaze-overlay", function() {
  togglePlayPause();
});

fullscreen.addEventListener('click', function() {
  toggleFullScreen();
});
