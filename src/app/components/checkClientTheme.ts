"use client"

export const checkClientTheme = () => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = isDarkTheme ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    console.log(theme);
};

export const checkClientThemeChange = () => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
        const theme = e.matches ? "dark" : "light";
        document.body.setAttribute("data-theme", theme);
        console.log(theme)
    })
}