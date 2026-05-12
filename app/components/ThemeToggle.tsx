'use client'

export default function ThemeToggle() {
  function handleToggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'light'
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('synco-theme', next) } catch (_) {}
  }

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {/* Moon — visible in light mode */}
      <svg className="ico-moon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
      {/* Sun — visible in dark mode */}
      <svg className="ico-sun" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M3.2 12.8l1.4-1.4M11.4 4.6l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}
