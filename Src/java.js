function showtext(){
  var x = document.getElementById("test");
  var y = document.getElementById("image"); 
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none"
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
function hidetext() {
  var x = document.getElementById("test");
  var y = document.getElementById("image");
  if (x.style.display === "block"){
    x.style.display = "none"
    y.style.display = "block"
  }
  else {
    x.style.display = "block"
    y.style.display = "none"
  }
}

function hamburger() 
{
  var y = document.getElementById("hamburger")
  var x = document.getElementById("nav");
  if (x.style.opacity === "0") {
    y.style.transform = "rotate(90deg)";
    y.style.transition = "transform 750ms";
    x.style.display = "flex"
    x.style.opacity = 1;
    x.style.transition = "opacity 750ms";
  } else {
    y.style.transform = "rotate(0deg)";
    y.style.transition = "transform 750ms opacity 750ms";
    x.style.opacity = 0;
    x.style.display = "none";
  }
}

