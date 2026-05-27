import type { Metadata } from "next";
import { Anton, Bebas_Neue, Inter } from "next/font/google";
import { Providers } from "@/components/layout/providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stadiumx.club"),
  title: "StadiumX Cricket Club",
  description:
    "Fixtures, results, players, media, academy, and membership for StadiumX Cricket Club.",

  keywords: [
    "cricket",
    "sports broadcast",
    "IPL",
    "stadium",
    "Next.js",
    "Three.js",
  ],

  icons: {
    icon: "/stadiumx-mark.svg",
    shortcut: "/stadiumx-mark.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "StadiumX Cricket Club",
    description:
      "Fixtures, results, players, media, academy, and membership for StadiumX Cricket Club.",
    images: ["/stadiumx-mark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
