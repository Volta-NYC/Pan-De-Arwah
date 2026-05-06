"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { getProductBySlug, type Product, type ProductVariant } from "./products"

export type CartLine = {
  /** Composite key — product slug + variant id (or "default") */
  key: string
  productSlug: string
  variantId: string | null
  qty: number
}

export type ResolvedCartLine = CartLine & {
  product: Product
  variant: ProductVariant | null
  unitPrice: number
  lineTotal: number
  variantLabel: string
}

type CartContextValue = {
  lines: CartLine[]
  resolved: ResolvedCartLine[]
  count: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (product: Product, variant: ProductVariant | null, qty: number) => void
  setQty: (key: string, qty: number) => void
  removeItem: (key: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = "pdarwah-cart-v1"

function makeKey(slug: string, variantId: string | null): string {
  return `${slug}::${variantId ?? "default"}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[]
        if (Array.isArray(parsed)) setLines(parsed)
      }
    } catch {
      /* ignore corrupted cart */
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* storage full / disabled — ignore */
    }
  }, [lines, hydrated])

  // Lock body scroll while drawer open
  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback(
    (product: Product, variant: ProductVariant | null, qty: number) => {
      const key = makeKey(product.slug, variant?.id ?? null)
      setLines((prev) => {
        const existing = prev.find((l) => l.key === key)
        if (existing) {
          return prev.map((l) =>
            l.key === key ? { ...l, qty: l.qty + qty } : l,
          )
        }
        return [
          ...prev,
          {
            key,
            productSlug: product.slug,
            variantId: variant?.id ?? null,
            qty,
          },
        ]
      })
      setIsOpen(true)
    },
    [],
  )

  const setQty = useCallback((key: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.key !== key)
        : prev.map((l) => (l.key === key ? { ...l, qty } : l)),
    )
  }, [])

  const removeItem = useCallback((key: string) => {
    setLines((prev) => prev.filter((l) => l.key !== key))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const resolved: ResolvedCartLine[] = useMemo(() => {
    return lines
      .map((l) => {
        const product = getProductBySlug(l.productSlug)
        if (!product) return null
        const variant =
          l.variantId && product.variants
            ? product.variants.find((v) => v.id === l.variantId) ?? null
            : null
        const unitPrice = variant?.price ?? product.price
        return {
          ...l,
          product,
          variant,
          variantLabel: variant?.label ?? "Standard",
          unitPrice,
          lineTotal: unitPrice * l.qty,
        }
      })
      .filter((x): x is ResolvedCartLine => x !== null)
  }, [lines])

  const count = useMemo(
    () => resolved.reduce((sum, l) => sum + l.qty, 0),
    [resolved],
  )
  const subtotal = useMemo(
    () => resolved.reduce((sum, l) => sum + l.lineTotal, 0),
    [resolved],
  )

  const value: CartContextValue = {
    lines,
    resolved,
    count,
    subtotal,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    addItem,
    setQty,
    removeItem,
    clear,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>")
  return ctx
}

/** Next Friday at 12:00pm local — used as the next ship date. */
export function nextShipDate(from: Date = new Date()): Date {
  const d = new Date(from)
  const day = d.getDay() // 0 Sun – 6 Sat
  const daysUntilFriday = (5 - day + 7) % 7 || 7
  d.setDate(d.getDate() + daysUntilFriday)
  d.setHours(12, 0, 0, 0)
  return d
}
