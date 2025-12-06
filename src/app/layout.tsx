import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terra Ventos - Investimento Imobiliário no Litoral do Ceará",
  description:
    "Comunidade exclusiva de investidores, kitesurfistas e amantes do litoral nordestino. Acesso antecipado a oportunidades imobiliárias, curadoria jurídica e lifestyle conectado ao vento e ao mar.",
  keywords:
    "investimento imobiliário, litoral cearense, kitesurf, praia, terreno, casa, Ceará, Preá, Jericoacoara, investimento, lifestyle, mar, vento",
  authors: [{ name: "Terra Ventos" }],
  creator: "Terra Ventos",
  publisher: "Terra Ventos",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Terra Ventos - Investimento Imobiliário no Litoral do Ceará",
    description:
      "Comunidade exclusiva de investidores, kitesurfistas e amantes do litoral nordestino. Acesso antecipado a oportunidades imobiliárias, curadoria jurídica e lifestyle conectado ao vento e ao mar.",
    type: "website",
    locale: "pt_BR",
    siteName: "Terra Ventos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terra Ventos - Investimento Imobiliário no Litoral do Ceará",
    description:
      "Comunidade exclusiva de investidores, kitesurfistas e amantes do litoral nordestino.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} w-full max-w-full overflow-x-hidden overflow-y-hidden`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          type="text/javascript"
          async
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/364b498c-be5f-4e30-ac0b-0ab03229e261-loader.js"
        ></Script>
      </body>
    </html>
  );
}
