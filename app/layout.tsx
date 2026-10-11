import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Online Dream Tech | Creative Digital Agency",
  description: "Online Dream Tech delivers creative digital, branding, and marketing solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
