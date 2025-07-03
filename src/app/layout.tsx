import { Navbar } from "@/components/fragments/navbar";
import type { Metadata } from "next";
import "./globals.css";
// import LenisProvider from "@/providers/lenis";



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
        {/* <LenisProvider>
        </LenisProvider> */}
        <div className="container">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
