var j = 1;
var i = 0;
var images = [];
var time = 4000;

function imgif() {
  document.slide.src = "./food01.png";
}
function imgis() {
  document.slide.src = "./food02.jpg";
}
function imgit() {
  document.slide.src = "./food03.jpg";
}

function imgift() {
  document.slide.src = "./food04.png";
}

images[0] = "./food01.png";
images[1] = "./food02.jpg";
images[2] = "./food03.jpg";
images[3] = "./food04.webp";

function righ() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("righ()", time);
}

function right() {

  if (i < images.length - 1) {
    document.slide.src = images[i];
    i++;
  } else {
    i = 0;
  }
  setTimeout("right()", time);
}

k = 3;
function left() {
  if (k > -1) {
    document.slide.src = images[k];
    k--;
  } else {
    k = 3;
  }
  setTimeout("left()", time);
}
window.onload = righ;

function homei() {
  document.getElementById("abou").style.color = "black";
  document.getElementById("em").style.color = "black";
  document.getElementById("ser").style.color = "black";
  document.getElementById("con").style.color = "black";
  document.getElementById("hom").style.color = "rgb(17, 59, 249)";
}
function about() {
  document.getElementById("abou").style.color = "rgb(17, 59, 249)";
  document.getElementById("con").style.color = "black";
  document.getElementById("ser").style.color = "black";
  document.getElementById("em").style.color = "black";
  document.getElementById("hom").style.color = "black";
}
function services() {
  document.getElementById("ser").style.color = "rgb(17, 59, 249)";
  document.getElementById("hom").style.color = "black";
  document.getElementById("em").style.color = "black";
  document.getElementById("abou").style.color = "black";
  document.getElementById("con").style.color = "black";
}

function contact() {
  document.getElementById("con").style.color = "rgb(17, 59, 249)";
  document.getElementById("hom").style.color = "black";
  document.getElementById("em").style.color = "black";
  document.getElementById("ser").style.color = "black";
  document.getElementById("abou").style.color = "black";
}
function email() {
  document.getElementById("em").style.color = "rgb(17, 59, 249)";
  document.getElementById("ser").style.color = "black";
  document.getElementById("con").style.color = "black";
  document.getElementById("hom").style.color = "black";
  document.getElementById("abou").style.color = "black";
}

function search() {
  let filter = document.getElementById("search").value.toUpperCase();
  let ol = document.getElementById("leftol");
  let li = ol.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    let textValue = a.textContent || a.innerHTML;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].style.color = "red";

    }
    else {
      li[i].style.display = "none";
    }
  }
}

function homeabout() {
  document.getElementById("ullist").style.display = "block";
  document.getElementById("cross").style.display = "block";
  document.getElementById("btn").style.display = "none";
  // document.getElementByClassName("middle-section").style.display = "none";
}
function cross() {
  document.getElementById("ullist").style.display = "none";
  document.getElementById("cross").style.display = "none";
  document.getElementById("btn").style.display = "block";
}


