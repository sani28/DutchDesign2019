$(document).ready(function(){
  const orderedDesignerImages =
  [
  document.getElementById("floris-workshop"), document.getElementById("floris-space"),
  document.getElementById("caption0"),
  document.getElementById("floris-candid2"), document.getElementById("floris-candid1"),  document.getElementById("floris-candid3"),
  document.getElementById('quote1'),
  document.getElementById("toysketch"),
  document.getElementById("scraps"),
  document.getElementById("quote2"),
  document.getElementById("plankchair"),
  document.getElementById("chair-closeup"),
  document.getElementById("quote3"),
  document.getElementById("compmap"),
  document.getElementById("quote4")];

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
  new ScrollMagic.Scene({
    triggerElement:  "#floris-wip",
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
