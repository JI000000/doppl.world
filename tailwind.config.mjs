import typography from "@tailwindcss/typography";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF5722",
          '50': "#FFFFFF",
          '100': "#FFFFFF",
          '200': "#FFE3D9",
          '300': "#FFC4AD",
          '400': "#FFA482",
          '500': "#FF8556",
          '600': "#FF652B",
          '700': "#FF5722",
          '800': "#D43E0F",
          '900': "#A82500",
          '950': "#821600",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate[700]"),
            "--tw-prose-headings": theme("colors.slate[900]"),
            "--tw-prose-links": theme("colors.primary[700]"),
            "--tw-prose-invert-body": theme("colors.slate[300]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.primary[500]"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
