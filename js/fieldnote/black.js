$(document).ready(function(){
    document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/black/bb_banner.jpg')";

  const orderedDesignerImages = [
    document.getElementById("bb-1"),
    document.getElementById("bb-2"),
    document.getElementById("bb-cap-1"),
    document.getElementById("bb-3"),
    document.getElementById("bb-4"),
    document.getElementById("bb-cap-2"),
    document.getElementById("bb-5"),
    document.getElementById("bb-6"),
    document.getElementById("bb-7"),
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
