import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/header";
// import Lenis from "./lenis";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const gunsan = localFont({
  src: "./fonts/Gunsan.ttf",
  variable: "--font-gunsan",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YOGAS7",
  description: "YogaS7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gunsan.variable} antialiased`}
      >
        {/* <Lenis> */}
          <Header/>
          {children}
        {/* </Lenis> */}
      </body>
    </html>
  );
}
