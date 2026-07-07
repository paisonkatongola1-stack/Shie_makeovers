import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import SessionWrapper from "@/components/SessionWrapper";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Shie MakeOvers | Beautiful Nails. Professional Care.",
  description: "Experience the ultimate in nail artistry and luxury treatments at Shie MakeOvers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
