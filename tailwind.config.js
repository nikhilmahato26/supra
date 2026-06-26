/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F2D8',
        'light-cream': '#FFF8E7',
        brand: '#4A61B8',
        'brand-dark': '#354A8A',
        yellow: '#F4B400',
        'light-gray': '#F5F5F5',
        ink: '#3A3A3A',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        body: ['Poppins', 'Manrope', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(53, 74, 138, 0.18)',
        card: '0 8px 30px -10px rgba(58, 58, 58, 0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-22px) rotate(-2deg)' },
        },
        spark: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        spark: 'spark 1.6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
