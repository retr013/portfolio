import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Ivanov | Front-End Developer",
  description: "Front-end developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Building clean, responsive, and user-focused web experiences.",
  keywords: "front-end developer, react, next.js, typescript, tailwind css, web development, portfolio",
  authors: [{ name: "Max Ivanov" }],
  openGraph: {
    title: "Max Ivanov | Front-End Developer",
    description: "Front-end developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Ivanov | Front-End Developer",
    description: "Front-end developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
