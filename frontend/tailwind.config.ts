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
      },
      padding: {
        "1.2": "5px",
        "4.5": "18px",
      },
      width: {
        logo: "3.125rem",
      },
      lineHeight: {
        logo: "11.88px",
      },
      letterSpacing: {
        wider: "0.6px",
        tightest: "-0.075rem",
      },
      colors: {
        logo: "#65558F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        header:
          "0px 2px 5px 0px rgba(23, 26, 31, 0.09), 0px 0px 2px 0px rgba(23, 26, 31, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
