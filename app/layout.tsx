import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/app/providers/theme-provider";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const interSans = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter-sans",
  weight: "300 400 500 800 900",
});
const knewaveCurs = localFont({
  src: "./fonts/Knewave.ttf",
  variable: "--font-knewave-curs",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Axda Studio Dev",
  description:
    "Creative developer specializing in fast, robust, and beautiful user interfaces. Delivering seamless web and mobile experiences with innovative design and cutting-edge development techniques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className} ${knewaveCurs.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
