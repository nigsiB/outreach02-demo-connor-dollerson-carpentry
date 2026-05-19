import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Libre_Baskerville, Karla } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";

const serif = Libre_Baskerville({ weight: "400", subsets: ["latin"], variable: "--font-serif" });
const font = Karla({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: "Think Outside The Box Carpentry | Connor Dollerson", template: "%s | Think Outside The Box" },
  description: "Bespoke carpentry and joinery by Connor Dollerson — Cranleigh and Surrey.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${font.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <header className="border-b border-white/10 bg-black text-[var(--paper)]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="block shrink-0">
              <Image
                src="/logo-white.png"
                alt="Think Outside The Box Carpentry"
                width={343}
                height={82}
                className="h-[3.9rem] w-auto sm:h-[4.29rem]"
                priority
              />
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/contact" className="opacity-90 transition-opacity hover:opacity-100">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
