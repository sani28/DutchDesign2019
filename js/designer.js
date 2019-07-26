$(document).ready(function(){
  const vid = document.getElementById("designer-vid");
  const playback = document.querySelector(".purple-playback");
  const playPause = document.getElementById("play-pause");
  const overlay = document.getElementById("designer-overlay");
  const vidSection = document.getElementById("vid-container");
  const orderedDesignerImages =
  [document.getElementById("floris-candid2"), document.getElementById("floris-candid1"),  document.getElementById("floris-candid3"),
  document.getElementById('floris-quote1'), document.getElementById("floris-workshop"), document.getElementById("floris-space")];

  var scrollControl = new ScrollMagic.Controller();
  for(let i=0; i<orderedDesignerImages.length; i++){
    new ScrollMagic.Scene({
      triggerElement: orderedDesignerImages[i],
      triggerHook: 0.8,
      offset: 100,
      reverse: true
    })
    .setClassToggle(orderedDesignerImages[i], "visible")
    .addIndicators({name: "image " + (i + 1)}) //USE FOR DEBUG
    .addTo(scrollControl);
  }
  new ScrollMagic.Scene({
    triggerElement:  "#floris-wip",
    triggerHook: 0.8,
    offset: 150,
    reverse: true
  })
  .setClassToggle("#floris-wip", "visible")
  .addIndicators({name: "image " + (7)})
  .addTo(scrollControl);


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

  overlay.addEventListener("click", function(){
    togglePlayPause();
  });
  vid.addEventListener("click", function() {
    togglePlayPause();
  })

  playPause.onclick = function(){
    togglePlayPause();
  }

  // vid.addEventListener("pause", function(){
  //   vidSection.addEventListener("click", function(){
  //     vid.play();
  //   });
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
    $("#currentTime").text(currentTime); //Change #current to currentTime
    $("#vidDuration").text(duration)
}

vid.addEventListener('timeupdate', function(){
  let playbackPos = (vid.currentTime/vid.duration);
  playback.style.width = playbackPos * 100 + "%";
  onTrackedVideoFrame(this.currentTime, this.duration);
});


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
