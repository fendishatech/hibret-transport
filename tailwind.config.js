import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        companyBlue: {
          50: "#d4d9e4", // Lightest shade
          100: "#b7bfe0",
          200: "#9aa6db",
          300: "#7d8dd7",
          400: "#224398", // Default shade - #
          500: "#4c5aaf", // Darker shade
          600: "#3a468b", // Darker shade
          700: "#283267", // Darker shade
          800: "#162043", // Darkest shade
          900: "#040c1f", // Even darker shade
        },

        companyPink: {
          50: "#f9b0c7", // Lightest shade
          100: "#e88ca5",
          200: "#d66983",
          300: "#c44561",
          400: "#b02240", // Default shade
          500: "#8a1d38", // Darker shade
          600: "#64182e", // Darker shade
          700: "#3e1225", // Darker shade
          800: "#180b1b", // Darkest shade
          900: "#000013", // Even darker shade
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
