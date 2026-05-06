"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useCart, nextShipDate } from "@/lib/cart-context"

const SHIPPING_THRESHOLD = 50

function formatShipDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
}

export default function CartDrawer() {
  const { isOpen, closeCart, resolved, subtotal, count, setQty, removeItem } =
    useCart()

  const [shipDate, setShipDate] = useState<string>("")
  const [discount, setDiscount] = useState("")
  const [discountFlash, setDiscountFlash] = useState<string | null>(null)

  useEffect(() => {
    setShipDate(formatShipDate(nextShipDate()))
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, closeCart])

  const freeShipRemaining = Math.max(0, SHIPPING_THRESHOLD - subtotal)
  const freeShipProgress = Math.min(100, (subtotal / SHIPPING_THRESHOLD) * 100)
  const qualifiesForFreeShipping = subtotal >= SHIPPING_THRESHOLD
  const empty = resolved.length === 0

  const hasSubscription = resolved.some((l) => l.subscription)
  const clubSavings = resolved.reduce(
    (sum, l) =>
      l.subscription ? sum + (l.basePrice - l.unitPrice) * l.qty : sum,
    0,
  )

  function applyDiscount(e: React.FormEvent) {
    e.preventDefault()
    if (!discount.trim()) return
    setDiscountFlash(
      `Code "${discount.trim()}" saved — discounts apply at checkout (coming soon).`,
    )
    setDiscount("")
    setTimeout(() => setDiscountFlash(null), 4000)
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[440px] bg-bg shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-baseline gap-3">
            <h2 className="font-display text-2xl">Your basket</h2>
            <span className="text-sm text-muted">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="w-9 h-9 rounded-full hover:bg-surface flex items-center justify-center text-xl text-muted hover:text-foreground"
          >
            ×
          </button>
        </header>

        {empty ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center mb-5 text-3xl">
              🥖
            </div>
            <div className="font-display text-2xl mb-2">Your basket is empty</div>
            <p className="text-muted max-w-xs">
              Loaves, sweets, and gluten-free favorites — pick something to start.
            </p>
            <button
              onClick={closeCart}
              className="mt-6 rounded-full bg-foreground text-bg px-6 py-3 text-sm font-medium hover:bg-primary transition-colors"
            >
              Browse the menu
            </button>
          </div>
        ) : (
          <>
            <div className="px-6 pt-5">
              {qualifiesForFreeShipping ? (
                <div className="rounded-xl bg-accent/30 text-accent-foreground px-4 py-3 text-sm">
                  ✨ You&rsquo;ve unlocked free shipping.
                </div>
              ) : (
                <div className="rounded-xl bg-surface px-4 py-3 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <span className="font-medium">
                        ${freeShipRemaining.toFixed(2)}
                      </span>{" "}
                      <span className="text-muted">away from free shipping</span>
                    </div>
                    <span className="text-xs text-muted">
                      ${SHIPPING_THRESHOLD}+
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${freeShipProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <ul className="flex-1 overflow-y-auto px-6 py-5 divide-y divide-border">
              {resolved.map((line) => (
                <li key={line.key} className="py-5 first:pt-0 flex gap-4">
                  <Link
                    href={`/products/${line.product.slug}`}
                    onClick={closeCart}
                    className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-surface border border-border"
                  >
                    {line.product.image ? (
                      <Image
                        src={line.product.image}
                        alt={line.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[9px] text-center px-1 text-muted leading-tight">
                        {line.product.name}
                      </div>
                    )}
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          href={`/products/${line.product.slug}`}
                          onClick={closeCart}
                          className="font-medium hover:text-primary block truncate"
                        >
                          {line.product.name}
                        </Link>
                        {line.variant && (
                          <div className="text-xs text-muted mt-0.5 truncate">
                            {line.variant.label}
                          </div>
                        )}
                        {line.subscription && (
                          <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-accent/30 text-accent-foreground text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5">
                            ↻ Arwah Club · weekly
                          </div>
                        )}
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <div className="text-sm font-medium">
                          ${line.lineTotal.toFixed(2)}
                        </div>
                        {line.subscription && (
                          <div className="text-[11px] text-muted line-through">
                            ${(line.basePrice * line.qty).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-full border border-border bg-elevated text-sm">
                        <button
                          onClick={() => setQty(line.key, line.qty - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground"
                        >
                          −
                        </button>
                        <div className="w-7 text-center">{line.qty}</div>
                        <button
                          onClick={() => setQty(line.key, line.qty + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(line.key)}
                        className="text-xs text-muted hover:text-primary underline-offset-2 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-border px-6 py-5 space-y-4 bg-surface/40">
              <div className="rounded-xl bg-elevated border border-border px-4 py-3 flex items-start gap-3 text-sm">
                <div
                  aria-hidden
                  className="mt-0.5 w-9 h-9 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0"
                >
                  📦
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted">
                    Next ship date
                  </div>
                  <div className="font-medium">
                    {shipDate || "Friday"}
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    We ship across NY State on Fridays.
                  </div>
                </div>
              </div>

              <form onSubmit={applyDiscount} className="flex gap-2">
                <input
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Discount code"
                  className="flex-1 rounded-full bg-elevated border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  className="rounded-full bg-foreground text-bg px-5 py-2.5 text-sm font-medium hover:bg-primary transition-colors"
                >
                  Apply
                </button>
              </form>
              {discountFlash && (
                <div className="text-xs text-muted">{discountFlash}</div>
              )}

              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {hasSubscription && clubSavings > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Arwah Club savings</span>
                    <span>−${clubSavings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted">Shipping</span>
                  <span className="text-muted">
                    {qualifiesForFreeShipping
                      ? "Free"
                      : "Calculated at checkout"}
                  </span>
                </div>
                <div className="flex justify-between pt-2 mt-2 border-t border-border">
                  <span className="font-medium">Estimated total</span>
                  <span className="font-display text-xl">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {hasSubscription && (
                <div className="rounded-xl bg-accent/15 border border-accent/40 px-4 py-3 text-xs text-foreground/80 leading-relaxed">
                  <div className="font-medium text-foreground mb-0.5">
                    ↻ This order includes an Arwah Club subscription.
                  </div>
                  Subscription items renew weekly with 5% off. You can skip a
                  week or cancel anytime from your account.
                </div>
              )}

              <button
                disabled
                aria-disabled
                title="Checkout integration coming soon"
                className="w-full rounded-full bg-subtle/60 text-muted px-6 py-3.5 text-sm font-semibold cursor-not-allowed"
              >
                Checkout · coming soon
              </button>
              <p className="text-center text-xs text-muted">
                Storefront is in placeholder mode — you can build the cart, but
                payments aren&rsquo;t wired up yet.
              </p>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
