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
  title: "Venkata Srinivasan | Senior Data Scientist",
  description: "Senior Data Scientist specializing in NLP, Computer Vision, and Causal Modeling. Building AI solutions for compliance and business optimization.",
  keywords: ["Data Scientist", "Machine Learning", "NLP", "Computer Vision", "AI", "Causal Inference", "Nashville"],
  authors: [{ name: "Venkata Srinivasan" }],
  openGraph: {
    title: "Venkata Srinivasan | Senior Data Scientist",
    description: "Senior Data Scientist specializing in NLP, Computer Vision, and Causal Modeling.",
    url: "https://venkatasubramaniansrinivasan.com",
    siteName: "Venkata Srinivasan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkata Srinivasan | Senior Data Scientist",
    description: "Senior Data Scientist specializing in NLP, Computer Vision, and Causal Modeling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-[#f0f0f5]`}
      >
        {children}
      </body>
    </html>
  );
}
