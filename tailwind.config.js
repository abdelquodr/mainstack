/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grey:{
          light: '#EFF1F6',
          soft: '#56616B',
          solid: '#131316'
        },
        green: {
          soft: '#E3FCF2',
          solid: '#075132',
        },
        red: {
          soft: '#961100',
          solid: '#961100',
        },
        yelow: {
           solid: '#A77A07',
        }
      },
      fontFamily: {
        degular: [ 'Degular', 'sa Linear', 'sans-serif' ],
      }
    },
  },
  plugins: [],
}
