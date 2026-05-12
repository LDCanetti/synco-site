import Link from "next/link";
import TocScrollspy from "../components/TocScrollspy";

export const metadata = {
  title: "Terms of Service — Synco",
  description:
    "Terms of service for Synco, a private Google Drive sync utility operated at sapingos.com.",
};

export default function TermsOfService() {
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
            <span style={{ color: "var(--ink-2)" }}>Terms of Service</span>
          </div>
          <h1 className="page-title">Terms of Service</h1>
          <div className="page-meta">
            <span className="meta-chip">
              <span className="blob" /> Effective <span className="mono">May 11, 2025</span>
            </span>
            <span className="meta-chip">
              <span className="mono">Document · 02 of 02</span>
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
              <li><a href="#s1">Acceptance of terms</a></li>
              <li><a href="#s2">Description</a></li>
              <li><a href="#s3">Permitted use</a></li>
              <li><a href="#s4">Third-party services</a></li>
              <li><a href="#s5">Disclaimer of warranties</a></li>
              <li><a href="#s6">Limitation of liability</a></li>
              <li><a href="#s7">Intellectual property</a></li>
              <li><a href="#s8">Changes</a></li>
              <li><a href="#s9">Governing law</a></li>
              <li><a href="#s10">Contact</a></li>
            </ol>
          </aside>

          <article className="doc">
            <section id="s1">
              <h2><span className="num">01</span> Acceptance of terms</h2>
              <p>
                By using the application operated at{" "}
                <strong>https://sapingos.com</strong> (&quot;the Application&quot;), you agree to be
                bound by these Terms of Service. Because the Application is a private tool used
                exclusively by its owner, these terms apply solely to that owner.
              </p>
            </section>

            <section id="s2">
              <h2><span className="num">02</span> Description of the Application</h2>
              <p>
                The Application is a personal-use utility called{" "}
                <strong>Synco</strong> that uses the Google Drive API to synchronize files between a
                local device and a private Google Drive account. It is not a commercial product or
                service offered to the public.
              </p>
            </section>

            <section id="s3">
              <h2><span className="num">03</span> Permitted use</h2>
              <p>
                The Application is intended solely for the personal, non-commercial file management
                needs of its owner. Use of the Application to access any Google account other than
                the owner&apos;s own authorized account is strictly prohibited.
              </p>
            </section>

            <section id="s4">
              <h2><span className="num">04</span> Third-party services</h2>
              <p>
                The Application integrates with Google Drive via the Google Drive API. Your use of
                Google Drive is subject to{" "}
                <a
                  className="link"
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="link"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Privacy Policy
                </a>
                . We are not responsible for any changes to Google&apos;s services, APIs, or policies.
              </p>
            </section>

            <section id="s5">
              <h2><span className="num">05</span> Disclaimer of warranties</h2>
              <p>
                The Application is provided &quot;as is&quot; and &quot;as available&quot; without
                warranty of any kind. The owner acknowledges that the Application may have bugs,
                errors, or interruptions, and assumes full responsibility for any data loss or
                corruption that may result from its use.
              </p>
            </section>

            <section id="s6">
              <h2><span className="num">06</span> Limitation of liability</h2>
              <p>
                To the fullest extent permitted by applicable law, the Application and its operator
                shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages arising out of or related to the use of the Application, even if advised of
                the possibility of such damages.
              </p>
            </section>

            <section id="s7">
              <h2><span className="num">07</span> Intellectual property</h2>
              <p>
                The Application (Synco) is a personal file synchronization tool. All file content
                accessed through Google Drive remains the intellectual property of the owner and is
                not claimed by this Application.
              </p>
            </section>

            <section id="s8">
              <h2><span className="num">08</span> Changes to these terms</h2>
              <p>
                These Terms of Service may be updated at any time. The effective date at the top of
                this page reflects the date of the most recent revision. Continued use of the
                Application after any changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section id="s9">
              <h2><span className="num">09</span> Governing law</h2>
              <p>
                These Terms are governed by and construed in accordance with applicable law, without
                regard to conflict of law principles.
              </p>
            </section>

            <section id="s10">
              <h2><span className="num">10</span> Contact</h2>
              <p>Questions about these Terms can be directed to:</p>
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
