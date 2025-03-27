/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1200px',
      },
      // ... rest of your config
    }
  },
  plugins: [],
}