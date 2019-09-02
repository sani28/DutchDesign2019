/////////////////////// MOUSE AND HOVER INTERACTIONS ///////////////////

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
      this.DOM.reveal.style.top = `${mousePos.y-600-docScrolls.top}px`;
      this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;

      if (mousePos.x > 650) {
              this.DOM.reveal.style.left = `${mousePos.x-500-docScrolls.left}px`;
      }
    };
    this.mouseenterFn = (ev) => {
      this.positionElement(ev);
      this.showImage();
    };
    // this.mousemoveFn = ev => requestAnimationFrame(() => {
    //   this.positionElement(ev);
    // });
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
