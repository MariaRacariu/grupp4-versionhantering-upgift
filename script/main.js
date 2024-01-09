// Import files and run functions
import { toggleTheme } from "./modules/theme-toggle.js";
import { weatherFetch } from "./modules/city-weather.js";
import { displayData } from "./modules/city-weather.js";
import { removePrevSearchResult } from "./modules/city-weather.js";
import { errorHandler } from "./modules/city-weather.js";

// cannot use this name, this name is a global name, it will affect the tags form in HTML in every file on the page
// const form = document.querySelector('#searchCity_form')
// form.addEventListener('submit', searchHandler);
const searchForm = document.quearySelector('#searchCity_form').addEventListener('submit', searchHandler);

async function searchHandler(event) {
  event.preventDefault();
  removePrevSearchResult
  const searchInput = document.querySelector('#searchCity_input').value;
  await weatherFetch(searchInput).then(displayData).catch(error);

}
// Add eventlistener to button in footer to run function
const toggleThemeBtn = document
  .querySelector("#toggle-theme-button")
  .addEventListener("click", toggleTheme);
