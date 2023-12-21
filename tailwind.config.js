/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs:'480px',
      sm: '556px',
      md: '768px',
      lg: '992px',
      xl:'1240px',
      xxl: '1440px',
    },
    container: {
      // center: true,
      padding: {
        DEFAULT: '8px',
        sm: '10px',
        md:'12px',
        lg: '16px',
        xl: '24px',
      },
    },
    extend: { 
      fontFamily:{
        'Inter':['Inter']
      }
    },
  },
  plugins: [],
}

