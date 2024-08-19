/** @type {import('tailwindcss').Config} */

import image from './src/assets/images/'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card_front': "url('./src/assets/images/bg-card-front.png')",
        'card_back': "url('./src/assets/images/bg-card-back.png')",
        'main_mobile': "url('./src/assets/images/bg-main-mobile.png')",

      }
    }
  },
  plugins: [],
}

