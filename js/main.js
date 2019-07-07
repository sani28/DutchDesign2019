$(document).ready(function(){
  console.log("WE READY");
  var designerDots = $(".designer-dot").get();
  var startingBG = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"

  function changeBackground(){
    /*TODO: define how each background video will change depending on which designer's dot it is? Is this worth doing over an iteration? Each individual designer will have a different background, might as well make new functions?
    PSUEDOCODE
      pass the object that's calling this functions as a parameter
      IF this object's ID attribute corresponds to a specific designer
      then change background to corresponding video
    */
    $("html").css("background-image", "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)");
  }
  function revertBackground(){
    $("html").css("background-image", startingBG);
  }

  designerDots.forEach(function(designer){
      $(designer).mouseenter(function(){
        changeBackground();
      })
      $(designer).mouseout(function(){
        revertBackground();
      })
  });
});
