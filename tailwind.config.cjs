/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        'near-black': 'var(--near-black)',
        white: 'var(--white)',
        'off-white': 'var(--off-white)',
        'bg-tint': 'var(--bg-tint)'
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      letterSpacing: {
        tightTrack: '-0.07em'
      }
    }
  },
  plugins: []
}
