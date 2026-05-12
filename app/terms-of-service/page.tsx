export const metadata = {
  title: "Terms of Service – Sapingos",
  description: "Terms of service for the Sapingos personal Google Drive sync application.",
};

const EFFECTIVE_DATE = "May 11, 2025";
const CONTACT_EMAIL = "admin@sapingos.com";
const DOMAIN = "https://sapingos.com";

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-10">
        Effective date: {EFFECTIVE_DATE}
      </p>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-10 text-zinc-700 dark:text-zinc-300 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By using the application operated at{" "}
            <strong>{DOMAIN}</strong> (&quot;the Application&quot;), you agree to be bound by
            these Terms of Service. Because the Application is a private tool used exclusively by
            its owner, these terms apply solely to that owner.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            2. Description of the Application
          </h2>
          <p>
            The Application is a personal-use utility called Synco that uses the Google Drive API
            to synchronize files between a local device and a private Google Drive account. It is
            not a commercial product or service offered to the public.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            3. Permitted Use
          </h2>
          <p>
            The Application is intended solely for the personal, non-commercial file management
            needs of its owner. Use of the Application to access any Google account other than
            the owner&apos;s own authorized account is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            4. Third-Party Services
          </h2>
          <p>
            The Application integrates with Google Drive via the Google Drive API. Your use of
            Google Drive is subject to{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              Google&apos;s Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
            >
              Google&apos;s Privacy Policy
            </a>
            . We are not responsible for any changes to Google&apos;s services, APIs, or policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            5. Disclaimer of Warranties
          </h2>
          <p>
            The Application is provided &quot;as is&quot; and &quot;as available&quot; without
            warranty of any kind. The owner acknowledges that the Application may have bugs,
            errors, or interruptions, and assumes full responsibility for any data loss or
            corruption that may result from its use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, the Application and its operator
            shall not be liable for any indirect, incidental, special, consequential, or punitive
            damages arising out of or related to the use of the Application, even if advised of
            the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            7. Intellectual Property
          </h2>
          <p>
            The Application (Synco) is a personal file synchronization tool. All file content
            accessed through Google Drive remains the intellectual property of the owner and is
            not claimed by this Application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            8. Changes to These Terms
          </h2>
          <p>
            These Terms of Service may be updated at any time. The effective date at the top of
            this page reflects the date of the most recent revision. Continued use of the
            Application after any changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            9. Governing Law
          </h2>
          <p>
            These Terms are governed by and construed in accordance with applicable law, without
            regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
            10. Contact
          </h2>
          <p>
            Questions about these Terms can be directed to:{" "}
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
