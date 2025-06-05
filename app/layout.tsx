import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";

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
    <>
      <Toaster />
      <html lang="en" suppressHydrationWarning>
        <body className={urbanist.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ModalProvider />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
