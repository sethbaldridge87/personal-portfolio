import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Inter } from 'next/font/google';
import { ViewTransition } from "react";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Seth Baldridge",
  description: "Software Developer located in Salt Lake City, USA",
  icons: {
    icon: '/s-logo.svg',
    shortcut: '/s-logo.svg',
    apple: '/s-logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#mainContent" className="skipLink">Skip to main content</a>
        <Header />
        <Navigation />
        <ViewTransition>
          <main id="mainContent">
            {children}
          </main>
        </ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
