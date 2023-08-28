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
      <body className={`${inter.className}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    if (localStorage?.getItem("Dark Mode") == "dark") {
      document.getElementsByTagName("html")[0].classList.add("dark", "bg-black");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark", "bg-black");
    } `,
          }}
        ></script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
