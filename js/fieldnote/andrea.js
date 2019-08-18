$(document).ready(function(){
    document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/andrea/water-1.jpg')";

  const orderedDesignerImages = [
    document.getElementById("in-workshop"),
    document.getElementById("wrkshop-vid"),
    document.getElementById("sketch-1"),
    document.getElementById("sketch-2"),
    document.getElementById("group-pic"),
    document.getElementById("outdoor-1"),
    document.getElementById("outdoor-2"),
    document.getElementById("caption1"),
    document.getElementById("quote4"),
    document.getElementById("caption2"),
    document.getElementById("end")];


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