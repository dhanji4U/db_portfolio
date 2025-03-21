import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

/** Tailwind CSS Configuration */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          400: '#ff7f50', // Replace with your desired color
          500: '#ff6347',
          600: '#ff4500',
        },
        secondary: {
          400: '#6a5acd',
          500: '#483d8b',
          600: '#4b0082',
        },
      },
    },
  },
};

export default config;
