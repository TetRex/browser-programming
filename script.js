// Theme toggle with localStorage persistence
const themeButton = document.getElementById('theme-toggle');
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark', isDarkMode);
    themeButton.textContent = isDarkMode ? '\u2600\ufe0f' : '\ud83c\udf19';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Restore saved theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    isDarkMode = true;
    document.body.classList.add('dark');
    themeButton.textContent = '\u2600\ufe0f';
}

themeButton.addEventListener('click', toggleTheme);