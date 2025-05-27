import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "../providers";
import localFont from "next/font/local";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const iBrand = localFont({
  src: "../public/fonts/ibrand.otf",
  variable: "--font-ibrand",
});

export const metadata: Metadata = {
  title: "Fastosh",
  description: `Nous sommes une plateforme en ligne dédiée à la réservation de billets de voyage
en bus interurbains.
Nous offrons aux utilisateurs la possibilité de rechercher et de comparer les
meilleures compagnies de transport, les tarifs, ainsi que les niveaux de confort.
En facilitant cette comparaison, nous permettons non seulement
d'optimiser l'expérience des voyageurs, mais aussi de dynamiser l'activité des
fournisseurs de services (compagnies de transport), tout en contribuant à une
gestion simplifiée et plus efficace des réservations.`,
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#FF7900" />
      </head>
      <body className={`${iBrand.variable} antialiased`}>
        <AppProvider>
          <Header />
          <main className="min-h-[500px]">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
