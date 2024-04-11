const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    // State
    const theme = localStorage.getItem('theme');

    // On mount
    theme && document.body.classList.add(theme);

    // Handler
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    };
    // Event
    themeToggleBtns.forEach(btn => btn.addEventListener('click', handleThemeToggle));
};

export default darkMode;