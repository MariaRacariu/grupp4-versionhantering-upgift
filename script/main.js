// Import files and run functions
import { toggleTheme } from "./modules/theme-toggle.js";

// Add eventlistener to button in footer to run function
const toggleThemeBtn = document.querySelector('#toggle-theme-button').addEventListener('click', toggleTheme);