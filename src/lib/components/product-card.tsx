import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

export default function ProductCard({ product }: { product: Product }) {
  const isGF = product.categories.includes("Gluten Free")

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-xl bg-elevated border border-border overflow-hidden hover:border-primary/50 hover:shadow-md transition-all"
    >
      <div className="relative aspect-square bg-surface">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <div className="font-display text-3xl text-foreground/70 leading-tight">
                {product.name}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted">
                Coming soon
              </div>
            </div>
          </div>
        )}
        {isGF && (
          <span className="absolute top-3 left-3 rounded-full bg-accent/90 text-accent-foreground text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
            Gluten Free
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-tight">{product.name}</h3>
          <div className="text-foreground font-medium">
            ${product.price.toFixed(0)}
          </div>
        </div>
        <div className="text-xs uppercase tracking-wider text-muted">
          {product.shortName}
        </div>
        <p className="text-sm text-foreground/75 mt-1 flex-1">{product.blurb}</p>
        <div className="mt-3 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View product →
        </div>
      </div>
    </Link>
  )
}
