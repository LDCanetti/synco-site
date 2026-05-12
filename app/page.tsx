import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Hero */}
      <section className="mb-16 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-10">
        <Image
          src="/logo.png"
          alt="Synco – Cloud File Sync"
          width={200}
          height={200}
          priority
          className="w-44 h-44 object-contain shrink-0"
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Personal Google Drive Sync
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            This is the home of{" "}
            <strong className="text-zinc-800 dark:text-zinc-200">Synco</strong>, a personal-use
            application hosted at{" "}
            <strong className="text-zinc-800 dark:text-zinc-200">sapingos.com</strong>. It uses the
            Google Drive API to synchronize and manage files in a private Google Drive account.
            No data is collected, shared, or sold.
          </p>
        </div>
      </section>

      {/* What it does */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
          What this application does
        </h2>
        <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
          {[
            {
              title: "Read & list files",
              desc: "Lists file and folder names in the owner's Google Drive to determine what needs to be synced.",
            },
            {
              title: "Upload & download files",
              desc: "Transfers files between local storage and Google Drive for backup and synchronization.",
            },
            {
              title: "Manage metadata",
              desc: "Reads and writes file metadata (names, timestamps, MIME types) required for accurate sync.",
            },
            {
              title: "Personal use only",
              desc: "The application is operated solely by its owner for private file management. No third parties have access.",
            },
          ].map(({ title, desc }) => (
            <li key={title} className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
              <span>
                <strong className="text-zinc-800 dark:text-zinc-200">{title}:</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Legal links */}
      <section>
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
          Legal
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/privacy-policy"
            className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Privacy Policy →
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              How we handle the data accessed through the Google Drive API.
            </p>
          </Link>
          <Link
            href="/terms-of-service"
            className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Terms of Service →
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              The conditions under which this application is used.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
