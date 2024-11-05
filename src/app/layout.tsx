import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alisher Jumanov",
  description: "Portfolio",
  authors: {
    name: "Alisher Jumanov",
    url: "https://www.linkedin.com/in/alisher-jumanov/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const fontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>{children}</body>
    </html>
  );
}
