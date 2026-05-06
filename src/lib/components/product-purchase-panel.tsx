"use client"

import { useState } from "react"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

export default function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [variantId, setVariantId] = useState<string | undefined>(
    product.variants?.[0]?.id,
  )
  const [qty, setQty] = useState(1)
  const [flash, setFlash] = useState<string | null>(null)

  const activeVariant = product.variants?.find((v) => v.id === variantId)
  const unitPrice = activeVariant?.price ?? product.price
  const total = unitPrice * qty

  function handleAdd() {
    addItem(product, activeVariant ?? null, qty)
    setQty(1)
  }

  function placeholderBuy() {
    setFlash("Buy with Shop will connect here once the storefront is integrated.")
    setTimeout(() => setFlash(null), 3500)
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="font-display text-3xl">${unitPrice.toFixed(2)}</div>
        {qty > 1 && (
          <div className="text-sm text-muted mt-1">
            ${total.toFixed(2)} for {qty}
          </div>
        )}
      </div>

      <div className="border-t border-border" />

      {product.variants && product.variants.length > 1 && (
        <div>
          <div className="text-sm font-medium mb-3">
            Size:{" "}
            <span className="text-muted font-normal">
              {activeVariant?.label}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => {
              const active = v.id === variantId
              return (
                <button
                  key={v.id}
                  onClick={() => setVariantId(v.id)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-foreground text-bg border-foreground"
                      : "bg-elevated border-border text-foreground/80 hover:border-primary hover:text-primary"
                  }`}
                >
                  {v.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <div className="inline-flex items-center rounded-full border border-border bg-elevated">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="w-11 h-11 flex items-center justify-center text-lg text-muted hover:text-foreground"
          >
            −
          </button>
          <div className="w-10 text-center font-medium">{qty}</div>
          <button
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="w-11 h-11 flex items-center justify-center text-lg text-muted hover:text-foreground"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAdd}
          className="flex-1 rounded-full bg-foreground text-bg px-6 py-3 text-sm font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2"
        >
          <span aria-hidden>🛍</span> Add to cart
        </button>
      </div>

      <button
        onClick={placeholderBuy}
        className="w-full rounded-full px-6 py-3 text-sm font-semibold text-foreground border-2 border-dashed border-border bg-surface hover:border-primary hover:text-primary transition-colors"
        title="Storefront not connected yet"
      >
        Buy with Shop · placeholder
      </button>

      <p className="text-center text-xs text-muted">
        Checkout placeholder — real storefront integration coming soon.
      </p>

      {flash && (
        <div
          role="status"
          className="rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-foreground/90"
        >
          {flash}
        </div>
      )}
    </div>
  )
}
