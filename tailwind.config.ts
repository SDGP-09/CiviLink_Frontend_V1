import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        blueCanvas: '#A2C7E0',
        navBlue:'#2F26E0',
        canvasWhite: '#FAF9F6',
        sideBoxBlack:'#36454F'
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
