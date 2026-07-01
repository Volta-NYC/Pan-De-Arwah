import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl mb-2">Pan De Arwah</div>
          <div className="mb-3 text-sm font-medium text-primary">
            The proof is in the crumb.
          </div>
          <p className="text-sm text-muted max-w-sm">
            Artisanal sourdough microbakery in East New York, Brooklyn. Small batch,
            slow ferment, shipped across New York State on Fridays.
          </p>
          <form className="mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full bg-elevated border border-border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="rounded-full bg-primary text-primary-foreground text-sm px-4 py-2 hover:bg-foreground transition-colors"
            >
              Join
            </button>
          </form>
          <p className="mt-2 text-xs text-muted">
            Get exclusive deals and early access to new products.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted mb-3">Visit</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#menu" className="hover:text-primary">Menu</Link>
            </li>
            <li>
              <Link href="/#gluten-free" className="hover:text-primary">Gluten Free</Link>
            </li>
            <li>
              <Link href="/#wholesale" className="hover:text-primary">Wholesale</Link>
            </li>
            <li>
              <Link href="/pages/contact" className="hover:text-primary">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted mb-3">Reach us</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:pandearwah@gmail.com" className="hover:text-primary">
                pandearwah@gmail.com
              </a>
            </li>
            <li>East New York, Brooklyn, NY</li>
            <li>
              <a
                href="https://www.hotplate.com/pandearwah"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Pre-order on Hotplate ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row gap-2 sm:justify-between text-xs text-muted">
          <div>© {new Date().getFullYear()} Pan De Arwah. All rights reserved.</div>
          <Link
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Website by @VoltaNYC
          </Link>
        </div>
      </div>
    </footer>
  )
}
