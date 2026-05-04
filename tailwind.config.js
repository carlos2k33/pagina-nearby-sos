/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(231, 66, 66, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(231, 66, 66, 0.8)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 1.5s infinite',
      },
    },
  },
  plugins: [],
}




