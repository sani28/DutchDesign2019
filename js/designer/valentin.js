$(document).ready(function(){
  const orderedDesignerImages = [
    document.getElementById("spacemid"),
    document.getElementById("spacefar"),
    document.getElementById("spacewide"),
    document.getElementById("goldfar"),
    document.getElementById("goldmid"),
    document.getElementById("goldclose"),
    document.getElementById("quote1"),
    document.getElementById("stairs"),
    document.getElementById("stairswide"),
    document.getElementById("quote2")];

    const scrollProg = document.getElementById("scroll-progress");
    var controller = new ScrollMagic.Controller();
    var progController = new ScrollMagic.Controller();
    var scrollControl = new ScrollMagic.Controller();
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

    new ScrollMagic.Scene({
            duration: totalHeight - 950,
            offset: 175,
            tweenChanges: true
          })
          .setTween(tween)
          .addTo(controller);



  for(let i=0; i<orderedDesignerImages.length; i++){
    new ScrollMagic.Scene({
      triggerElement: orderedDesignerImages[i],
      triggerHook: 0.8,
      offset: 100,
      reverse: true
    })
    .setClassToggle(orderedDesignerImages[i], "visible")
    .addTo(scrollControl);
  }
});
