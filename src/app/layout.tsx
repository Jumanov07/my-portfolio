import "./globals.scss";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Cursor from "@/components/cursor";

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
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        {children}

        <Cursor />
        <Analytics />
      </body>
    </html>
  );
}
