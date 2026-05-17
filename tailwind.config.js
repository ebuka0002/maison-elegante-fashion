/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0a0a0a',
        'luxury-dark': '#111111',
        'luxury-charcoal': '#1a1a1a',
        'luxury-gray': '#2a2a2a',
        'luxury-light-gray': '#8a8a8a',
        'luxury-white': '#faf9f7',
        'luxury-cream': '#f5f0e8',
        'luxury-beige': '#d4c4a8',
        'luxury-nude': '#c9b8a0',
        'luxury-gold': '#c9a96e',
        'luxury-gold-light': '#e0c995',
        'luxury-gold-dark': '#a08050',
        'luxury-brown': '#3d2b1f',
        'luxury-rose': '#c9a0a0',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'serif': ['"Cormorant Garamond"', 'serif'],
        'sans': ['"Inter"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #c9a96e 0%, #e0c995 50%, #c9a96e 100%)',
        'cream-gradient': 'linear-gradient(180deg, #faf9f7 0%, #f5f0e8 100%)',
      },
    },
  },
  plugins: [],
}
