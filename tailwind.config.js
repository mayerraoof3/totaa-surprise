/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffeef2',
          200: '#ffd6e0',
          300: '#ffafcc',
          400: '#fb6f92',
          500: '#f43f5e',
          600: '#e11d48',
        },
        ivory: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f4ede0',
          300: '#ebe1ce',
          400: '#dfcfb5',
        },
        lavender: {
          50: '#faf7fd',
          100: '#f3eefb',
          200: '#e9ddf7',
          300: '#d7c2f0',
        },
        rosegold: {
          DEFAULT: '#b76e79',
          light: '#d4a5ab',
          dark: '#934d58',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwritten: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'soft-glow': '0 0 25px -5px rgba(251, 111, 146, 0.25)',
        'warm-card': '0 10px 30px -10px rgba(183, 110, 121, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'polaroid': '0 12px 28px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
