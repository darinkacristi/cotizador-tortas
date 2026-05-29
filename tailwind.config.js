/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta pastel premium · identidad Dannae
        cream: '#FBF6F2',
        sand: '#F3EAE0',
        blush: '#F6E2E7',
        lavender: '#E9DCF2',
        purple: {
          DEFAULT: '#B79AD4',
          dark: '#9168B5',
          deep: '#6B3F94',
        },
        plum: '#3E2257',
        accent: {
          DEFAULT: '#F5A623',
          soft: '#F8C56B',
        },
        ink: '#3A2A4A',
        muted: '#8B7A9C',
        line: 'rgba(107, 63, 148, 0.14)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(62, 34, 87, 0.07)',
        card: '0 2px 16px rgba(62, 34, 87, 0.06)',
        mark: '0 8px 28px rgba(107, 63, 148, 0.28)',
        float: '0 -4px 24px rgba(62, 34, 87, 0.1)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        pop: 'pop 0.28s ease',
        'fade-up': 'fade-up 0.6s ease both',
        'fade-in': 'fade-in 0.5s ease both',
        float: 'float 6s ease-in-out infinite',
        spin: 'spin 0.7s linear infinite',
      },
    },
  },
  plugins: [],
}
