"use client"

import { useEffect } from "react"

export default function ScrollWaveOverlay() {
  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const updateWaveScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const scrollHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
        )
        const max = scrollHeight - window.innerHeight
        const progress = max > 0 ? window.scrollY / max : 0

        root.style.setProperty("--wave-scroll", String(progress))
        root.style.setProperty("--wave-shift", `${progress * 260}px`)
      })
    }

    updateWaveScroll()
    window.addEventListener("scroll", updateWaveScroll, { passive: true })
    window.addEventListener("resize", updateWaveScroll)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateWaveScroll)
      window.removeEventListener("resize", updateWaveScroll)
    }
  }, [])

  return (
    <div className="scroll-wave-layer" aria-hidden="true">
      <svg
        className="scroll-wave scroll-wave-a"
        viewBox="0 0 1600 260"
        preserveAspectRatio="none"
      >
        <path d="M0,104L80,125.3C160,147,320,189,480,184C640,179,800,125,960,109.3C1120,93,1280,115,1440,130.7L1600,147L1600,0L1440,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </svg>
      <svg
        className="scroll-wave scroll-wave-b"
        viewBox="0 0 1600 260"
        preserveAspectRatio="none"
      >
        <path d="M0,174L80,168.7C160,163,320,152,480,130.7C640,109,800,77,960,82.7C1120,88,1280,131,1440,157.3L1600,184L1600,0L1440,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </svg>
      <svg
        className="scroll-wave scroll-wave-c"
        viewBox="0 0 1600 280"
        preserveAspectRatio="none"
      >
        <path d="M0,235L100,207.3C200,179,400,125,600,128C800,131,1000,192,1200,202.7C1400,213,1600,171,1700,149.3L1800,128L1800,0L1700,0C1600,0,1400,0,1200,0C1000,0,800,0,600,0C400,0,200,0,100,0L0,0Z" />
      </svg>
    </div>
  )
}
