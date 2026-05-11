import Image from "next/image"
import Link from "next/link"
import { heroImage } from "@/lib/products"

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="hero-copy relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted mb-6">
            <span className="w-8 h-px bg-muted" />
            Brooklyn micro bakery
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Slow bread,
            <br />
            <span className="italic text-primary">small hands,</span>
            <br />
            shipped on Fridays.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-md">
            Pan de Arwah is an artisan sourdough micro bakery in East New York —
            naturally leavened loaves, gluten-free favorites, and small-batch
            sweets baked with intention.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#menu"
              className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-foreground transition-colors"
            >
              Browse the menu
            </Link>
            <a
              href="https://www.hotplate.com/pandearwah"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-elevated px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Pre-order on Hotplate ↗
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <div>
              <div className="text-foreground font-semibold">12</div>
              breads &amp; sweets
            </div>
            <div>
              <div className="text-foreground font-semibold">4</div>
              gluten-free options
            </div>
            <div>
              <div className="text-foreground font-semibold">NY-wide</div>
              shipping
            </div>
          </div>
        </div>

        <div className="hero-media relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-xl overflow-hidden bg-surface border border-border shadow-sm">
            <Image
              src={heroImage}
              alt="Assorted sourdough breads, brownies, and cookies"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-elevated rounded-xl border border-border px-5 py-4 shadow-sm max-w-[16rem]">
            <div className="text-xs uppercase tracking-widest text-muted mb-1">
              This week
            </div>
            <div className="font-display text-lg leading-tight">
              Cinnamon Rolls &amp; Cosmic Brownies are back.
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="hero-glow absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-accent/15 to-transparent pointer-events-none"
      />
    </section>
  )
}
