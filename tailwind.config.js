/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fundo-plantas': "url('../img/fundo-plantas.png')",
      }
    },
  },
  plugins: [],
}

