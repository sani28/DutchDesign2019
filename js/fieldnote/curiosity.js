$(document).ready(function(){
    document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/curiosity/kiki_banner_end.jpg')";

  const orderedDesignerImages = [
    document.getElementById("kiki1"),
    document.getElementById("kiki2"),
    document.getElementById("prod-1"),
    document.getElementById("prod-2"),
    document.getElementById("prod-3"),
    document.getElementById("prod-4"),
    document.getElementById("prod-5"),
    document.getElementById("prod-6"),
    document.getElementById("quote1"),
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
