import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "logo-font": "8.31px",
      },
      maxWidth: {
        "page-max": "1440px",
        "nav-wide": "19.5625rem",
      },
      padding: {
        "1.2": "5px",
        "4.5": "18px",
      },
      width: {
        "23": "5.75rem",
        logo: "3.125rem",
      },
      lineHeight: {
        logo: "11.88px",
      },
      letterSpacing: {
        wider: "0.6px",
        tightest: "0.1px",
      },
      colors: {
        logo: "#65558F",
        primary: "#21005D",
        secondary: "#1D1B20",
        "create-btn": "#ebddff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        header:
          "0px 2px 5px 0px rgba(23, 26, 31, 0.09), 0px 0px 2px 0px rgba(23, 26, 31, 0.12)",
        xml: "0px 1px 3px 0px rgba(0, 0, 0, 0.302), 0px 4px 8px 3px rgba(0, 0, 0, 0.149)",
      },
    },
  },
  plugins: [],
} satisfies Config;
