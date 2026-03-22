/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['Proxima Nova', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'sans': ['Proxima Nova', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'p': ['18px', { lineHeight: '1.6', letterSpacing: '0.06em', fontWeight: '300' }],
      },
      fontWeight: {
        // ... (keep your existing font weights)
      },
      colors: {
        // Add your custom colors here (preserve existing ones)
        primary: '#000000',
        accent: '#D6FD3A',
        neutral: '#F3F4F6',
        'dark-gray': '#374151',
        'text-primary': '#333333',
        'text-secondary': '#757575',
        'text-muted': '#999999',
        'button-text': '#141414',
        'link-hover': '#7CA300',
        
        // New custom colors
        'custom': {
          'light': '#F9FFE0',    // Your soft background color
          'primary': '#7CA300',  // Your border color (reusing link-hover)
        },
      },
      animation: {
        // ... (keep your existing animations)
      },
      keyframes: {
        // ... (keep your existing keyframes)
      },
    },
  },
  plugins: [],
};