// Import files and run functions
import { toggleTheme } from "./modules/theme-toggle.js";
import { weatherFetch } from "./modules/city-weather.js";
import { displayData } from "./modules/city-weather.js";
import { removePrevSearchResult } from "./modules/city-weather.js";
import { errorHandler } from "./modules/city-weather.js";

// cannot use this name, this name is a global name, it will affect the tags form in HTML in every file on the page
// const form = document.querySelector('#searchCity_form')
// form.addEventListener('submit', searchHandler);
const searchForm = document
  .querySelector("#searchCity_form")
  .addEventListener("submit", searchHandler);

async function searchHandler(event) {
  event.preventDefault();
  removePrevSearchResult;
  const searchInput = document.querySelector("#searchCity_input").value;
  await weatherFetch(searchInput).then(displayData).catch(error);
}
// Add eventlistener to button in footer to run function
const toggleThemeBtn = document
  .querySelector("#toggle-theme-button")
  .addEventListener("click", toggleTheme);

/////////////////////////////////
// NAVIGATION
const navMenuList = document.querySelector(".nav-menu-list");
const navigationBar = document.querySelector("#navigationBar");
const hideMenuIcon = document.querySelector(".menu-hide-icon");
const navMenuHide = document.querySelector(".nav-menu-list-hide");
const logo = document.querySelector("#logo");

navigationBar.addEventListener("click", function () {
  navMenuList.classList.toggle("nav-menu-list-hide");
  navMenuList.classList.add("display-flex");
  logo.classList.add("hide");
  navigationBar.classList.add("hide");
});

hideMenuIcon.addEventListener("click", function () {
  navMenuList.classList.toggle("nav-menu-list-hide");
  logo.classList.remove("hide");
  navigationBar.classList.remove("hide");
});
