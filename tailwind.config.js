/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00d8e6",
          secondary: "#0094ff",
          accent: "#3f58ff",
          neutral: "#1a2723",
          "base-100": "#162d2f",
          info: "#007dd5",
          success: "#77e56c",
          warning: "#ea7f00",
          error: "#ff7395",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
