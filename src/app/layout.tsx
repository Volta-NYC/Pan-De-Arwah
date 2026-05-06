import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import AnnouncementBar from "@/lib/components/announcement-bar"
import RewardsButton from "@/lib/components/rewards-button"

export const metadata: Metadata = {
  title: "Pan de Arwah — Artisan Sourdough Micro Bakery · Brooklyn",
  description:
    "Pan de Arwah is a sourdough micro bakery in East New York, Brooklyn. Small-batch artisan loaves, gluten-free favorites, and sweets shipped across New York State.",
  metadataBase: new URL("https://pandearwah.com"),
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
      <body className="min-h-screen flex flex-col bg-bg text-foreground">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RewardsButton />
      </body>
    </html>
  )
}
