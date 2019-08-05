$(document).ready(function() {
      var vid = document.getElementById("designer-vid");
      const playback = document.getElementById("playback");
      const playPause = document.getElementById("play-pause");
      const overlay = document.getElementById("designer-overlay");
      const fullscreen = document.getElementById("fs");
      const progress = document.getElementById("progress");
      const scrollProg = document.getElementById("scroll-progress");
      var scrollController = new ScrollMagic.Controller();
      var progController = new ScrollMagic.Controller();
      var totalHeight = document.body.clientHeight;

      var backTopAnimation = TweenLite.from("#animate", 0.5, {
        autoAlpha: 0,
        scale: 0.7
      });

      var backTopScene = new ScrollMagic.Scene({
          triggerElement: "a#scroll-top",
          duration: 200,
          triggerHook: "onLeave"
        })
        .setTween(backTopAnimation)
        .addTo(scrollController);

      var tween = new TimelineLite()
        .add(TweenLite.to(scrollProg, 1.0, {strokeDashoffset: 0, ease:Linear.easeNone}));

      new ScrollMagic.Scene({
              duration: totalHeight - 950,
              offset: 175,
              tweenChanges: true
            })
            .setTween(tween)
            .addTo(progController);


function pathPrepare ($el) {
  let lineLength = $el.getTotalLength();
  $el.style.strokeDasharray = lineLength;
  $el.style.strokeDashoffset = lineLength;
}

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
  }



//////////////////// SCROLLING BEHAVIOUR ////////////

  // for the scroll-progress bar
  pathPrepare(scrollProg);

  $(document).on("click", "#scroll-top", function (e) {
    scrollController.scrollTo("#vid-container");
  });

  scrollController.scrollTo(function (newpos) {
    if(window.pageYOffset > (document.body.clientHeight * 0.45)){
      TweenLite.to(window, 1.3, {scrollTo: {y: newpos}, ease: Power1.easeIn });
    } else {
      TweenLite.to(window, 0.6, {scrollTo: {y: newpos}, ease: Power1.easeIn });
    }
  });

//////////// VIDEO PLAYER BEHAVIOUR ////////

  vid.addEventListener('timeupdate', function(){
    let playbackPos = (vid.currentTime/vid.duration);
    playback.style.width = (playbackPos * 100) + "%";
    onTrackedVideoFrame(this.currentTime, this.duration);
  });

  progress.addEventListener('click', function(e) {
     var pos = (e.pageX  - progress.offsetLeft) / this.offsetWidth;
     vid.currentTime = pos * vid.duration;
  });

  fullscreen.addEventListener('click', function(){
    toggleFullScreen();
  });

  $(document).on("click touchend", "#designer-overlay, #designer-vid, #play-pause", function() {
    togglePlayPause();
  });


  vid.addEventListener("playing", function(){
    $("#video-fig").removeClass("play-cursor");
    $("#video-fig").addClass("pause-cursor");
  });

  vid.addEventListener("pause", function(){
    $("#video-fig").removeClass("pause-cursor");
    $("#video-fig").addClass("play-cursor");
  });

});
