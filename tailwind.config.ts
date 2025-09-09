/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'terpel': {
          'primary': '#FF0818',
          'secondary': '#1A3A42',
          'light': '#F3FFFF',
          'accent': '#C9D6D7',
          'muted': '#8A9BA8'
        }
      },
      fontFamily: {
        'terpel': ['fuenteTerpel', 'sans-serif'],
        'terpel-light': ['fuenteTerpelLibiana', 'sans-serif']
      },
      animation: {
        'progress-grow': 'progress-grow 1s linear infinite',
        'slide-in-down': 'slideInDown 0.5s ease-out',
        'reveal': 'reveal 0.6s ease-out forwards'
      },
      keyframes: {
        'progress-grow': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'slideInDown': {
          'from': {
            transform: 'translate3d(0, -50px, 0)',
            opacity: '0'
          },
          'to': {
            transform: 'translate3d(0, 0, 0)',
            opacity: '1'
          }
        },
        'reveal': {
          'from': {
            opacity: '0',
            transform: 'translateY(100px) scale(0.5)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
