/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  // 'selector' é o padrão oficial para alternar via classe .dark no HTML
  darkMode: 'selector',
  
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Bricolage Grotesque"', 
          // Fontes Japonesas (Prioridade Alta)
          '"Hiragino Sans"',      // macOS moderno
          '"Hiragino Kaku Gothic ProN"', // macOS clássico
          '"Noto Sans JP"',       // Android/ChromeOS
          '"Yu Gothic"',          // Windows moderno
          '"Meiryo"',             // Windows clássico
          ...defaultTheme.fontFamily.sans
        ],
        sans: [
          '"Hanken Grotesk"', 
          // Mesma lista para o corpo do texto
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Noto Sans JP"',
          '"Yu Gothic"',
          '"Meiryo"',
          ...defaultTheme.fontFamily.sans
        ],
      },
      colors: {
        brand: {
          dark: '#27232A',
          light: '#EBEBEB',
          surfaceDark: '#2D1448',
          surfaceLight: '#FFFFFF',
          purple: '#B066FF',
          terracotta: '#C04848',
          green: '#5A7E4D',      
          grey: '#D4D4D4',       
          deepRed: '#531414',
          deepGreen: '#224117',
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}