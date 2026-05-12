'use client'

import { useEffect } from 'react'

export default function TocScrollspy() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('.toc a')
    const sections = Array.from(links).map(a => {
      const href = a.getAttribute('href')
      return href ? document.querySelector(href) : null
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          links.forEach(l => l.classList.remove('is-active'))
          const i = sections.indexOf(e.target as Element)
          if (i >= 0) links[i].classList.add('is-active')
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach(s => s && io.observe(s))
    return () => io.disconnect()
  }, [])

  return null
}
