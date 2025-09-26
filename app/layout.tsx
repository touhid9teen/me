import type React from "react";
import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";
// @ts-ignore
import "@/styles/fonts.css";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Touhidul Islam",
  description:
    "Portfolio of Touhidul Islam, a passionate full stack developer specializing in modern web technologies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: "Recoleta, serif" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
