import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        gunsan: ['var(--font-gunsan)', 'sans-serif']
      },
      screens: {
        '3xl': '2000px',
        '4xl': '2500px'
      }
    },
  },
  plugins: [],
};
export default config;
