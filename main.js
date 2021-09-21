"use strict";

document.querySelector(".navbar-toggler").onclick = function () {
  document.querySelector(".mobile-menu").classList.add("opened");
};

document.querySelector(".close-menu").onclick = function () {
  document.querySelector(".mobile-menu").classList.remove("opened");
};
