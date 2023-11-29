import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./styles/styles.ts",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f52041", //64FF4B F53250
        secondary: "#190737",
        background: "#130f23",
        lineColor: "#ffffff32"
      },
      fontFamily: {
        Inter: ["var(--font-inter)"],
        Monserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui({
    theme: {}
  })],
};
export default config;

