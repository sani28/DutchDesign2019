$(document).ready(function(){
  var vid = document.getElementById("designer-vid");
  var overlay = document.getElementById("designer-overlay");

  vid.addEventListener("play", function(){
    console.log("disappear");
    overlay.style.display = "none";
  });

  vid.addEventListener("pause", function(){
    console.log("appear");
    overlay.style.display = "";
  });











});
