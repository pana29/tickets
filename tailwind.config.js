/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: '#F5F7F8',
        page: '#F5F7F8',
        card: '#11235A',
        beige: '#BE3144',
        textDark: '#45474B',
        'card-hover': '#1F2544',
        'default-text': '#F5F7F8',
        'blue-accent': '#0084d4',
        'blue-accent-hover': '#009fff',
      },
    },
  },
  plugins: [],
};
