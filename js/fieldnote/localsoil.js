$(document).ready(function(){
    document.getElementById("exp-landing-photo").style.backgroundImage = "url('../../assets/images/soil/ateliernl_section1_img1.jpg')";

  const orderedDesignerImages = [
    document.getElementById("soil-1"),
    document.getElementById("soil-2"),
    document.getElementById("soil-3"),
    document.getElementById("soil-cap-1"),
    document.getElementById("soil-cap-2"),
    document.getElementById("soil-4"),
    document.getElementById("soil-5"),
    document.getElementById("soil-6"),
    document.getElementById("soil-cap-3"),
    document.getElementById("soil-7"),
    document.getElementById("soil-8"),
    document.getElementById("soil-9"),
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