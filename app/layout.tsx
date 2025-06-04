import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "react-hot-toast";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Toaster/>
        <ModalProvider/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
