$(document).ready(function() {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  var $hoverables = document.getElementsByClassName('.hoverable');

  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    TweenMax.to($smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 7 });
  }
  // Hover an element
  function onMouseHover() {
    TweenMax.to($smallBall, .3, {
      scale: 4 });
  }
  function onMouseHoverOut() {
    TweenMax.to($smallBall, .3, {
      scale: 1 });
  }

  function instantTooltips(textFrom, delta) {
    delta = parseFloat(delta) ? parseFloat(delta) : 5;


    function reposition(e) {
      // get the tooltip element:
      var tooltip = this.nextSibling;

      tooltip.style.top = (e.pageY + delta) + 'px';
      tooltip.style.left = (e.pageX + delta) + 'px';
    }
    var toTitle = document.querySelectorAll('[' + textFrom + ']'),
      span = document.createElement('span'),
      textProp = 'textContent' in document ? 'textContent' : 'innerText',
      parent, spanClone;
    span.classList.add('createdTooltip');
    [].forEach.call(toTitle, function(elem) {
      parent = elem.parentNode;
      spanClone = span.cloneNode();
      spanClone[textProp] = elem.getAttribute(textFrom);
      parent.insertBefore(spanClone, elem.nextSibling);
      elem.addEventListener('mousemove', reposition);
      elem.setAttribute(textFrom, '');
    });
  }

  // calling the function:
  instantTooltips('title', 20);

  $('#showClips').click(function(e) {
    e.preventDefault();
    $('.circle-nav-container').toggleClass("hidden unhidden");
    $('body').css('background-image', 'none');
    $('#wid-blurb, nav a').css('color', 'purple');
    $(this).addClass('active').css('border-bottom', '2px solid purple');
    $('nav a#showClips').removeAttr("href").off("click");
  });

//////////////////VIDEO BEHAVIOUR ///////////////////////

  var vidMouseTimer;
  var widVid = document.getElementById("wid-video");
  var playPause = document.getElementById("play-pause");
  var vidFig = document.getElementById("vid-container");
  var blurb = document.getElementById("blurb");
  var progress = document.getElementById("progress");
  var timeStamps = document.querySelectorAll(".vid-marker");
  var hideUI = ["#blurb", "#nav-overlay"];
  var fullscreen = document.getElementById("fs");

  widVid.addEventListener('timeupdate', function() {
    let playbackPos = (widVid.currentTime / widVid.duration);
    playback.style.width = (playbackPos * 100) + "%";
    onTrackedVideoFrame(this.currentTime, this.duration);
  });

  progress.addEventListener('click', function(e) {
    var pos = (e.pageX - progress.offsetLeft) / this.offsetWidth;
    widVid.currentTime = pos * widVid.duration;
  });

  function togglePlayPause() {
    if (widVid.paused) {
      playPause.className = 'pause';

      widVid.play();
    } else {
      playPause.className = 'play';
      // overlay.style.display = "";
      widVid.pause();
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

  function setVideoTimestamps() {
    for (let i = 0, len = timeStamps.length; i < len; i++) {
      $(timeStamps[i]).click(function(){
        widVid.currentTime = $(this).data("time");
        $("#nav-overlay").css("display", "none");
        $("#blurb").css("display", "none");
        //TODO: the below could be removed depending on how we implement
        widVid.play();
      })
    }
  }

  widVid.addEventListener("playing", function(){;
    $("#vid-container").addClass("pause-cursor");
    $("#blurb").addClass("pause-cursor");
    $("#vid-container").removeClass("play-cursor");
    $("#blurb").removeClass("play-cursor");
  });

  widVid.addEventListener("pause", function(){
    $("#vid-container").addClass("play-cursor");
    $("#blurb").addClass("play-cursor");
    $("#vid-container").removeClass("pause-cursor");
    $("#blurb").removeClass("pause-cursor");
  });

  function togglePlayPause(){
    if(widVid.paused){
      $("#blurb").css("display", "none");
      $("#nav-overlay").css("display", "none");
      widVid.play();
    }
    else {
      widVid.pause();
      $("#nav-overlay").css("display", "grid");
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

  $(document).on("click", "#wid-video, #play-pause, #blurb", function() {
    togglePlayPause();
  });

  fullscreen.addEventListener('click', function() {
    toggleFullScreen();
  });

  setVideoTimestamps();

  const mapNumber = (X, A, B, C, D) => (X - A) * (D - C) / (B - A) + C;
  // from http://www.quirksmode.org/js/events_properties.html#position
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
  // Generate a random float.
  const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

  class HoverImgFx1 {
    constructor(el) {
      this.DOM = {
        el: el
      };
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
          left: document.body.scrollLeft + document.documentElement.scrollLeft,
          top: document.body.scrollTop + document.documentElement.scrollTop
        };
        this.DOM.reveal.style.top = `${mousePos.y-300-docScrolls.top}px`;
        this.DOM.reveal.style.left = `${mousePos.x-70-docScrolls.left}px`;
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
            TweenMax.set(this.DOM.el, {
              zIndex: 1000
            });
          }
        })
        .add('begin')
        .add(new TweenMax(this.DOM.revealInner, 0.3, {
          ease: Sine.easeOut,
          startAt: {
            x: '0%'
          },
          x: '0%'
        }), 'begin')
        .add(new TweenMax(this.DOM.revealImg, 0.3, {
          ease: Sine.easeOut,
          startAt: {
            x: '0%'
          },
          x: '0%'
        }), 'begin');
    }
    hideImage() {
      TweenMax.killTweensOf(this.DOM.revealInner);
      TweenMax.killTweensOf(this.DOM.revealImg);

      this.tl = new TimelineMax({
          onStart: () => {
            TweenMax.set(this.DOM.el, {
              zIndex: 999
            });
          },
          onComplete: () => {
            TweenMax.set(this.DOM.el, {
              zIndex: ''
            });
            TweenMax.set(this.DOM.reveal, {
              opacity: 0
            });
          }
        })
        .add('begin')
        .add(new TweenMax(this.DOM.revealInner, 0.1, {
          ease: Sine.easeOut,
          x: '0%'
        }), 'begin')

        .add(new TweenMax(this.DOM.revealImg, 0.1, {
          ease: Sine.easeOut,
          x: '0%'
        }), 'begin');
    }
  }

  [...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')].forEach(link => new HoverImgFx1(link));
});
// -------------------  "FULL FILM" MOUSECLICK EVENTS  ---------------------- //
