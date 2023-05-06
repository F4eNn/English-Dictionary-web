const currentTheme = window.matchMedia('(prefers-color-scheme: dark').matches

export const toggleThemePreference = () => {
    if(currentTheme){
        document.documentElement.classList.toggle('light-mode')
        return
    }
    document.documentElement.classList.toggle('dark-mode')
}