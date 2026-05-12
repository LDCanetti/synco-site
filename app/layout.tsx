import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synco – Cloud File Sync",
  description:
    "Personal Google Drive synchronization tool powered by Synco, hosted at sapingos.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
        {/* Nav */}
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Synco – Cloud File Sync"
                width={120}
                height={60}
                priority
                className="h-12 w-auto object-contain"
              />
            </Link>
            <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Home
              </Link>
              <Link href="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Terms of Service
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6">
          <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Synco"
                width={60}
                height={30}
                className="h-7 w-auto object-contain opacity-60"
              />
              <span>© {new Date().getFullYear()} Synco / sapingos.com. All rights reserved.</span>
            </div>
            <div className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
