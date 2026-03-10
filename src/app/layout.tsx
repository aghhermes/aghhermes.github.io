import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGH HERMES",
  description:
    "Koło Naukowe AGH HERMES – integracja nowoczesnych systemów, przetwarzanie sygnałów cyfrowych i telemetria. Dołącz do nas na AGH w Krakowie.",
  keywords: [
    "AGH HERMES",
    "koło naukowe",
    "telemetria",
    "przetwarzanie sygnałów",
    "DSP",
    "integracja systemów",
    "Kraków",
    "AGH",
  ],
  authors: [{ name: "AGH HERMES" }],
  openGraph: {
    title: "AGH HERMES – Koło Naukowe | Systemy, Sygnały, Telemetria",
    description:
      "Koło Naukowe AGH HERMES – integracja nowoczesnych systemów, przetwarzanie sygnałów cyfrowych i telemetria.",
    type: "website",
    locale: "pl_PL",
    images: [{ url: "/images/logo.png", width: 1024, height: 576 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
