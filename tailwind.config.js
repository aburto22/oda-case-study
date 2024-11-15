/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "var(--text-primary-color)",
        "text-secondary": "var(--text-secondary-color)",
        "text-opposite": "var(--text-opposite-color)",
        primary: "var(--primary-color)",
        "primary-content": "var(--primary-content-color)",
        secondary: "var(--secondary-color)",
        "secondary-content": "var(--secondary-content-color)",
        tertiary: "var(--tertiary-color)",
        "tertiary-content": "var(--tertiary-content-color)",
      },
    },
  },
  plugins: [],
};
