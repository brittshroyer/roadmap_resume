$(document).ready(function() {
  // Handler for .ready() called.
  //scrolling along z-axis (first thing we need is a variable that tells us how far we've scrolled
  //calling scrollDistance() will give us the distance scrolled each time the user scrolls
  var scrollPosition = document.body.scrollTop;

  function scrollDistance() {
    var newScrollPosition = document.body.scrollTop;
    var delta = newScrollPosition - scrollPosition;
    return delta;
    console.log(delta);
  }

  var boxPositions = [0, -500, -1000, -1500, -2000, -2500];
  function moveCamera() {
    var boxes = document.getElementsByClassName("box");
    var delta = scrollDistance();
    console.log(boxes);
    for (var i=0,l=boxes.length;i<l;i++) {
      boxPositions[i] += delta;
      boxes[i].style["-webkit-transform"] = "translateZ("+boxPositions[i]+"px)";
    }
  }
  window.addEventListener("scroll", moveCamera, false);
  console.log('yo');
});
