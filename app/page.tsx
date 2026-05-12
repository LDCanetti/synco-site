import Link from "next/link";

export const metadata = {
  title: "Synco — Personal Google Drive Sync",
  description:
    "Synco is a private, single-operator utility that uses the Google Drive API to keep a local folder mirrored against one personal Drive account.",
};

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="wrap hero-inner">
          <div className="eyebrow">
            <span className="eyebrow-pill">v2.1</span>
            <span className="eyebrow-dot" />
            <span>Personal&nbsp;use · sapingos.com</span>
          </div>
          <h1 className="hero-title">
            Your files, <em>quietly in sync</em>
            <br />
            with Google Drive.
          </h1>
          <p className="hero-sub">
            Synco is a private, single-operator utility that uses the Google Drive API to keep
            a local folder mirrored against one personal Drive account.{" "}
            <strong>No accounts, no servers, no telemetry</strong> — just a clean delta sync
            running on the owner&apos;s device.
          </p>

          {/* Hero device */}
          <div
            className="hero-device"
            role="img"
            aria-label="Visualization of a local folder syncing with Google Drive"
          >
            <div className="device-bar">
              <span className="device-dot" />
              <span className="device-dot" />
              <span className="device-dot" />
              <span className="mono">synco · ~/Documents ⟷ drive://my-drive</span>
            </div>
            <div className="device-body">
              <div className="sync-row">
                {/* Local */}
                <div className="sync-side">
                  <div className="sync-side-head">
                    <span className="ico">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M2 4a1 1 0 0 1 1-1h3.5l1.5 1.5H13a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4Z" stroke="#0B1220" strokeWidth="1.3" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Local folder
                    <span className="sync-side-status mono">12 files · 248 MB</span>
                  </div>
                  <div className="file-list">
                    <div className="file-row up">
                      <span className="file-ico">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M8 13V3m0 0L4 7m4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="fname">Q3-Notes.md</span>
                      <span className="fsize">14 KB</span>
                    </div>
                    <div className="file-row up">
                      <span className="file-ico">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M8 13V3m0 0L4 7m4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="fname">Photos / vacation-2026 …</span>
                      <span className="fsize">183 MB</span>
                    </div>
                    <div className="file-row">
                      <span className="file-ico">
                        <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /></svg>
                      </span>
                      <span className="fname">Budget.xlsx</span>
                      <span className="fsize">42 KB</span>
                    </div>
                  </div>
                </div>

                {/* Sync center */}
                <div className="sync-mid">
                  <div className="sync-arrow-wrap">
                    <div className="sync-arrow">
                      <div className="sync-arrow-row">
                        <div className="line" />
                        <span className="arrow-r" />
                      </div>
                      <div className="sync-arrow-row">
                        <div className="line rev" />
                        <span className="arrow-l" />
                      </div>
                    </div>
                  </div>
                  <div className="sync-state">Delta sync</div>
                </div>

                {/* Drive */}
                <div className="sync-side">
                  <div className="sync-side-head">
                    <span className="ico">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M5.2 3h5.6L14 8.5l-2.8 4.5H4.8L2 8.5 5.2 3Z" stroke="#1E55E0" strokeWidth="1.3" strokeLinejoin="round" />
                        <path d="m2 8.5 2.8 4.5M14 8.5l-2.8 4.5M5.2 3l3.2 5.5M10.8 3l-3.2 5.5" stroke="#1E55E0" strokeWidth="1.3" />
                      </svg>
                    </span>
                    Google Drive
                    <span className="sync-side-status">
                      <span className="pulse">●</span>{" "}
                      <span className="mono">connected</span>
                    </span>
                  </div>
                  <div className="file-list">
                    <div className="file-row dn">
                      <span className="file-ico">
                        <svg viewBox="0 0 16 16" fill="none"><path d="M8 3v10m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="fname">Receipts-Apr.pdf</span>
                      <span className="fsize">2.1 MB</span>
                    </div>
                    <div className="file-row">
                      <span className="file-ico">
                        <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /></svg>
                      </span>
                      <span className="fname">Backups / drive-mirror</span>
                      <span className="fsize">62 MB</span>
                    </div>
                    <div className="file-row">
                      <span className="file-ico">
                        <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /></svg>
                      </span>
                      <span className="fname">Reading-list.txt</span>
                      <span className="fsize">3 KB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What it does ──────────────────────────────────── */}
      <section className="block" id="how">
        <div className="wrap">
          <div className="section-head">
            <div className="section-kicker">Capabilities</div>
            <h2 className="section-title">What this application does</h2>
            <p className="section-lead">
              Synco&apos;s surface area is intentionally small. It performs four file-management
              tasks against a single Google Drive account — nothing more.
            </p>
          </div>

          <div className="cap-grid">
            {/* 01 */}
            <div className="cap">
              <div className="cap-num">01</div>
              <div className="cap-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h14M3 12h14M3 18h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="20" cy="6" r="1.5" fill="currentColor" />
                  <circle cx="20" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="cap-title">Read &amp; list files</h3>
              <p className="cap-desc">
                Walks the owner&apos;s Drive to compare file and folder names against the local mirror,
                so it can decide what to sync.
              </p>
              <span className="cap-tag mono">drive.files.list</span>
            </div>

            {/* 02 */}
            <div className="cap">
              <div className="cap-num">02</div>
              <div className="cap-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4v10m0 0 4-4m-4 4-4-4M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="cap-title">Upload &amp; download</h3>
              <p className="cap-desc">
                Streams file content in both directions to keep the local folder and the Drive copy
                bit-identical.
              </p>
              <span className="cap-tag mono">drive.files.create / get</span>
            </div>

            {/* 03 */}
            <div className="cap">
              <div className="cap-num">03</div>
              <div className="cap-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 9h16M8 4v16" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h3 className="cap-title">Manage metadata</h3>
              <p className="cap-desc">
                Reads and writes names, timestamps, and MIME types so the sync stays accurate even
                across renames and moves.
              </p>
              <span className="cap-tag mono">drive.files.update</span>
            </div>

            {/* 04 */}
            <div className="cap">
              <div className="cap-num">04</div>
              <div className="cap-ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-8-4.5-8-11V5l8-2 8 2v5c0 6.5-8 11-8 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="cap-title">Personal use only</h3>
              <p className="cap-desc">
                Operated solely by its owner against their own Drive. No third parties, no shared
                tenants, no public surface.
              </p>
              <span className="cap-tag mono">scope: single-user</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ───────────────────────────────────── */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="trust">
            <div>
              <div className="trust-kicker">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 14s-5-2.8-5-6.9V3l5-1.3L13 3v4.1c0 4.1-5 6.9-5 6.9Z" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                Limited-use commitment
              </div>
              <h3>
                Adheres to Google&apos;s API Services User Data Policy, including Limited Use.
              </h3>
              <p>
                Data accessed through the Google Drive API is used only for file sync. It is never
                shared, sold, used for advertising, or used to train machine-learning models.
              </p>
            </div>
            <div className="trust-stats">
              <div className="trust-stat">
                <div className="v">0</div>
                <div className="k">Servers storing your files</div>
              </div>
              <div className="trust-stat">
                <div className="v">0</div>
                <div className="k">Third parties with access</div>
              </div>
              <div className="trust-stat">
                <div className="v">OAuth&nbsp;2.0</div>
                <div className="k">Auth, local tokens only</div>
              </div>
              <div className="trust-stat">
                <div className="v">HTTPS</div>
                <div className="k">All transport encrypted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Legal ─────────────────────────────────────────── */}
      <section className="block" id="legal" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-kicker">Documentation</div>
            <h2 className="section-title">Policies &amp; terms</h2>
            <p className="section-lead">
              Required disclosures for the Google Drive API integration. Both documents describe a
              single-operator, personal-use application.
            </p>
          </div>

          <div className="legal-grid">
            <Link href="/privacy-policy" className="legal-card" id="privacy">
              <span className="kicker">Document · 01</span>
              <h3>
                Privacy Policy
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </h3>
              <p>How information accessed through the Google Drive API is handled.</p>
              <ul>
                <li>Only file names, contents, and metadata are accessed</li>
                <li>No database; transfers go device ⟷ Drive directly</li>
                <li>OAuth tokens stored locally, never on a third-party server</li>
              </ul>
            </Link>
            <Link href="/terms-of-service" className="legal-card" id="terms">
              <span className="kicker">Document · 02</span>
              <h3>
                Terms of Service
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </h3>
              <p>The conditions under which this private application is operated.</p>
              <ul>
                <li>Personal, non-commercial use by the owner only</li>
                <li>Provided as-is, without warranty</li>
                <li>Subject to Google&apos;s Drive Terms &amp; Privacy Policy</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
