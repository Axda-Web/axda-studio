import React from "react";
import type { Decorator } from "@storybook/react";
import HomeLayout from "../app/(root)/layout";
import localFont from "next/font/local";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Sheet } from "@/components/ui/sheet";

const interSans = localFont({
  src: "../app/fonts/Inter.ttf",
  variable: "--font-inter-sans",
  weight: "300 400 500 800 900",
});

const knewaveCurs = localFont({
  src: "../app/fonts/Knewave.ttf",
  variable: "--font-knewave-curs",
  weight: "400",
});

export const withRootLayoutDecorator: Decorator = (Story) => (
  <div className={`${interSans.className} ${knewaveCurs.variable} antialiased`}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Story />
    </ThemeProvider>
  </div>
);

export const withHomeLayoutDecorator: Decorator = (Story) => (
  <HomeLayout>
    <Story />
  </HomeLayout>
);

export const withSheetDecorator: Decorator = (Story) => (
  <Sheet>
    <Story />
  </Sheet>
);
