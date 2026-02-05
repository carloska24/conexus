import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores da marca Conexus
        primary: {
          DEFAULT: "#051D40",
          50: "#E8EBF0",
          100: "#C5CCD9",
          200: "#9EABC2",
          300: "#7789AA",
          400: "#506793",
          500: "#051D40",
          600: "#041832",
          700: "#031224",
          800: "#020C16",
          900: "#010608",
        },
        accent: {
          DEFAULT: "#BE1A87",
          50: "#FCE8F4",
          100: "#F8C6E3",
          200: "#F19FD0",
          300: "#E978BD",
          400: "#D449A2",
          500: "#BE1A87",
          600: "#98156C",
          700: "#721051",
          800: "#4C0B36",
          900: "#26051B",
        },
      },
      fontFamily: {
        heading: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-clear-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
