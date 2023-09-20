import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        defaultTheme: {
          primary: '#9D1F24',
          secondary: '#e08672',
          accent: '#b1f45f',
          neutral: '#251b27',
          'base-100': '#ffffff',
          info: '#869cdf',
          success: '#1b2b8b',
          warning: '#fcc74a',
          error: '#f22f1d',
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        body: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
      },
      screens: {
        touch: { raw: '(hover: none) and (pointer: coarse)' },
        stylus: { raw: '(hover: none) and (pointer: fine)' },
        mouse: { raw: '(hover: hover) and (pointer: fine)' },
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 2s ease-out backwards',
      },
    },
  },
  plugins: [daisyui],
};
