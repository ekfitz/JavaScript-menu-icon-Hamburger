makeFake();
var hamburger = document.getElementById("hamburger");

makeReal();
var realdiv = document.getElementById("realdiv");
var topLine = document.getElementById("topLine");
var middleLine = document.getElementById("middleLine");
var bottomLine = document.getElementById("bottomLine");

swapStyles(hamburger, realdiv);

function makeFake() {
  var fd = document.createElement("div");
  fd.id = "hamburger";
  document.body.appendChild(fd);
}

function makeReal() {
  var rd = document.createElement("div");
  rd.id = "realdiv";
  document.body.appendChild(rd);

  var tl = document.createElement("span");
  tl.id = "topLine";
  tl.style.position = "absolute";
  tl.style.width = "100%";
  tl.style.height = "20%";
  tl.style.top = "0%";
  tl.style.backgroundColor = "white";
  rd.appendChild(tl);

  var ml = document.createElement("span");
  ml.id = "middleLine";
  ml.style.position = "absolute";
  ml.style.width = "100%";
  ml.style.height = "20%";
  ml.style.top = "40%";
  ml.style.backgroundColor = "white";
  rd.appendChild(ml);

  var bl = document.createElement("span");
  bl.id = "bottomLine";
  bl.style.position = "absolute";
  bl.style.width = "100%";
  bl.style.height = "20%";
  bl.style.top = "80%";
  bl.style.backgroundColor = "white";
  rd.appendChild(bl);
}

function swapStyles(x, y) {
  var swapP = window.getComputedStyle(x, null).getPropertyValue("position");
  var swapW = window.getComputedStyle(x, null).getPropertyValue("width");
  var swapH = window.getComputedStyle(x, null).getPropertyValue("height");
  var swapT = window.getComputedStyle(x, null).getPropertyValue("top");
  var swapL = window.getComputedStyle(x, null).getPropertyValue("left");

  var swapBC = window.getComputedStyle(x, null).getPropertyValue("background-color");
  var swapB = window.getComputedStyle(x, null).getPropertyValue("border");
  var swapBW = window.getComputedStyle(x, null).getPropertyValue("border-width");
  var swapBR = window.getComputedStyle(x, null).getPropertyValue("border-radius");
  var swapO = window.getComputedStyle(x, null).getPropertyValue("opacity");

  y.style.position = swapP;
  y.style.width = swapW;
  y.style.height = swapH;
  y.style.top = swapT;
  y.style.left = swapL;

  topLine.style.backgroundColor = swapBC;
  topLine.style.border = swapB;
  topLine.style.borderWidth = swapBW;
  topLine.style.borderRadius = swapBR;
  topLine.style.opacity = swapO;

  middleLine.style.backgroundColor = swapBC;
  middleLine.style.border = swapB;
  middleLine.style.borderWidth = swapBW;
  middleLine.style.borderRadius = swapBR;
  middleLine.style.opacity = swapO;

  bottomLine.style.backgroundColor = swapBC;
  bottomLine.style.border = swapB;
  bottomLine.style.borderWidth = swapBW;
  bottomLine.style.borderRadius = swapBR;
  bottomLine.style.opacity = swapO;

  hamburger.style.display = "none";
}
