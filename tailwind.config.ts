import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta baseada no design do Canva - tema escuro moderno
        primary: {
          50: "#E5E7EB", // Cinza muito claro
          100: "#D1D5DB", // Cinza claro
          200: "#9CA3AF", // Cinza médio
          300: "#6B7280", // Cinza
          400: "#4B5563", // Cinza escuro
          500: "#1A202C", // Azul-cinza escuro principal (background)
          600: "#2A365C", // Azul escuro (banner)
          700: "#0F172A", // Azul muito escuro
          800: "#0A0E1A", // Quase preto azulado
          900: "#030508", // Preto
        },
        secondary: {
          50: "#F9FAFB", // Branco suave
          100: "#F3F4F6", // Cinza muito claro
          200: "#E5E7EB", // Cinza claro
          300: "#D1D5DB", // Cinza médio claro
          400: "#9CA3AF", // Cinza médio
          500: "#6B7280", // Cinza (texto secundário)
          600: "#4B5563", // Cinza escuro
          700: "#374151", // Cinza mais escuro
          800: "#1F2937", // Cinza muito escuro
          900: "#111827", // Cinza quase preto
        },
        accent: {
          50: "#E8EBED", // Azul muito claro
          100: "#D1D7DB", // Azul claro
          200: "#A3AFB7", // Azul médio claro
          300: "#758793", // Azul médio
          400: "#475F6F", // Azul médio escuro
          500: "#142431", // Azul principal (#142431)
          600: "#0F1A25", // Azul escuro
          700: "#0A1219", // Azul mais escuro
          800: "#050A0D", // Azul muito escuro
          900: "#020508", // Azul quase preto
        },
        neutral: {
          50: "#F9FAFB", // Branco suave
          100: "#F3F4F6", // Cinza muito claro
          200: "#E5E7EB", // Cinza claro
          300: "#D1D5DB", // Cinza médio claro
          400: "#9CA3AF", // Cinza médio
          500: "#6B7280", // Cinza
          600: "#4B5563", // Cinza escuro
          700: "#374151", // Cinza mais escuro
          800: "#1F2937", // Cinza muito escuro
          900: "#111827", // Cinza quase preto
          950: "#1A202C", // Azul-cinza escuro (background principal)
        },
      },
      fontFamily: {
        sans: [
          "Average Sans",
          "Avenir Light",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        heading: [
          "DiodrumRounded",
          "Average Sans",
          "Avenir Light",
          "Inter",
          "sans-serif",
        ],
        body: [
          "Average Sans",
          "Avenir Light",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        accent: [
          "DiodrumRounded",
          "Average Sans",
          "Avenir Light",
          "sans-serif",
        ],
        diodrum: [
          "DiodrumRounded",
          "Average Sans",
          "Avenir Light",
          "sans-serif",
        ],
        avenir: ["Average Sans", "Avenir Light", "Inter", "sans-serif"],
        average: ["Average Sans", "Inter", "system-ui", "sans-serif"],
        "average-light": ["Average Sans", "Inter", "system-ui", "sans-serif"],
        "average-thin": ["Average Sans", "Inter", "system-ui", "sans-serif"],
      },
      fontWeight: {
        "average-light": "300",
        "average-thin": "100",
        average: "100",
      },
    },
  },
  plugins: [],
};
export default config;
