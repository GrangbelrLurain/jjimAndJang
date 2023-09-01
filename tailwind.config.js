import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        defaultTheme: {
          primary: '#1d4d7c',
          secondary: '#e08672',
          accent: '#b1f45f',
          neutral: '#251b27',
          'base-100': '#ffffff',
          info: '#869cdf',
          success: '#0f5c2d',
          warning: '#fcc74a',
          error: '#ef3948',
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
    },
  },
  plugins: [daisyui],
};
