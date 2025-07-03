import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
                shine: {
                  '0%': { 'background-position': '100%' },
                  '100%': { 'background-position': '-100%' },
                },
                ripple: {
                  '0%, 100%': {
                    transform: 'translate(-50%, -50%) scale(1)',
                  },
                  '50%': {
                    transform: 'translate(-50%, -50%) scale(0.9)',
                  },
                },
                spinner: {
                  '0%': {
                    transform: 'rotate(0deg)',
                  },
                  '100%': {
                    transform: 'rotate(360deg)',
                  },
                },
                pulse: {
                  '0%, 100%': {
                    transform: 'scale(0.8)',
                  },
                  '50%': {
                    transform: 'scale(1)',
                  },
                },
                ping:{
                  '0%': {
                    transform: 'scale(0.3)',
                    opacity: 1,
                  },
                  '100%': {
                    transform: 'scale(0.2)',
                    opacity: 0,
                  },
                },
                open:{
                  '0%': {
                    transform: 'scale(0.8) ',
                    opacity:0.5,
                  },
                  '30%': {
                    transform: 'scale(1.2)',
                    opacity: 0.5,
                  },
                  '60%': {
                    transform: 'scale(0.8)',
                    opacity: 0.8,
                  },
                  '80%':{
                    transform: 'scale(1.05)',
                    opacity: 0.9,
                  },
                  '100%': {
                    transform: 'scale(113)',
                    opacity: 0.8,
                  },
                }
                
    },},
    animation: {
      shine: 'shine 5s linear infinite',
      ripple: 'ripple 2s ease-in-out infinite',
      spinner: 'spinner 10s linear infinite',
      pulse: 'pulse 3s ease-in-out infinite',
      ping: 'ping 4s ease-in-out infinite',
      open: 'open 5s ease-in-out forwards'
     
    },
    fontFamily:{
      stix:[ "STIX Two Text", "serif"],
      knewave:["Knewave"],
      Winky:["Winky Rough", "sans-serif"],
      lato:["Lato", "sans-serif"],
      lobster:["Lobster", "sans-serif"],
      charm: ["Charm", "cursive"]

    }
  },
  plugins: [],
}