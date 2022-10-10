var cssreadcolor = document.querySelector("h3");
var color1 = document.querySelector(".colorgradient1");
var color2 = document.querySelector(".colorgradient2");
var body = document.getElementById("color");

function setGradientColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
    cssreadcolor.textContent = body.style.background + ";";
}
color1.addEventListener("input",setGradientColor);
color2.addEventListener("input",setGradientColor);
