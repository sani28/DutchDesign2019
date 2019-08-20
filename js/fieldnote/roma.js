$(document).ready(function(){
    document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/roma/roma_banner.jpg')";

  const orderedDesignerImages = [
    document.getElementById("roma-1"),
    document.getElementById("roma-2"),
    document.getElementById("roma-3"),
    document.getElementById("roma-cap-1"),
    document.getElementById("roma-cap-2"),
    document.getElementById("roma-cap-3"),
    document.getElementById("roma-4"),
    document.getElementById("roma-5"),
    document.getElementById("roma-6"),
    document.getElementById("roma-7"),
    document.getElementById("roma-8"),
    document.getElementById("quote1"),
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