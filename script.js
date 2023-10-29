var gallery = document.querySelector(".gallery");
var overlay = document.querySelector(".overlay");
var imgContainer = document.querySelector(".img-container");
var myImg = document.querySelector("#thumb");
var btn = document.querySelector(".btn");

myImg.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "block";
  imgContainer.style.display = "block";
});

btn.addEventListener("click", function () {
  overlay.style.display = "none";
  imgContainer.style.display = "none";
});
