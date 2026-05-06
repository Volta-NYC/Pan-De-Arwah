import Image from "next/image"
import Link from "next/link"
import { glutenFreeProducts } from "@/lib/products"

export default function GlutenFreeSpotlight() {
  const cover = glutenFreeProducts.find((p) => p.image)?.image

  return (
    <section id="gluten-free" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[5/6] rounded-xl overflow-hidden bg-surface border border-border">
          {cover && (
            <Image
              src={cover}
              alt="Gluten free sourdough"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-bg">
            <div className="text-xs uppercase tracking-[0.2em] mb-2 opacity-90">
              Collection
            </div>
            <div className="font-display text-3xl">Gluten Free Tribe</div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
            For everyone at the table
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Sourdough,
            <br />
            <span className="italic text-primary">fully gluten free.</span>
          </h2>
          <p className="mt-5 text-lg text-muted">
            We treat our gluten-free line with the same patience as our wheat
            loaves — slow ferment, intentional crumb, real flavor. No
            afterthoughts.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {glutenFreeProducts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="flex items-baseline justify-between gap-3 rounded-xl bg-elevated border border-border px-4 py-3 hover:border-primary/50 transition-colors"
                >
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-muted">{p.shortName}</div>
                  </div>
                  <div className="text-sm font-medium">${p.price.toFixed(0)}</div>
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="#menu"
            className="inline-block mt-8 rounded-full border border-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-bg transition-colors"
          >
            See the full menu →
          </a>
        </div>
      </div>
    </section>
  )
}
