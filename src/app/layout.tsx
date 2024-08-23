import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Portfolio Arrafii Alfa",
  description:
    "Web Portfolio Fullstack Developer by Arrafii Alfa made by Next.js, React.js, and Tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
