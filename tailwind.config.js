/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-pastel': '#ff6b6b',
        'red-accent': '#dc2626',
        'red-light': '#fee2e2',
        'red-lighter': '#fef2f2',
      },
    },
  },
  plugins: [],
}


