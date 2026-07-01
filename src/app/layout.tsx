import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import AnnouncementBar from "@/lib/components/announcement-bar"
import RewardsButton from "@/lib/components/rewards-button"
import CartDrawer from "@/lib/components/cart-drawer"
import ScrollWaveOverlay from "@/lib/components/scroll-wave-overlay"
import SubtleMotion from "@/lib/components/subtle-motion"
import { CartProvider } from "@/lib/cart-context"

export const metadata: Metadata = {
  title: "Pan De Arwah — Artisanal Sourdough Microbakery · Brooklyn",
  description:
    "Pan De Arwah is an artisanal sourdough microbakery in East New York, Brooklyn. Small batch artisan loaves, gluten-free favorites, and sweets shipped across New York State.",
  metadataBase: new URL("https://pandearwah.com"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
}

/*
  Change the data-theme attribute below to swap palettes instantly:
    "" (default light cream) | "sage" | "linen" | "rose"
  Palettes are defined in src/app/globals.css.
*/
const ACTIVE_THEME = ""

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme={ACTIVE_THEME || undefined}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="site-shell min-h-screen bg-bg text-foreground">
        <CartProvider>
          <ScrollWaveOverlay />
          <SubtleMotion />
          <div className="site-content min-h-screen flex flex-col">
            <AnnouncementBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <RewardsButton />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
