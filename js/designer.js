$(document).ready(function(){
  const vid = document.getElementById("designer-vid");
  const playback = document.getElementById("playback");
  const playPause = document.getElementById("play-pause");
  const overlay = document.getElementById("designer-overlay");
  const vidSection = document.getElementById("vid-container");
  const fullscreenBtn = document.getElementById("fullscreen");
  const progress = document.getElementById("progress");
  const scrollProg = document.getElementById("scroll-progress");
  var controller = new ScrollMagic.Controller();
  var totalHeight = $(document).height();

  function pathPrepare ($el) {
    let lineLength = $el.getTotalLength();
    $el.style.strokeDasharray = lineLength;
    $el.style.strokeDashoffset = lineLength;
  }
  // prepare SVG
  pathPrepare(scrollProg);

  var tween = new TimelineLite()
    .add(TweenLite.to(scrollProg, 1.0, {strokeDashoffset: 0, ease:Linear.easeNone}));

  var scene = new ScrollMagic.Scene({duration: totalHeight-950, offset: 175, tweenChanges: true})
          .setTween(tween)
          .addTo(controller);


  //VIDEO OVERLAY SHOW/HIDE
  // vid.addEventListener("playing", function(){
  //   $("#top-video-section").removeClass("play-cursor");
  //   $("#top-video-section").addClass("pause-cursor");
  // });
  //
  // vid.addEventListener("paused", function(){
  //   $("#top-video-section").removeClass("pause-cursor");
  //   $("#top-video-section").addClass("play-cursor");
  // });

function togglePlayPause(){
  if(vid.paused){
    playPause.className = 'pause';
    vid.play();
    overlay.style.display = "none";
  }
  else {
    playPause.className = 'play';
    vid.pause();
    overlay.style.display = "";
  }
}

function onTrackedVideoFrame(currentTime, duration){
    let curr = Math.floor(currentTime);
    let dur = Math.floor(duration);
    $("#currentTime").text(formatTime(curr));
    $("#vidDuration").text(formatTime(dur));
}

function formatTime(s){
  return(s-(s%=60))/60+(9<s?':':':0')+s
}

vid.addEventListener('timeupdate', function(){
  let playbackPos = (vid.currentTime/vid.duration);
  playback.style.width = (playbackPos * 100) + "%";
  onTrackedVideoFrame(this.currentTime, this.duration);
});

progress.addEventListener('click', function(e) {
   var pos = (e.pageX  - vidSection.offsetLeft) / this.offsetWidth;
   vid.currentTime = pos * vid.duration;
});

fullscreen.addEventListener('click', function(){
  toggleFullScreen();
});

overlay.addEventListener("click", function(){
  togglePlayPause();
});

vid.addEventListener("click", function() {
  togglePlayPause();
});

playPause.onclick = function(){
  togglePlayPause();
}



function toggleFullScreen() {
    console.log('fs request');
    if (vid.requestFullscreen) {
        vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen();
    } else if (vid.msRequestFullscreen) {
        vid.msRequestFullscreen();
    }
    if(window.innerHeight == screen.height) {
        console.log('already fs');
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
  };



  /**************************************************
    VIDEO PLAYER

var vid, playbtn, seekslider, curtimetext, durtimetext, fullscreenbtn;
function intializePlayer() {
    // Set object references
    vid = document.getElementById("designer_video");
    playbtn = document.getElementById("playpausebtn");
    seekslider = document.getElementById("seekslider");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    fullscreenbtn = document.getElementById("fullscreenbtn");

    // Add event listeners
    playbtn.addEventListener("click",playPause,false);
    seekslider.addEventListener("change",vidSeek,false);
    vid.addEventListener("timeupdate",seektimeupdate,false);
    fullscreenbtn.addEventListener("click",toggleFullScreen,false);
}

window.onload = intializePlayer;

function playPause() {
    if(vid.paused){
        vid.play();
        playbtn.innerHTML = "PAUSE";
        $(".video-overlay").css("display", "none");
        $(".watch").addClass("active");
    } else {
        vid.pause();
        playbtn.innerHTML = "PLAY";
        // $(".watch").css("visbility", "hidden");
    }
}

$(document).ready(function () {
    $(".watch .chunk").click(function () {
        playPause();
    })

    $(".video-overlay").click(function(){
        playPause();
    })

    $(".play-indicator").click(function () {
        playPause();
    })

    $("#designer_video").click(function () {
        playPause();
    })
});

window.addEventListener("keyup", function(e) {
    if(e.keyCode == 32) {
        playPause();
    }
}, false);

function vidSeek() {
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}

function seektimeupdate() {
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if(cursecs < 10){ cursecs = "0"+cursecs; }
    if(dursecs < 10){ dursecs = "0"+dursecs; }
    if(curmins < 10){ curmins = curmins; }
    if(durmins < 10){ durmins = durmins; }
    curtimetext.innerHTML = curmins+":"+cursecs;
    durtimetext.innerHTML = durmins+":"+dursecs;
}

function toggleFullScreen() {
    console.log('called');
    // $("#fullscreenbtn").text(($("#fullscreenbtn").text() == 'FULL SCREEN') ? 'EXIT (ESC)' : 'FULL SCREEN').fadeIn(500);
    $(".top-right").css("z-index", "0");

    if (vid.requestFullscreen) {
        vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen();
    } else if (vid.msRequestFullscreen) {
        vid.msRequestFullscreen();
    }
};
    // if(window.innerHeight == screen.height) {
    //     console.log('got it');
    //     $(".top-right").css("z-index", "2147483647");
    //     if(document.exitFullscreen) {
    //         document.exitFullscreen();
    //     } else if(document.mozCancelFullscreen) {
    //         document.mozCancelFullscreen();
    //     } else if(document.webkitExitFullscreen) {
    //         document.webkitExitFullscreen();
    //     } else if (document.msExitFullscreen) {
    //         document.msExitFullscreen();
    //     }
    // }

$(document).ready(function () {
    $("#video_player_box").mouseenter(function() {
        $("#video_controls_bar").removeClass("hide");
        $(".program").removeClass("hide");
        $("#openbtn3").removeClass("hide");
        // $(".top-right").removeClass("hide");
        $(".to-extended").removeClass("hide");
    });

    $("#video_player_box").mouseleave(function() {
        $("#video_controls_bar").addClass("hide");
        $(".program").addClass("hide");
        $("#openbtn3").addClass("hide");
        // $(".top-right").addClass("hide");
        $(".to-extended").addClass("hide");
    });

    $("#video_player_box").mousemove(function() {
        $("#video_controls_bar").removeClass("hide");
        $(".program").removeClass("hide");
        $("#openbtn3").removeClass("hide");
        // $(".top-right").removeClass("hide");
        $(".to-extended").removeClass("hide");
    });

    $(".program").mouseenter(function() {
        $("#video_controls_bar").removeClass("hide");
        $(".program").removeClass("hide");
        $("#openbtn3").removeClass("hide");
        // $(".top-right").removeClass("hide");
        $(".to-extended").removeClass("hide");
    });

    $("#video_controls_bar").mouseenter(function() {
        $("#video_controls_bar").removeClass("hide");
        $(".program").removeClass("hide");
        $("#openbtn3").removeClass("hide");
        // $(".top-right").removeClass("hide");
        $(".to-extended").removeClass("hide");
    });

    $(".top-right").mouseenter(function() {
        $("#video_controls_bar").removeClass("hide");
        $(".program").removeClass("hide");
        $("#openbtn3").removeClass("hide");
        // $(".top-right").removeClass("hide");
        $(".to-extended").removeClass("hide");
    });

     $("#openbtn3").mouseenter(function() {
        $("#video_controls_bar").removeClass("hide");
        $(".program").removeClass("hide");
        $("#openbtn3").removeClass("hide");
        // $(".top-right").removeClass("hide");
        $(".to-extended").removeClass("hide");
    });
});
  **************/
});
