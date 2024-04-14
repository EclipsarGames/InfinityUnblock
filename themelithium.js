const themeButton = document.getElementById('themeButton');
const body = document.body;
const themeStylesheet = document.getElementById('themeStylesheet');

// Check if a theme preference exists in local storage
const storedTheme = localStorage.getItem('theme');

// If a theme preference exists, apply it
if (storedTheme) {
    body.classList.add(storedTheme);
}

themeButton.addEventListener('click', () => {
    // Toggle between 'light' and 'dark' themes
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});
