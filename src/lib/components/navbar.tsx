"use client"

import Link from "next/link"
import { useState } from "react"
import CartIcon from "./cart-icon"

const links = [
  { href: "/#menu", label: "Menu" },
  { href: "/#gluten-free", label: "Gluten Free" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#wholesale", label: "Wholesale" },
  { href: "/pages/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-bg/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Pan De Arwah</span>
          <span className="hidden sm:inline text-xs text-muted">
            The proof is in the crumb
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.hotplate.com/pandearwah"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-foreground transition-colors"
          >
            Order
          </a>
          <CartIcon />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <CartIcon />
          <button
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-surface"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-5 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-5 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-5 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://www.hotplate.com/pandearwah"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-center"
            >
              Order
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
