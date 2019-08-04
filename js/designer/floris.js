$(document).ready(function() {

  const orderedDesignerImages = [document.getElementById("floris-candid2"), document.getElementById("floris-candid1"), document.getElementById("floris-candid3"),
    document.getElementById('quote1'),
    document.getElementById("floris-workshop"), document.getElementById("floris-space"),
    document.getElementById("toysketch"),
    document.getElementById("scraps"),
    document.getElementById("quote2"),
    document.getElementById("caption1"),
    document.getElementById("plankchair"),
    document.getElementById("chair-closeup"),
    document.getElementById("quote3"),
    document.getElementById("compmap"),
    document.getElementById("quote4")
  ];

  const scrollProg = document.getElementById("scroll-progress");
  var controller = new ScrollMagic.Controller();
  var progController = new ScrollMagic.Controller();
  var totalHeight = document.body.clientHeight;

  function pathPrepare($el) {
    let lineLength = $el.getTotalLength();
    $el.style.strokeDasharray = lineLength;
    $el.style.strokeDashoffset = lineLength;
  }
  // prepare SVG
  pathPrepare(scrollProg);
  var tween = new TimelineLite()
    .add(TweenLite.to(scrollProg, 1.0, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }));

  new ScrollMagic.Scene({
      duration: totalHeight - 900,
      offset: 175,
      tweenChanges: true
    })
    .setTween(tween)
    .addTo(controller);

  var scrollControl = new ScrollMagic.Controller();
  for (let i = 0; i < orderedDesignerImages.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: orderedDesignerImages[i],
        triggerHook: 0.8,
        offset: 100,
        reverse: true
      })
      .setClassToggle(orderedDesignerImages[i], "visible")
      .addTo(scrollControl);
  }
  new ScrollMagic.Scene({
      triggerElement: "#floris-wip",
      triggerHook: 0.8,
      offset: 200,
      reverse: true
    })
    .setClassToggle("#floris-wip", "visible")
    .addTo(scrollControl);

  new ScrollMagic.Scene({
      triggerElement: "#mapsketch",
      triggerHook: 0.8,
      offset: 250,
      reverse: true
    })
    .setClassToggle("#mapsketch", "visible")
    .addTo(scrollControl);
});
