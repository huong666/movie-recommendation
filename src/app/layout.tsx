import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Recommendation",
  description: "Learn NextJs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`max-w-screen-2xl mx-auto ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
