import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synco — Personal Google Drive Sync",
  description:
    "Synco is a private, single-operator utility that uses the Google Drive API to keep a local folder mirrored against one personal Drive account.",
};

const THEME_INIT = `(function(){try{var t=localStorage.getItem('synco-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

// SVG brand mark (inline, matches original design)
function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="22" stroke="#0A2E78" strokeWidth="1.5" fill="none" opacity="0.45" />
      <circle cx="32" cy="32" r="8" fill="#1E55E0" />
      <circle cx="51.05" cy="43" r="5" fill="#1E55E0" />
      <circle cx="12.95" cy="43" r="4" fill="#0A2E78" />
      <circle cx="32" cy="10" r="4" fill="#0A2E78" />
    </svg>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Inline theme init — runs before paint to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        {/* ── Nav ───────────────────────────────────────────── */}
        <header className="nav">
          <div className="wrap nav-inner">
            <Link href="/" className="brand" aria-label="Synco home">
              <BrandMark />
              <span className="brand-name">synco</span>
            </Link>
            <nav className="nav-links">
              <Link className="nav-link" href="/#how">How it works</Link>
              <Link className="nav-link" href="/privacy-policy">Privacy</Link>
              <Link className="nav-link" href="/terms-of-service">Terms</Link>
              <ThemeToggle />
              <a className="nav-link nav-cta" href="mailto:admin@sapingos.com">
                Contact
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </nav>
          </div>
        </header>

        {/* ── Page content ──────────────────────────────────── */}
        <main>{children}</main>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="foot">
          <div className="wrap">
            <div className="foot-grid">
              <div className="foot-brand">
                <Link href="/" className="brand">
                  <BrandMark />
                  <span className="brand-name">synco</span>
                </Link>
                <p>
                  A private Google Drive sync utility for one operator. Hosted at sapingos.com.
                  Not a commercial product.
                </p>
              </div>
              <div className="foot-col">
                <h4>Application</h4>
                <ul>
                  <li><a href="/#how">How it works</a></li>
                  <li><a href="/#legal">Policies</a></li>
                  <li><a href="mailto:admin@sapingos.com">Contact owner</a></li>
                </ul>
              </div>
              <div className="foot-col">
                <h4>Legal</h4>
                <ul>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service">Terms of Service</Link></li>
                  <li>
                    <a
                      href="https://developers.google.com/terms/api-services-user-data-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google API Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="foot-bar">
              <span>© {year} Synco / sapingos.com · All rights reserved.</span>
              <span className="status">
                <span className="dot" />
                <span className="mono">operational</span>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
