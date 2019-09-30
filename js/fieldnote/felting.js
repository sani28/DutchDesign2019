$(document).ready(function(){

  const orderedDesignerImages = [
    document.getElementById("felt-2"),
    document.getElementById("felt-3"),
    document.getElementById("linda"),
    document.getElementById("roy"),
    document.getElementById("will"),
    document.getElementById("angus"),
    document.getElementById("felt-4"),
    document.getElementById("felt-5"),
    document.getElementById("felt-6"),
    document.getElementById("quote1"),
    document.getElementById("felting-2"),
    document.getElementById("wrkshop-vid")];


  var scrollControl = new ScrollMagic.Controller();


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
