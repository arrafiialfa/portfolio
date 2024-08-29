import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brandLight": "#d9d9d9",
        "brandBlue": "#173368",
        "brandDarkGrey": "#2a2424",
        "brandGrey": "#323b4c",
        "brandLime": "#c1ff72",
        "brandBlack": "#211a1a"
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-intersect')
  ],
};
export default config;
