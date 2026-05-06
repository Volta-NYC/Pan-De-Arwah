"use client"

import { useState } from "react"
import { ARWAH_CLUB, applyClubDiscount, type Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

type PurchaseMode = "one-time" | "subscription"

export default function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [variantId, setVariantId] = useState<string | undefined>(
    product.variants?.[0]?.id,
  )
  const [qty, setQty] = useState(1)
  const [mode, setMode] = useState<PurchaseMode>("one-time")
  const [flash, setFlash] = useState<string | null>(null)

  const activeVariant = product.variants?.find((v) => v.id === variantId)
  const basePrice = activeVariant?.price ?? product.price
  const subPrice = applyClubDiscount(basePrice)
  const unitPrice = mode === "subscription" ? subPrice : basePrice
  const total = unitPrice * qty
  const discountPctLabel = `${Math.round(ARWAH_CLUB.discountPct * 100)}% off`

  function handleAdd() {
    addItem(product, activeVariant ?? null, qty, {
      subscription: mode === "subscription",
    })
    setQty(1)
  }

  function placeholderBuy() {
    setFlash("Buy with Shop will connect here once the storefront is integrated.")
    setTimeout(() => setFlash(null), 3500)
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-baseline gap-3">
          <div className="font-display text-3xl">${unitPrice.toFixed(2)}</div>
          {mode === "subscription" && (
            <div className="text-base text-muted line-through">
              ${basePrice.toFixed(2)}
            </div>
          )}
        </div>
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

      <fieldset className="rounded-xl border border-border bg-elevated overflow-hidden">
        <legend className="sr-only">Purchase frequency</legend>

        <PurchaseOption
          active={mode === "one-time"}
          onSelect={() => setMode("one-time")}
          title="One-time purchase"
          price={`$${basePrice.toFixed(2)}`}
        />

        <div className="border-t border-border" />

        <PurchaseOption
          active={mode === "subscription"}
          onSelect={() => setMode("subscription")}
          title={ARWAH_CLUB.name}
          subtitle={`${ARWAH_CLUB.frequencyLabel}, ${discountPctLabel}`}
          price={`$${subPrice.toFixed(2)}`}
          basePrice={`$${basePrice.toFixed(2)}`}
          accent
        />

        {mode === "subscription" && (
          <div className="px-5 pb-4 -mt-1 text-xs text-muted">
            Auto-renews weekly · skip or cancel anytime from your account.
          </div>
        )}
      </fieldset>

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
          <span aria-hidden>🛍</span>
          {mode === "subscription" ? "Subscribe & add" : "Add to cart"}
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

function PurchaseOption({
  active,
  onSelect,
  title,
  subtitle,
  price,
  basePrice,
  accent,
}: {
  active: boolean
  onSelect: () => void
  title: string
  subtitle?: string
  price: string
  basePrice?: string
  accent?: boolean
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onSelect}
      className={`w-full text-left flex items-center gap-4 px-5 py-4 transition-colors ${
        active ? "bg-surface" : "hover:bg-surface/60"
      }`}
    >
      <span
        aria-hidden
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 transition-colors flex items-center justify-center ${
          active ? "border-primary" : "border-border"
        }`}
      >
        {active && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium">{title}</span>
          {accent && (
            <span className="text-[10px] uppercase tracking-widest font-semibold rounded-full bg-accent/30 text-accent-foreground px-2 py-0.5">
              Save
            </span>
          )}
        </div>
        {subtitle && (
          <div className="text-xs text-muted mt-0.5">{subtitle}</div>
        )}
      </div>

      <div className="text-right whitespace-nowrap">
        <div className="text-sm font-medium">{price}</div>
        {basePrice && (
          <div className="text-xs text-muted line-through">{basePrice}</div>
        )}
      </div>
    </button>
  )
}
