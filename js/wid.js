$(document).ready(function() {
  // Credit to David Thomas for display text on span hover --- :-) https://stackoverflow.com/users/82548/david-thomas

  // textFrom : String, the attribute from which the text
  //            should come,
  // delta :    String or Number, the distance from the cursor at
  //            which the tooltip should appear
  function instantTooltips(textFrom, delta) {
    // if delta exists, and can be parsed to a number, we use it,
    // otherwise we use the default of 5:
    delta = parseFloat(delta) ? parseFloat(delta) : 5;

    // function to handle repositioning of the created tooltip:
    function reposition(e) {
      // get the tooltip element:
      var tooltip = this.nextSibling;
      // setting the position according to the position of the
      // pointer:
      tooltip.style.top = (e.pageY + delta) + 'px';
      tooltip.style.left = (e.pageX + delta) + 'px';
    }

    // get all elements that have an attribute from which we
    // want to get the tooltip text from:
    var toTitle = document.querySelectorAll('[' + textFrom + ']'),
      //create a span element:
      span = document.createElement('span'),
      // find if we should use textContent or innerText (IE):
      textProp = 'textContent' in document ? 'textContent' : 'innerText',
      // caching variables for use in the upcoming forEach:
      parent, spanClone;
    // adding a class-name (for CSS styling):
    span.classList.add('createdTooltip');
    // iterating over each of the elements with a title attribute:
    [].forEach.call(toTitle, function(elem) {
      // reference to the element's parentNode:
      parent = elem.parentNode;
      // cloning the span, to avoid creating multiple elements:
      spanClone = span.cloneNode();
      // setting the text of the cloned span to the text
      // of the attribute from which the text should be taken:
      spanClone[textProp] = elem.getAttribute(textFrom);

      // inserting the created/cloned span into the
      // document, after the element:
      parent.insertBefore(spanClone, elem.nextSibling);

      // binding the reposition function to the mousemove
      // event:
      elem.addEventListener('mousemove', reposition);

      // we're setting textFrom attribute to an empty string
      // so that the CSS will still apply, but which
      // should still not be shown by the browser:
      elem.setAttribute(textFrom, '');
    });
  }

  // calling the function:
  instantTooltips('title', 20);

  // ------------------- "CLIPS" MOUSECLICK EVENTS  ---------------------
  //1 - Text to purple 2 - Circle Nav Appears 3 - Clip link set to active class 4- remove click functionality on clips
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
  var vidFig = document.getElementById("vid-container");
  var blurb = document.getElementById("blurb");
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
    widVid.currentTime = pos * vid.duration;
  });

  function togglePlayPause() {
    if (widVid.paused) {
      playPause.className = 'pause';
      widVid.play();
      overlay.style.display = "none";
    } else {
      playPause.className = 'play';
      widVid.pause();
      overlay.style.display = "";
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
        widVid.play();
      })
    }
  }

  widVid.addEventListener("playing", function(){;
    $("#vid-container").addClass("pause-cursor");
    $("#vid-container").removeClass("play-cursor");
  });

  widVid.addEventListener("pause", function(){
    $("#vid-container").addClass("play-cursor");
    $("#vid-container").removeClass("pause-cursor");
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
      $("#vid-container").removeClass("hoveraction");
      vidMousetimer = setTimeout(function() {
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
      this.mouseclickFn = () => {
        this.hideImage();
      };

      this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
      this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
      this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
      this.DOM.el.addEventListener('mouseclick', this.mouseclickFn);
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
        .add(new TweenMax(this.DOM.revealInner, 0.4, {
          ease: Sine.easeOut,
          startAt: {
            x: '-100%'
          },
          x: '0%'
        }), 'begin')
        .add(new TweenMax(this.DOM.revealImg, 0.4, {
          ease: Sine.easeOut,
          startAt: {
            x: '100%'
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
        .add(new TweenMax(this.DOM.revealInner, 0.4, {
          ease: Sine.easeOut,
          x: '100%'
        }), 'begin')

        .add(new TweenMax(this.DOM.revealImg, 0.4, {
          ease: Sine.easeOut,
          x: '-100%'
        }), 'begin');
    }
  }

  [...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')].forEach(sppan => new HoverImgFx1(link));
});
// -------------------  "FULL FILM" MOUSECLICK EVENTS  ---------------------- //
