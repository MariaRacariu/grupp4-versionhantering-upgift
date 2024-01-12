/////////////////////////////////
// NAVIGATION
const navMenuList = document.querySelector(".nav-menu-list");
const navigationBar = document.querySelector("#navigationBar");
const hideMenuIcon = document.querySelector(".menu-hide-icon");
const navMenuHide = document.querySelector(".nav-menu-list-hide");
const displayFlexAirPollution = document.querySelector(
  ".display-flex-air-pollution"
);

const logo = document.querySelector("#logo");

navigationBar.addEventListener("click", function () {
  navMenuList.classList.toggle("nav-menu-list-hide");
  navMenuList.classList.add("display-flex");
  logo.classList.add("hide");
  navigationBar.classList.add("hide");
  displayFlexAirPollution.style.display = "none";
});

hideMenuIcon.addEventListener("click", function () {
  navMenuList.classList.toggle("nav-menu-list-hide");
  logo.classList.remove("hide");
  navigationBar.classList.remove("hide");
});
