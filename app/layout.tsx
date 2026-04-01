import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehmood Ul Haq | DevOps & Cloud Engineer",
  description: "DevOps & Cloud Engineer portfolio highlighting automated pipelines, AWS infrastructure, and Kubernetes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-[#ededed] min-h-screen selection:bg-[#b7410e]/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
