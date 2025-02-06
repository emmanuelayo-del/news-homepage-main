"use strict";
const menuEl = document.querySelector(".main-nav");
console.log(menuEl);
const btnOpenMenu = document.querySelector(".btn-menu");
console.log(btnOpenMenu);
const btnCloseMenu = document.querySelector(".btn-close");
console.log(btnCloseMenu);
const overlay = document.querySelector(".overlay");
console.log(overlay);

btnOpenMenu.addEventListener("click", () => {
  console.log("Button Clicked");
  menuEl.classList.remove("hidden");
  menuEl.classList.remove("overlay");
});

btnCloseMenu.addEventListener("click", () => {
  menuEl.classList.add("hidden");
  menuEl.classList.add("overlay");
});
