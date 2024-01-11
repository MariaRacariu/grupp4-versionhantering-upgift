//Create a variable which gets the button id
//Added code to change innerHTML button depending on the theme

//Set theme
// Add eventlistener to button in footer to run function
const toggleThemeBtn = document.querySelector("#toggle-theme-button").addEventListener("click", toggleTheme);

const theme = document.getElementById("toggle-theme");
const themeButton = document.getElementById("toggle-theme-button");

//Checks if localStorage is saved
if (localStorage.getItem("theme") === "light-style") {
  lightTheme();
} else if (localStorage.getItem("theme") === "dark-style") {
  darkTheme();
} else {
  lightTheme();
}

//Created light theme and dark theme function to make easier call out
function lightTheme() {
  theme.setAttribute("href", "style/light-style.css");
  themeButton.innerHTML = "Dark theme";
  themeButton.classList.remove("light-mode-btn");
  themeButton.classList.add("dark-mode-btn");
  adjustingImg();
}

function darkTheme() {
  theme.setAttribute("href", "style/dark-style.css");
  themeButton.innerHTML = "Light theme";
  themeButton.classList.remove("dark-mode-btn");
  themeButton.classList.add("light-mode-btn");
  adjustingImg();
}



function toggleTheme() {
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
  let footerLogo = document.querySelector("#footerLogo");
  let instagramLogo = document.querySelector("#instagramLogo");
  let twitterLogo = document.querySelector("#twitterLogo");
  let tiktokLogo = document.querySelector("#tiktokLogo");

  let navImg = document.querySelector("#navbars");
  let logoImg = document.querySelector("#logo");

  console.log(localStorage.getItem("theme"));

  if (localStorage.getItem("theme") === "light-style") {
    navImg.src = "assets/nav.svg";
    logoImg.src = "assets/logo.svg";

    footerLogo.src = "assets/logo.svg";
    instagramLogo.src = "assets/instagramdark.svg";
    twitterLogo.src = "assets/twitterdark.svg";
    tiktokLogo.src = "assets/tiktokdark.svg";
  } else if (localStorage.getItem("theme") === "dark-style") {
    navImg.src = "assets/navVit.svg";
    logoImg.src = "assets/logoVit.svg";

    footerLogo.src = "assets/logoVit.svg";
    instagramLogo.src = "assets/instagram.svg";
    twitterLogo.src = "assets/twitter.svg";
    tiktokLogo.src = "assets/tiktok.svg";
  }
}
