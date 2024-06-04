import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P. R. Jorge",
  description: "Landing page for Pedro Rodrigues Jorge",
  keywords: "Pedro Rodrigues Jorge, P. R. Jorge, Books, P. R. Jorge Books, R. G. Peter, Pseudonym, Real account, Author P. R. Jorge, Author Pedro Rodrigues Jorge, Ill Me, Infinity Minus Eight, Ian Oaks, R. G. Peter Book"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
