/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          black: '#0B0D12',
          charcoal: '#0F121A',
          ink: '#0C0E13',
          white: '#FFFFFF'
        },
        accent: {
          blue: '#1FA4FF',
          gold: '#D6AF68',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(31,164,255,0.25)'
      }
    }
  }
};
