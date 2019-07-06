$(document).ready(function(){
  console.log("WE READY");
  var florisDot = $("#pepeHoverDot");
  var startingBG = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"

  florisDot.mouseenter(function(){
      console.log("entered");
      $("html").css("background-image", "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)");
  });
  florisDot.mouseout(function(){
      console.log("exit");
      $("html").css("background-image", startingBG);
  });
});
