import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  products,
  getProductBySlug,
  type Product,
} from "@/lib/products"
import ProductPurchasePanel from "@/lib/components/product-purchase-panel"
import ProductCard from "@/lib/components/product-card"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Not found — Pan de Arwah" }
  return {
    title: `${product.name} — Pan de Arwah`,
    description: product.blurb,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4)
  const isGF = product.categories.includes("Gluten Free")
  const heroImg = product.gallery?.[0] ?? product.image

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 pt-8 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/#menu" className="hover:text-foreground">
          Menu
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid md:grid-cols-2 gap-10 lg:gap-16">
        <div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden bg-surface border border-border">
          {heroImg ? (
            <Image
              src={heroImg}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
              <div>
                <div className="font-display text-5xl text-foreground/70 leading-tight">
                  {product.name}
                </div>
                <div className="mt-3 text-xs uppercase tracking-widest text-muted">
                  Photo coming soon
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="md:pt-4">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {isGF && (
              <span className="rounded-full bg-accent/30 text-accent-foreground text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                Gluten Free
              </span>
            )}
            {product.categories
              .filter((c) => c !== "Gluten Free")
              .map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border text-[10px] uppercase tracking-widest text-muted px-2.5 py-1"
                >
                  {c}
                </span>
              ))}
          </div>

          <h1 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            {product.fullName}
          </h1>
          <p className="mt-3 text-muted">{product.shortName}</p>

          <div className="mt-8">
            <ProductPurchasePanel product={product} />
          </div>

          <div className="mt-10 border-t border-border pt-8 space-y-6">
            {product.tagline && (
              <div className="font-display text-xl text-foreground/90">
                {product.tagline}
              </div>
            )}
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              {product.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {product.ingredients && product.ingredients.length > 0 && (
              <div>
                <div className="text-xs uppercase tracking-widest text-muted mb-2">
                  Ingredients
                </div>
                <p className="text-sm text-foreground/85">
                  {product.ingredients.join(", ")}.
                </p>
              </div>
            )}

            <div className="rounded-xl bg-surface border border-border px-5 py-4 text-sm text-muted leading-relaxed">
              <strong className="text-foreground font-medium">Shipping:</strong>{" "}
              We ship across New York State on Fridays. Free shipping on orders
              over $50. Local Brooklyn pickups Saturdays 3 – 8 PM.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface/60 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-3xl md:text-4xl">You might also love</h2>
            <Link href="/#menu" className="text-sm text-primary hover:underline">
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((p: Product) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
