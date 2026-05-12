import Link from "next/link";
import TocScrollspy from "../components/TocScrollspy";

export const metadata = {
  title: "Privacy Policy — Synco",
  description:
    "Privacy policy for Synco, a private Google Drive sync utility operated at sapingos.com.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <TocScrollspy />

      {/* ── Page header ─────────────────────────────────── */}
      <section className="page-head">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Synco</Link>
            <span className="sep">/</span>
            <span>Legal</span>
            <span className="sep">/</span>
            <span style={{ color: "var(--ink-2)" }}>Privacy Policy</span>
          </div>
          <h1 className="page-title">Privacy Policy</h1>
          <div className="page-meta">
            <span className="meta-chip">
              <span className="blob" /> Effective <span className="mono">May 11, 2025</span>
            </span>
            <span className="meta-chip">
              <span className="mono">Document · 01 of 02</span>
            </span>
            <span className="meta-chip">
              <span className="mono">sapingos.com</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── Document ────────────────────────────────────── */}
      <div className="wrap">
        <div className="doc-wrap">
          <aside className="toc">
            <div className="toc-label">On this page</div>
            <ol>
              <li><a href="#s1">Overview</a></li>
              <li><a href="#s2">Information we access</a></li>
              <li><a href="#s3">How we use the information</a></li>
              <li><a href="#s4">Data storage &amp; retention</a></li>
              <li><a href="#s5">Data sharing</a></li>
              <li><a href="#s6">Google API policy</a></li>
              <li><a href="#s7">Security</a></li>
              <li><a href="#s8">Children&apos;s privacy</a></li>
              <li><a href="#s9">Changes</a></li>
              <li><a href="#s10">Contact</a></li>
            </ol>
          </aside>

          <article className="doc">
            <section id="s1">
              <h2><span className="num">01</span> Overview</h2>
              <p>
                This Privacy Policy describes how the personal application operated at{" "}
                <strong>https://sapingos.com</strong> (&quot;the Application&quot;, &quot;we&quot;,
                &quot;us&quot;) collects, uses, and protects information when it interacts with the
                Google Drive API on behalf of its sole owner and operator. The Application is a
                private tool; it is not available to the general public and has no end-users other
                than its owner.
              </p>
            </section>

            <section id="s2">
              <h2><span className="num">02</span> Information we access</h2>
              <p>
                The Application requests access to the owner&apos;s Google Drive account solely for
                the purpose of file synchronization. Specifically, it may access:
              </p>
              <ul>
                <li>File and folder names, sizes, timestamps, and MIME types stored in Google Drive.</li>
                <li>File contents, for the purpose of uploading to or downloading from Google Drive.</li>
                <li>Drive storage quota information to determine available space before uploads.</li>
              </ul>
              <div className="callout">
                <div className="ico">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v3M8 12v3M1 8h3M12 8h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>
                <p>No other Google account data (email, contacts, calendar, etc.) is requested or accessed.</p>
              </div>
            </section>

            <section id="s3">
              <h2><span className="num">03</span> How we use the information</h2>
              <p>All data accessed through the Google Drive API is used exclusively to:</p>
              <ul>
                <li>Synchronize files between local storage and the owner&apos;s Google Drive.</li>
                <li>Determine which files have changed and need to be updated (delta sync).</li>
                <li>Create, rename, move, or delete files as directed by the owner.</li>
              </ul>
              <p>
                Data accessed through the API is never used for advertising, profiling, training
                machine-learning models, or any purpose other than the file-sync operations
                described above.
              </p>
            </section>

            <section id="s4">
              <h2><span className="num">04</span> Data storage &amp; retention</h2>
              <p>
                The Application does not maintain a database or persistent server-side storage of
                Google Drive file contents. Files are transferred directly between the owner&apos;s
                local device and Google Drive. OAuth 2.0 tokens required to authenticate with the
                Google API are stored locally on the owner&apos;s device and are never transmitted
                to any third-party server.
              </p>
            </section>

            <section id="s5">
              <h2><span className="num">05</span> Data sharing</h2>
              <p>
                We do not sell, trade, rent, or otherwise share any data obtained through the
                Google Drive API with any third party. The Application operates as a direct
                integration between the owner&apos;s local environment and Google&apos;s servers.
              </p>
            </section>

            <section id="s6">
              <h2><span className="num">06</span> Google API services user data policy</h2>
              <p>
                The Application&apos;s use of information received from Google APIs adheres to the{" "}
                <a
                  className="link"
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </section>

            <section id="s7">
              <h2><span className="num">07</span> Security</h2>
              <p>
                Access to the Google Drive API is secured via OAuth 2.0. Credentials and tokens
                are stored only on the owner&apos;s local device with appropriate filesystem
                permissions. The Application communicates with Google&apos;s APIs exclusively over
                HTTPS.
              </p>
            </section>

            <section id="s8">
              <h2><span className="num">08</span> Children&apos;s privacy</h2>
              <p>
                The Application is intended for personal use by its adult owner only and does not
                collect information from children.
              </p>
            </section>

            <section id="s9">
              <h2><span className="num">09</span> Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The effective date at the top
                of this page will reflect the date of the most recent revision.
              </p>
            </section>

            <section id="s10">
              <h2><span className="num">10</span> Contact</h2>
              <p>Questions about this Privacy Policy can be directed to:</p>
              <div className="contact-card">
                <div className="ico">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="m3 5 7 6 7-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="label">Owner contact</div>
                  <a href="mailto:admin@sapingos.com">admin@sapingos.com</a>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
