/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vsCodeBg: "#1E1E1E",
        vsCodeSidebar: "#252526",
        vsCodeEditor: "#333",
        vsCodeText: "#D4D4D4",
        vsCodeBlue: "#007ACC",
      },
    },
  },
  plugins: [],
};
