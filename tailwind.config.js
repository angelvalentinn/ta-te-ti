/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // Agrega tu sombra personalizada aquí
        'custom-shadow': '1px 6px 6px 0px rgba(0,0,0,0.75);',
      }
    },
  },
  plugins: [],
}
