/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    // The most reliable glob pattern for all source files in /src/
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      // 🐛 Fix: The 'sans' array must be inside the 'fontFamily' key
      fontFamily: {
        // This overrides Tailwind's default sans-serif stack to use Poppins
        sans: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};