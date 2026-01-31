// Basic JavaScript for Portfolio

// Variables
const themeButton = document.getElementById('theme-toggle');
const clickButton = document.getElementById('click-counter');
let clickCount = 0;
let isDarkMode = false;

// Functions
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark');
    console.log('Theme toggled, isDarkMode:', isDarkMode);
}

function incrementCount() {
    clickCount++;
    console.log('Click count:', clickCount);
}

// Event handlers
themeButton.addEventListener('click', toggleTheme);
clickButton.addEventListener('click', incrementCount);

// Initial console log
console.log('Page loaded, JavaScript initialized');