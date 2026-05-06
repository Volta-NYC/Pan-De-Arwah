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

export const products: Product[] = [
  {
    slug: "ajeeb-loaf",
    name: "Ajeeb Loaf",
    fullName: "Ajeeb Loaf — Gluten Free Sourdough Sandwich Loaf",
    shortName: "Gluten Free Sourdough Sandwich Loaf",
    blurb: "A soft, sliceable gluten-free sourdough loaf — built for sandwiches and morning toast.",
    tagline: "Ajeeb — Wonderfully Soft.",
    description:
      "Ajeeb is our everyday gluten-free sandwich loaf — soft enough to fold a sandwich around, sturdy enough to take the toaster. We mix a long-fermented gluten-free starter with a careful blend of flours so each slice has structure without ever tasting dry or crumbly.\n\nAjeeb means wonderful in Arabic — a small reminder that gluten-free bread doesn't have to be the compromise on the table.",
    price: 13,
    categories: ["Gluten Free"],
    image: `${IMG}/ajeeb-loaf.webp`,
    ingredients: ["Gluten-free flour blend", "GF sourdough starter", "Filtered water", "Sea salt", "Olive oil"],
    externalUrl: "https://pandearwah.com/products/ajeeb-loaf-gluten-free-sourdough-sandwich-loaf",
  },
  {
    slug: "amana-loaf",
    name: "Amana Loaf",
    fullName: "Amana Loaf — Sourdough Gluten Free Buckwheat Loaf",
    shortName: "Sourdough Gluten Free Buckwheat Loaf",
    blurb: "Earthy buckwheat sourdough with a dense, deeply flavored crumb. Naturally gluten free.",
    tagline: "Amana — Bread of Trust.",
    description:
      "A dense, deeply flavored buckwheat sourdough. Amana is for the toast that holds up to butter, the sandwich that doesn't fall apart, the slice eaten plain with olive oil and salt.\n\nAmana means trust — bread you can rely on.",
    price: 15,
    categories: ["Gluten Free"],
    image: `${IMG}/amana-loaf.webp`,
    ingredients: ["Buckwheat flour", "GF sourdough starter", "Filtered water", "Sea salt"],
    externalUrl: "https://pandearwah.com/products/amana-loaf-sourdough-gluten-free-buckwheat-loaf",
  },
  {
    slug: "barakah-baguette",
    name: "Barakah Baguette",
    fullName: "Barakah Baguette — Sourdough Baguette",
    shortName: "Sourdough Baguette",
    blurb: "Classic naturally-leavened baguette. Crackling crust, open crumb, slow ferment.",
    tagline: "Barakah — A Loaf of Blessing.",
    description:
      "Crackling, blistered crust. Open, irregular crumb. The baguette is a small test for any bakery — long ferment, careful shaping, hot oven, no shortcuts.\n\nBarakah means blessing. Baked daily, eaten the same day.",
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
    fullName: "Burooj Brownie — Sourdough Cosmic Brownies",
    shortName: "Sourdough Cosmic Brownies",
    blurb: "Fudgy sourdough brownies blanketed in candy-coated chocolates. A nostalgia bomb.",
    tagline: "Burooj — Cosmic Comfort.",
    description:
      "Dense, fudgy sourdough brownies under a thick chocolate ganache and a constellation of candy-coated chocolates. The lunchbox memory, made grown-up.\n\nBurooj means constellations. Each tray is its own little galaxy.",
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
    fullName: "Lutf Brioche — Gluten Free Sourdough Brioche",
    shortName: "Gluten Free Sourdough Brioche",
    blurb: "Buttery, golden gluten-free brioche with a tender, custardy crumb.",
    tagline: "Lutf — A Tender Kindness.",
    description:
      "Our gluten-free brioche is patient work. Eggs, butter, slow ferment — all the things that make a brioche tender, none of the wheat. Toast it, French-toast it, eat it warm with jam.\n\nLutf means tender kindness. The crumb tells you the same.",
    price: 14,
    categories: ["Gluten Free"],
    image: `${IMG}/lutf-brioche.webp`,
    ingredients: ["GF flour blend", "Eggs", "Butter", "Milk", "GF sourdough starter", "Sugar", "Salt"],
    externalUrl: "https://pandearwah.com/products/lutf-brioche-gluten-free-sourdough-brioche",
  },
  {
    slug: "masa-sol",
    name: "Masa Sol",
    fullName: "Masa Sol — Sourdough Dominican Hero",
    shortName: "Sourdough Dominican Hero (3)",
    blurb: "A trio of golden Dominican-style hero rolls — sturdy, soft, sandwich-ready.",
    tagline: "Masa Sol — Sunlit Bread.",
    description:
      "A Dominican hero roll, naturally leavened. Crackly outside, soft inside, the right shape and structure for a real sandwich. We bake them in trios — one to eat now, two to save.\n\nMasa Sol — sunlit dough. The crust catches the light.",
    price: 10,
    categories: ["Bread"],
    image: `${IMG}/masa-sol.webp`,
    variants: [
      { id: "trio", label: "Pack of 3", price: 10 },
      { id: "six", label: "Pack of 6", price: 18 },
    ],
    ingredients: ["Bread flour", "Sourdough starter", "Filtered water", "Sea salt", "Sugar"],
    externalUrl: "https://pandearwah.com/products/masa-sol-sourdough-dominican-hero",
  },
  {
    slug: "qalbi-cookie",
    name: "Qalbi Cookie Box",
    fullName: "Qalbi Cookie — Box of Sourdough Chocolate Chip Cookies",
    shortName: "Box of 6 Chocolate Chip Cookies",
    blurb: "Six oversized, crackled sourdough chocolate chip cookies. Crisp edges, chewy middle.",
    tagline: "Qalbi — From My Heart.",
    description:
      "Big, crackled, sourdough chocolate chip cookies. Crisp at the edges, soft in the middle, with deep chunks of dark chocolate. We bake them in boxes of six because that's how many you'll want.\n\nQalbi means my heart. The cookies are a love letter.",
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
    fullName: "Rahma Rolls — Sourdough Cinnamon Rolls",
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
