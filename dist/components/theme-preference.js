const currentTheme = window.matchMedia('(prefers-color-scheme: dark').matches;
const circleElement = document.querySelector('.circle-btn-element');
export const toggleThemePreference = () => {
    if (currentTheme) {
        document.documentElement.classList.toggle('light-mode');
    }
    circleElement.classList.toggle('dark-mode-off');
    document.documentElement.classList.toggle('dark-mode');
};
export const isDarkOrLightMode = () => {
    if (currentTheme) {
        circleElement.classList.remove('dark-mode-off');
    }
    else {
        circleElement.classList.add('dark-mode-off');
    }
};
//# sourceMappingURL=theme-preference.js.map