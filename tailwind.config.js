/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#fc457b', // rojo
                graydark: '#242424', // gris oscuro
                white: '#ffffff',
            },
            fontFamily: {
                sans: ['Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
