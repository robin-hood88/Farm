"use strict";

var burgerMenu = document.querySelector(".btn-burger ");
var menu = document.querySelector(".menu");
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("burger-active");
  menu.classList.toggle("menu-active");
});