/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'ct-primary': '#356C07',
        'ct-secondary': '#68C114',
        'ct-cta-color': '#E10000',
        'ct-heading-color': '#1A1A1A',
        'ct-text-color': '#4F4F4F',
        'ct-sub-text-color': '#4F4F4F99',
      },
    },
  },
  plugins: [],
}
