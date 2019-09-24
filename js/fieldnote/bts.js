$(document).ready(function() {

  const orderedDesignerImages = [
    document.getElementById("bti-1"),
    document.getElementById("bti-2"),
    document.getElementById("bti-4"),
    document.getElementById("bti-5"),
    document.getElementById("bti-6"),
    document.getElementById("bti-7"),
    document.getElementById("bts-sec7-img2"),
    document.getElementById("bts-cap-1"),
    document.getElementById("bts-cap-2"),
    document.getElementById("end")
  ];

  const stagger = [
    document.getElementById("bti-3"),
    document.getElementById("bts-sec7-img3")
  ]

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
  for (let i = 0; i < stagger.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: stagger[i],
        triggerHook: 0.8,
        offset: 300,
        reverse: true
      })
      .setClassToggle(stagger[i], "visible")
      .addTo(scrollControl);
  }
});
