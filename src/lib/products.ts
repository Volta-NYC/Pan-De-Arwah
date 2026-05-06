export type ProductCategory = "Bread" | "Gluten Free" | "Sweet"

export type ProductVariant = {
  id: string
  label: string
  price: number
}

export type Product = {
  slug: string
  name: string
  /** Long-form display name (used as page heading on PDP) */
  fullName: string
  shortName: string
  blurb: string
  /** Long marketing description for the product page (paragraphs split by \n\n) */
  description: string
  /** Optional poetic subhead shown above the description */
  tagline?: string
  price: number
  categories: ProductCategory[]
  image: string | null
  /** Optional gallery — first entry is primary; falls back to `image` */
  gallery?: string[]
  /** Optional purchase variants. Default selection is variants[0]. */
  variants?: ProductVariant[]
  ingredients?: string[]
  externalUrl: string
}

const IMG = "/products"

/**
 * Arwah Club — subscription perk metadata.
 * Real recurring billing isn't wired up yet (would route through Stripe /
 * Shopify Subscriptions); this drives the UI + pricing math only.
 */
export const ARWAH_CLUB = {
  id: "arwah-club-weekly",
  name: "Arwah Club",
  frequencyLabel: "Deliver every week",
  /** 5% off the per-line price */
  discountPct: 0.05,
} as const

export function applyClubDiscount(price: number) {
  return Math.round(price * (1 - ARWAH_CLUB.discountPct) * 100) / 100
}

export const products: Product[] = [
  {
    slug: "ajeeb-loaf",
    name: "Ajeeb Loaf",
    fullName: "Ajeeb Loaf — Wonderfully Soft",
    shortName: "Gluten Free Sourdough Sandwich Loaf",
    blurb: "A soft, sliceable gluten-free sourdough loaf — built for sandwiches and morning toast.",
    tagline: "Ajeeb — Wonderfully Soft.",
    description:
      "Our gluten-free sourdough take on that classic, nostalgic sandwich bread, made with rice flour for a light, pillowy texture. Soft, squishy, sweetened with agave and perfect for toast, PB&Js, or stacked sandwiches.\n\nAjeeb means wonderful — and this loaf brings that simple, feel-good comfort back, one slice at a time.",
    price: 13,
    categories: ["Gluten Free"],
    image: `${IMG}/ajeeb-loaf.webp`,
    ingredients: ["Gluten-free flour blend", "GF sourdough starter", "Filtered water", "Sea salt", "Olive oil"],
    externalUrl: "https://pandearwah.com/products/ajeeb-loaf-gluten-free-sourdough-sandwich-loaf",
  },
  {
    slug: "amana-loaf",
    name: "Amana Loaf",
    fullName: "Amana Loaf — Sacred Trust in Every Slice",
    shortName: "Sourdough Gluten Free Buckwheat Loaf",
    blurb: "Vegan, gluten-free buckwheat sourdough — earthy, chewy, and gut-kind.",
    tagline: "Amana — Sacred Trust in Every Slice.",
    description:
      "Crafted with buckwheat and rice flour and sweetened gently with agave nectar, the Amana Loaf is our vegan, gluten-free offering. Earthy in aroma, chewy in texture, and naturally nourishing — this bread is clean, gut-kind, and full of flavor.\n\nWe named it Amana, meaning sacred trust, because we believe in food that honors the body and the earth.",
    price: 15,
    categories: ["Gluten Free"],
    image: `${IMG}/amana-loaf.webp`,
    ingredients: ["Buckwheat flour", "GF sourdough starter", "Filtered water", "Sea salt"],
    externalUrl: "https://pandearwah.com/products/amana-loaf-sourdough-gluten-free-buckwheat-loaf",
  },
  {
    slug: "barakah-baguette",
    name: "Barakah Baguette",
    fullName: "Barakah Baguette — Blessing in Every Bite",
    shortName: "Sourdough Baguette",
    blurb: "Classic sourdough baguette — crisp golden crust, soft airy crumb.",
    tagline: "Barakah — Blessing in Every Bite.",
    description:
      "A classic sourdough baguette with a crisp golden crust and a soft, airy crumb. Simple, nourishing, and made to remind us that even the most humble bread carries barakah (blessings) when shared with gratitude.",
    price: 7,
    categories: ["Bread"],
    image: null,
    variants: [
      { id: "single", label: "Single Baguette", price: 7 },
      { id: "pair", label: "Pair (2)", price: 13 },
    ],
    ingredients: ["Bread flour", "Sourdough starter", "Filtered water", "Sea salt"],
    externalUrl: "https://pandearwah.com/products/barakah-baguette-sourdough-baguette",
  },
  {
    slug: "burooj-brownie",
    name: "Burooj Brownie",
    fullName: "Burooj Brownie — Blessings, Brightly Baked",
    shortName: "Sourdough Cosmic Brownies",
    blurb: "Sourdough cosmic brownies with Inaru DR chocolate and naturally dyed candy-coated chocolates.",
    tagline: "Burooj — Blessings, Brightly Baked.",
    description:
      "Our Burooj Brownie is a sourdough cosmic brownie reimagined — made with rich, soy-free Inaru chocolate from the Dominican Republic and topped with vegan, naturally dyed candy-coated chocolates. Think turmeric gold, beet red, and spirulina blue — colorful without compromise. Although not fully vegan, this brownie is made with care, using clean, gut-conscious ingredients.\n\nNamed after Burooj — the stars and constellations. This treat is a burst of color, comfort, and barakah in every square.",
    price: 28,
    categories: ["Sweet"],
    image: `${IMG}/burooj-brownie.webp`,
    variants: [
      { id: "box-6", label: "Burooj Brownie Box (6)", price: 28 },
      { id: "single", label: "Burooj Brownie Single", price: 6 },
    ],
    ingredients: ["Butter", "Dark chocolate", "Eggs", "Sugar", "Flour", "Sourdough discard", "Candy-coated chocolates"],
    externalUrl: "https://pandearwah.com/products/untitled-oct3_21-13",
  },
  {
    slug: "lutf-brioche",
    name: "Lutf Brioche",
    fullName: "Lutf Brioche — Enriched Sweetness, Softly Made",
    shortName: "Gluten Free Sourdough Brioche",
    blurb: "Sorghum and millet sourdough brioche — soft, tender, gently sweet.",
    tagline: "Lutf — Enriched Sweetness, Softly Made.",
    description:
      "A sourdough gluten-free brioche made with sorghum and millet flour, offering a soft, tender crumb and a light, delicate sweetness. Naturally fragrant and beautifully balanced, it's a loaf that comforts without heaviness.\n\nLutf means gentle kindness — because some of the best things are felt softly, yet nourish deeply.",
    price: 14,
    categories: ["Gluten Free"],
    image: `${IMG}/lutf-brioche.webp`,
    ingredients: ["GF flour blend", "Eggs", "Butter", "Milk", "GF sourdough starter", "Sugar", "Salt"],
    externalUrl: "https://pandearwah.com/products/lutf-brioche-gluten-free-sourdough-brioche",
  },
  {
    slug: "masa-sol",
    name: "Masa Sol",
    fullName: "Masa Sol — Sun-Risen Dominican Tradition",
    shortName: "Sourdough Dominican Hero",
    blurb: "Half a dozen pan de agua, fermented with masa madre and baked slow.",
    tagline: "Masa Sol — Sun-Risen Dominican Tradition.",
    description:
      "These are half a dozen pan de agua (much like a hero) as my great-great-great grandmother would've made it — fermented with masa madre (sourdough), halal beef lard or ghee, baked slow, and born of care. A crisp crust, soft crumb, and flavors that carry generations of island warmth and love.\n\nMade to feed the body, comfort the heart, and remind us that rizq (sustenance) comes not just from earth, but from the Giver above.",
    price: 10,
    categories: ["Bread"],
    image: `${IMG}/masa-sol.webp`,
    variants: [
      { id: "half-dozen", label: "Half Dozen (6)", price: 10 },
      { id: "dozen", label: "Dozen (12)", price: 18 },
    ],
    ingredients: ["Bread flour", "Sourdough starter", "Filtered water", "Sea salt", "Sugar"],
    externalUrl: "https://pandearwah.com/products/masa-sol-sourdough-dominican-hero",
  },
  {
    slug: "qalbi-cookie",
    name: "Qalbi Cookie Box",
    fullName: "Qalbi Cookie Boxes (6)",
    shortName: "Jumbo Sourdough Cookies — Box of 6",
    blurb: "Six jumbo sourdough cookies — crispy edges, gooey center, gut-friendly goodness.",
    tagline: "Qalbi — From My Heart.",
    description:
      "Six jumbo sourdough cookies made with wild yeast — they offer a subtle tang and gut-friendly goodness. Crispy edges, gooey center, and gentle nourishment.\n\nA comforting treat baked with love, reminding us that the best sweetness is the kind that feeds both the heart and the body.",
    price: 28,
    categories: ["Sweet"],
    image: `${IMG}/qalbi-cookie.webp`,
    variants: [
      { id: "box-all", label: "Box of 6 — All Flavors", price: 28 },
      { id: "box-chocolate-chip", label: "Box of 6 — Chocolate Chip", price: 28 },
      { id: "box-red-velvet", label: "Box of 6 — Red Velvet", price: 28 },
      { id: "box-cookie-butter", label: "Box of 6 — Cookie Butter", price: 28 },
      { id: "box-matcha-strawberry", label: "Box of 6 — Matcha Strawberry Chip", price: 28 },
      { id: "single-chocolate-chip", label: "Single — Chocolate Chip", price: 5 },
      { id: "single-red-velvet", label: "Single — Red Velvet", price: 5 },
      { id: "single-cookie-butter", label: "Single — Cookie Butter", price: 5 },
      { id: "single-matcha-strawberry", label: "Single — Matcha Strawberry Chip", price: 5 },
    ],
    ingredients: ["Butter", "Brown sugar", "Eggs", "Flour", "Sourdough discard", "Dark chocolate", "Sea salt"],
    externalUrl: "https://pandearwah.com/products/qalbi-cookie-chocolate-chip",
  },
  {
    slug: "rahma-rolls",
    name: "Rahma Rolls",
    fullName: "Rahma Rolls — Sweetness Made Soft",
    shortName: "Sourdough Cinnamon Rolls",
    blurb: "Sourdough cinnamon rolls under a slow-melt cream cheese frosting. Pulled fresh from the tray.",
    tagline: "Rahma Rolls — Sweetness Made Soft.",
    description:
      "These sourdough cinnamon buns are tender, swirled with warm spice, and glazed with just enough sweetness to make your soul sigh. Baked soft and golden, they melt in your mouth and linger in your memory.\n\nRahma means mercy — because some comforts feel like a gentle hug from above.",
    price: 30,
    categories: ["Sweet"],
    image: `${IMG}/rahma-rolls.webp`,
    variants: [
      { id: "tray-4", label: "Rahma Rolls (4)", price: 30 },
      { id: "single", label: "Single Rahma Roll", price: 9 },
    ],
    ingredients: ["Bread flour", "Sourdough starter", "Butter", "Brown sugar", "Cinnamon", "Cream cheese", "Vanilla"],
    externalUrl: "https://pandearwah.com/products/rahma-rolls-sourdough-cinnamon-rolls-3",
  },
  {
    slug: "rizq-loaf",
    name: "Rizq Loaf",
    fullName: "Rizq Loaf — Classic Sourdough Loaf",
    shortName: "Classic Sourdough Loaf",
    blurb: "Our daily round — rustic boule with a deep amber crust and tangy, open crumb.",
    tagline: "Rizq — Daily Sustenance.",
    description:
      "The everyday loaf. A rustic round boule with a deep amber crust, gently sour crumb, and the kind of structure that makes thick slices for thick toast.\n\nRizq means sustenance. The bread we always come back to.",
    price: 13,
    categories: ["Bread"],
    image: `${IMG}/rizq-loaf.webp`,
    ingredients: ["Bread flour", "Whole wheat flour", "Sourdough starter", "Filtered water", "Sea salt"],
    externalUrl: "https://pandearwah.com/",
  },
  {
    slug: "samaa-brownie",
    name: "Samaa Brownie",
    fullName: "Samaa Brownie — Gluten Free Sourdough Cosmic Brownie",
    shortName: "Gluten Free Sourdough Cosmic Brownie",
    blurb: "All the cosmic glory of Burooj, made gluten free. Same fudge, same candy, no compromise.",
    tagline: "Samaa — Skies Wide Open.",
    description:
      "All the fudge, all the candy, none of the gluten. We rebuilt our cosmic brownie around a gluten-free flour blend so the only thing missing is the wheat.\n\nSamaa means sky. The treat is just as big.",
    price: 34,
    categories: ["Gluten Free", "Sweet"],
    image: `${IMG}/samaa-brownie.webp`,
    variants: [
      { id: "box-6", label: "Samaa Brownie Box of 6", price: 34 },
      { id: "single", label: "Samaa Brownie Single", price: 7 },
    ],
    ingredients: ["GF flour blend", "Butter", "Dark chocolate", "Eggs", "Sugar", "Sourdough discard", "Candy-coated chocolates"],
    externalUrl: "https://pandearwah.com/",
  },
  {
    slug: "sirr-buns",
    name: "Sirr Buns",
    fullName: "Sirr Buns — Sourdough Burger Buns",
    shortName: "Sourdough Burger Buns",
    blurb: "Pillowy sourdough buns built to hold up to a real burger. Slightly tangy, slightly sweet.",
    tagline: "Sirr — A Quiet Secret.",
    description:
      "Soft, slightly sweet sourdough buns engineered for the weight of a real burger — they don't fall apart at the second bite. Egg wash on top, sesame on request.\n\nSirr means a quiet secret. Yours to share.",
    price: 13,
    categories: ["Bread"],
    image: null,
    variants: [
      { id: "four", label: "Pack of 4", price: 13 },
      { id: "eight", label: "Pack of 8", price: 24 },
    ],
    ingredients: ["Bread flour", "Sourdough starter", "Milk", "Butter", "Egg", "Sugar", "Salt"],
    externalUrl: "https://pandearwah.com/",
  },
  {
    slug: "zayt-focaccia",
    name: "Zayt Focaccia",
    fullName: "Zayt Focaccia — Sourdough Focaccia",
    shortName: "Sourdough Focaccia",
    blurb: "Olive-oil drenched focaccia, dimpled and salted. Tear it, dip it, share it.",
    tagline: "Zayt — In Praise of Olive Oil.",
    description:
      "A high-hydration sourdough focaccia: golden, dimpled, drenched in olive oil and finished with flaky salt. Tear off pieces while it's still warm. Dip in more oil. Repeat.\n\nZayt means olive oil — it earns the name.",
    price: 12,
    categories: ["Bread"],
    image: null,
    ingredients: ["Bread flour", "Sourdough starter", "Filtered water", "Olive oil", "Sea salt", "Rosemary"],
    externalUrl: "https://pandearwah.com/",
  },
]

// Hero is still served from Shopify CDN (no local copy yet).
export const heroImage =
  "https://pandearwah.com/cdn/shop/files/D0D05FEB-2793-4187-BCFC-79A0B30FA4A4.png"

export const glutenFreeProducts = products.filter((p) =>
  p.categories.includes("Gluten Free"),
)

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
