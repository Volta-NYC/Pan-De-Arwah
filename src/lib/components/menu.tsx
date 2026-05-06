"use client"

import { useState } from "react"
import { products, type ProductCategory } from "@/lib/products"
import ProductCard from "./product-card"

const filters: ("All" | ProductCategory)[] = ["All", "Bread", "Gluten Free", "Sweet"]

export default function Menu() {
  const [active, setActive] = useState<(typeof filters)[number]>("All")

  const visible =
    active === "All"
      ? products
      : products.filter((p) => p.categories.includes(active))

  return (
    <section id="menu" className="py-20 md:py-28 bg-surface/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
              The menu
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              This week&rsquo;s bake.
            </h2>
            <p className="mt-3 text-muted max-w-xl">
              Twelve breads and sweets, rotating with the season. Tap a card to
              order through our shop.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === f
                    ? "bg-foreground text-bg border-foreground"
                    : "bg-elevated border-border text-foreground/80 hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
