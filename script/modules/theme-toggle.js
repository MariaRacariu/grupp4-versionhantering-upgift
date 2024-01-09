//Create a variable which gets the button id
//Added code to change innerHTML button depending on the theme
var themeSelector = "light";
var theme = document.getElementById("toggle-theme");
var themeButton = document.getElementById("toggle-theme-button");

//Created light theme and dark theme function to make easier call out
function lightTheme() {
  theme.setAttribute("href", "style/light-style.css");
  themeButton.innerHTML = "Dark theme";
  themeButton.classList.remove("light-mode-btn");
  themeButton.classList.add("dark-mode-btn");
  themeSelector = "light";
}

function darkTheme() {
  theme.setAttribute("href", "style/dark-style.css");
  themeButton.innerHTML = "Light theme";
  themeButton.classList.remove("dark-mode-btn");
  themeButton.classList.add("light-mode-btn");
  themeSelector = "dark";
}

//Checks if localStorage is saved
if (localStorage.getItem("theme") === "light-style") {
  lightTheme();
} else if (localStorage.getItem("theme") === "dark-style") {
  darkTheme();
} else {
  lightTheme();
}

export function toggleTheme() {
  //If light theme is enabled then switch to dark theme
  if (theme.getAttribute("href") == "style/light-style.css") {
    darkTheme();
    localStorage.setItem("theme", "dark-style");
    //If light theme is not active then check if dark theme is active then switch to light
  } else if (theme.getAttribute("href") == "style/dark-style.css") {
    lightTheme();
    localStorage.setItem("theme", "light-style");
    //if nothing active just start with light theme
  } else {
    lightTheme();
  }
  adjustingImg();
}

function adjustingImg() {
  let navImg = document.querySelector("#navbars");
  let logoImg = document.querySelector("#logo");
  if (themeSelector === "light") {
    navImg.src = "assets/nav.svg";
    logoImg.src = "assets/logo.svg";
  } else if (themeSelector === "dark") {
    navImg.src = "assets/navVit.svg";
    logoImg.src = "assets/logoVit.svg";
  }
}
