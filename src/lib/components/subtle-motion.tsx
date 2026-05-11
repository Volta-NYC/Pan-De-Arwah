"use client"

import { useEffect } from "react"

export default function SubtleMotion() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (reduceMotion.matches) return

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".site-content main > section:not(.hero-section)",
      ),
    )

    if (!sections.length) return

    root.classList.add("reveal-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add("is-scroll-visible")
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.12,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      root.classList.remove("reveal-ready")
      observer.disconnect()
    }
  }, [])

  return null
}
