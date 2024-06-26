/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        josefin: ['var(--font-josefin)', 'sans-serif'],
      },
      colors: {
        white: '#D1D4DA',
        blue: '#004DA7',
        dark_blue: '#1A1B21',
        darker_blue: '#17171A',
        gray: '#292D31',
        light_gray: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
