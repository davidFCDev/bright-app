import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1CACE4",
        secondary: "#0E5976",
        terciary: "#E0F2F9",
        light: "#F8FCFF",
        brown: "#9E9031",
        lightBrown: "#DCCB54"
      },
    },
  },
  plugins: [],
};
export default config;
