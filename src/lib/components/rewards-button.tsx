"use client"

import { useState } from "react"

export default function RewardsButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-border bg-elevated shadow-lg p-5 text-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-display text-xl leading-tight">
                Arwah Rewards
              </div>
              <div className="text-xs uppercase tracking-widest text-accent-foreground bg-accent/30 inline-block rounded-full px-2 py-0.5 mt-1">
                Coming soon
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close rewards panel"
              className="text-muted hover:text-foreground text-lg leading-none"
            >
              ×
            </button>
          </div>
          <p className="mt-3 text-muted leading-relaxed">
            Earn points on every order, unlock free pastries, and get early
            access to limited drops. The full rewards program is being built —
            sign up below and we&rsquo;ll let you know when it&rsquo;s live.
          </p>
          <a
            href="mailto:pandearwah@gmail.com?subject=Notify%20me%20about%20Arwah%20Rewards"
            className="mt-4 block w-full text-center rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-foreground transition-colors"
          >
            Notify me
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-accent text-accent-foreground pl-4 pr-5 py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm font-semibold"
      >
        <span aria-hidden>♡</span> Rewards
      </button>
    </div>
  )
}
