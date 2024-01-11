// Import files and run functions
// import { toggleTheme } from "./modules/theme-toggle.js";
import { weatherFetch } from "./modules/city-weather.js";
import { displayData } from "./modules/city-weather.js";
import { errorHandler } from "./modules/city-weather.js";


const searchForm = document.querySelector("#searchCity_form");
searchForm.addEventListener("submit", searchHandler);


async function searchHandler(event) {
  event.preventDefault();
  const searchInput = document.querySelector("#searchCity_input").value;
  await weatherFetch(searchInput).then(displayData).catch(errorHandler);
  searchForm.reset();
}
