import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/fragments/navbar";
import { Footer } from "@/components/fragments/footer";
import LenisProvider from "@/providers/lenis";



export const metadata: Metadata = {
  title: "Zeno SmartRing - Iman Irvansyah",
  description: "Be the first in this lifestyle revolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <LenisProvider>
          <div className="container">
            <Navbar />
            {children}
          </div>
          <Footer />

        </LenisProvider>
      </body>
    </html>
  );
}
