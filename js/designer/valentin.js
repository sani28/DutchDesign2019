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
