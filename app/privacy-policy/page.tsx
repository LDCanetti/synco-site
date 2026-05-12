export const metadata = {
  title: "Privacy Policy – Sapingos",
  description: "Privacy policy for the Sapingos personal Google Drive sync application.",
};

const EFFECTIVE_DATE = "May 11, 2025";
const CONTACT_EMAIL = "admin@sapingos.com";
const DOMAIN = "https://sapingos.com";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">
        Effective date: {EFFECTIVE_DATE}
      </p>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-10 text-zinc-700 dark:text-zinc-300 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            1. Overview
          </h2>
          <p>
            This Privacy Policy describes how the personal application operated at{" "}
            <strong>{DOMAIN}</strong> (&quot;the Application&quot;, &quot;we&quot;, &quot;us&quot;)
            collects, uses, and protects information when it interacts with the Google Drive API on
            behalf of its sole owner and operator. The Application is a private tool; it is not
            available to the general public and has no end-users other than its owner.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            2. Information We Access
          </h2>
          <p>
            The Application requests access to the owner&apos;s Google Drive account solely for the
            purpose of file synchronization. Specifically, it may access:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>File and folder names, sizes, timestamps, and MIME types stored in Google Drive.</li>
            <li>File contents, for the purpose of uploading to or downloading from Google Drive.</li>
            <li>
              Drive storage quota information to determine available space before uploads.
            </li>
          </ul>
          <p className="mt-3">
            No other Google account data (email, contacts, calendar, etc.) is requested or
            accessed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            3. How We Use the Information
          </h2>
          <p>
            All data accessed through the Google Drive API is used exclusively to:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Synchronize files between local storage and the owner&apos;s Google Drive.</li>
            <li>
              Determine which files have changed and need to be updated (delta sync).
            </li>
            <li>Create, rename, move, or delete files as directed by the owner.</li>
          </ul>
          <p className="mt-3">
            Data accessed through the API is never used for advertising, profiling, training
            machine-learning models, or any purpose other than the file-sync operations described
            above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            4. Data Storage and Retention
          </h2>
          <p>
            The Application does not maintain a database or persistent server-side storage of
            Google Drive file contents. Files are transferred directly between the owner&apos;s local
            device and Google Drive. OAuth 2.0 tokens required to authenticate with the Google API
            are stored locally on the owner&apos;s device and are never transmitted to any third-party
            server.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            5. Data Sharing
          </h2>
          <p>
            We do not sell, trade, rent, or otherwise share any data obtained through the Google
            Drive API with any third party. The Application operates as a direct integration between
            the owner&apos;s local environment and Google&apos;s servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            6. Google API Services User Data Policy
          </h2>
          <p>
            The Application&apos;s use of information received from Google APIs adheres to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            7. Security
          </h2>
          <p>
            Access to the Google Drive API is secured via OAuth 2.0. Credentials and tokens are
            stored only on the owner&apos;s local device with appropriate filesystem permissions.
            The Application communicates with Google&apos;s APIs exclusively over HTTPS.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            8. Children&apos;s Privacy
          </h2>
          <p>
            The Application is intended for personal use by its adult owner only and does not
            collect information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top of
            this page will reflect the date of the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            10. Contact
          </h2>
          <p>
            Questions about this Privacy Policy can be directed to:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
