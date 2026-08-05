import type { Metadata } from "next";
import { Volkhov, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jadoo — Travel, enjoy and live a new and full life",
  description:
    "Best destinations around the world. Book your trip in minutes with Jadoo — flights, hotels, and curated travel experiences.",
  openGraph: {
    title: "Jadoo — Travel Agency",
    description:
      "Travel, enjoy and live a new and full life. Best destinations around the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${volkhov.variable} ${poppins.variable} ${openSans.variable}`}>
      <body className="font-sans text-body antialiased bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
