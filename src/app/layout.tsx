import type { Metadata } from "next";
import { Inter, Manrope, Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["800"],
});

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  variable: "--font-rubik",
  weight: ["300", "400", "600", "700"],
});

const stratos = localFont({
  src: "../fonts/stratos/Stratos-LC-Web-Medium.woff2",
  weight: "500",
  variable: "--font-stratos",
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ads Solutions — Google Ads",
  description:
    "Професійне управління рекламою з акцентом на окупність та зростання прибутку.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${inter.variable} ${manrope.variable} ${rubik.variable} ${stratos.variable} ${satoshi.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
