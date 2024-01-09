//Create a variable which gets the button id
//Added code to change innerHTML button depending on the theme
var theme = document.getElementById('toggle-theme');
var themeButton = document.getElementById('toggle-theme-button');

//Created light theme and dark theme function to make easier call out
function lightTheme() {
    theme.setAttribute('href', 'style/light-style.css');
    themeButton.innerHTML = "Switch to dark theme";
}

function darkTheme() {
    theme.setAttribute('href', 'style/dark-style.css');
    themeButton.innerHTML = "Switch to light theme";
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
    if (theme.getAttribute('href') == 'style/light-style.css') {
        darkTheme();
        localStorage.setItem("theme", "dark-style");
        //If light theme is not active then check if dark theme is active then switch to light
    } else if (theme.getAttribute('href') == 'style/dark-style.css') {
        lightTheme();
        localStorage.setItem("theme", "light-style");
        //if nothing active just start with light theme
    } else {
        lightTheme();
    }
}
