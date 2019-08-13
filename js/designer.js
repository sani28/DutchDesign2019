$(document).ready(function() {
      var vid = document.getElementById("designer-vid");
      var vidFig = document.getElementById("video-fig");
      const playback = document.getElementById("playback");
      const playPause = document.getElementById("play-pause");
      const overlay = document.getElementById("designer-overlay");
      const fullscreen = document.getElementById("fs");
      const progress = document.getElementById("progress");
      const scrollProg = document.getElementById("scroll-progress");
      var scrollController = new ScrollMagic.Controller();
      var progController = new ScrollMagic.Controller();
      var totalHeight = document.body.clientHeight;

      // scroll-progress line
      var backTopAnimation = TweenLite.from("#animate", 0.5, {
        autoAlpha: 0,
        scale: 0.7
      });

      var slowHide = TweenLite.to(".target", 2, {
        opacity:0,
        display:"none"
      });

      //scroll to top
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
    if (vidFig.requestFullscreen) {
        vidFig.requestFullscreen();
    } else if (vidFig.mozRequestFullScreen) {
        vidFig.mozRequestFullScreen();
    } else if (vidFig.webkitRequestFullscreen) {
        vidFig.webkitRequestFullscreen();
    } else if (vidFig.msRequestFullscreen) {
        vidFig.msRequestFullscreen();
    } else {
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

//REPOSITION FOOTER

$('#toggle-transcript').click(function(e) {
  e.preventDefault();
  $(this).addClass('active');
  $('#toggle-overview').removeClass('active');
  $('.designer-summary').hide();
  $('#overview').hide();
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
  $("#footer").show();
  $('.transcript').hide();
});

//////////////////// SCROLLING BEHAVIOUR ////////////

  // for the scroll-progress bar
  pathPrepare(scrollProg);

  $(document).on("click", "#scroll-top", function (e) {
    scrollController.scrollTo("#video-fig");
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

const mapNumber = (X, A, B, C, D) => (X - A) * (D - C) / (B - A) + C;

const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {
    x: posx,
    y: posy
  }
}

// hover animation

class HoverImgFx1 {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
        this.DOM.revealInner.style.overflow = 'hidden';
        this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');

        this.initEvents();
    }
    initEvents() {
        this.positionElement = (ev) => {
            const mousePos = getMousePos(ev);
            const docScrolls = {
                left : document.body.scrollLeft + document.documentElement.scrollLeft,
                top : document.body.scrollTop + document.documentElement.scrollTop
            };
            this.DOM.reveal.style.top = `${mousePos.y-160-docScrolls.top}px`;
            this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
        };
        this.mouseenterFn = (ev) => {
            this.positionElement(ev);
            this.showImage();
        };
        this.mousemoveFn = ev => requestAnimationFrame(() => {
            this.positionElement(ev);
        });
        this.mouseleaveFn = () => {
            this.hideImage();
        };

        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }
    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                this.DOM.reveal.style.opacity = 1;
                TweenMax.set(this.DOM.el, {zIndex: 1000});
            }
        })
        .add('begin')
        .add(new TweenMax(this.DOM.revealInner, 0.2, {
            ease: Sine.easeOut,
            startAt: {x: '-100%'},
            x: '0%'
        }), 'begin')
        .add(new TweenMax(this.DOM.revealImg, 0.2, {
            ease: Sine.easeOut,
            startAt: {x: '100%'},
            x: '0%'
        }), 'begin');
    }
    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                TweenMax.set(this.DOM.el, {zIndex: 999});
            },
            onComplete: () => {
                TweenMax.set(this.DOM.el, {zIndex: ''});
                TweenMax.set(this.DOM.reveal, {opacity: 0});
            }
        })
        .add('begin')
        .add(new TweenMax(this.DOM.revealInner, 0.2, {
            ease: Sine.easeOut,
            x: '100%'
        }), 'begin')

        .add(new TweenMax(this.DOM.revealImg, 0.2, {
            ease: Sine.easeOut,
            x: '-100%'
        }), 'begin');
    }
}

[...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')].forEach(link => new HoverImgFx1(link));
