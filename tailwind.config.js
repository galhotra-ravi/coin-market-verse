/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#0d1421',
        'secondary-color': '#222531',
        'third-color': '#323546',
      }
    },
    
  },
  plugins: [],
}

