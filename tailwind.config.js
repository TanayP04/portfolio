/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'cyber-black': '#0f0f0f',
        'cyber-dark': '#121212',
        'cyber-gray': '#1a1a1a',
        'cyber-light': '#2a2a2a',
        'neon-blue': '#00f0ff',
        'neon-purple': '#9900ff',
        'neon-green': '#00ff9d',
        'neon-pink': '#ff00a2',
        'matrix-green': '#00ff41',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f0ff, 0 0 10px #00f0ff',
        'neon-purple': '0 0 5px #9900ff, 0 0 10px #9900ff',
        'neon-green': '0 0 5px #00ff9d, 0 0 10px #00ff9d',
        'neon-pink': '0 0 5px #ff00a2, 0 0 10px #ff00a2',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
        },
        terminal: {
          '0%': { borderRight: '2px solid transparent' },
          '50%': { borderRight: '2px solid currentColor' },
          '100%': { borderRight: '2px solid transparent' },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        'slow-flicker': 'flicker 8s linear infinite',
        glitch: 'glitch 0.5s linear infinite',
        terminal: 'terminal 1s ease infinite',
      },
    },
  },
  plugins: [],
};