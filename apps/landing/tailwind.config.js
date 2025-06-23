/** @type {path.PlatformPath | path} */
const path = require("path");

module.exports = {
    darkMode: 'class',
    content: [
        path.join(__dirname, "src/**/*.{astro,js,jsx,ts,tsx}"),
        path.join(__dirname, "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"),
    ],
    theme: {
        extend: {
            fontFamily: {
                reaktifSemibold: ['"Reaktif Semibold"', 'sans-serif'],
                reaktifBold: ['"Reaktif Bold"', 'sans-serif'],
                reaktifNews: ['"Reaktif News"', 'sans-serif'],
                cabinRegular: ['"Cabin Regular"', 'sans-serif'],
                cabinBold: ['"Cabin Bold"', 'sans-serif'],
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "dark"],
        logs: true
    },
    safelist: [
        "clip-[path('M10,40L70,40L80,30L80,10L90,0L140,0L150,10L150,190L140,200L10,200L0,190L0,50L10,40Z')]",
    ],
}