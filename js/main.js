$(document).ready(function(){
  console.log("WE READY");
  var designerDots = $(".designer-dot").get();
  var startingBG = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
  console.log(designerDots);
  //TODO: iterate over designerDots and do the same functions for each

  function changeBackground(){
    console.log("entered");
    $("html").css("background-image", "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)");
  }

  function revertBackground(){
    console.log("exit");
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
