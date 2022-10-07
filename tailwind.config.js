/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: "414px",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                helvetica: ["HelveticaNeue", "monospace"],
            },
            colors: {
                primary: {
                    DEFAULT: "#3F6BC4",
                    light: "#7992C4",
                    dark: "#111827",
                },
                text: "#64748B",
            },
        },
    },
    plugins: [],
};
