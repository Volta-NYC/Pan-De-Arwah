const steps = [
  {
    n: "01",
    title: "Order through Shopify",
    body: "Pan De Arwah will keep Shopify as the main home for ordering and operations, with Hotplate linked for current pickup windows and market updates.",
  },
  {
    n: "02",
    title: "We bake fresh",
    body: "Every loaf is mixed, shaped, and ferments overnight. Sweets are pulled from the oven the morning of pickup or shipping.",
  },
  {
    n: "03",
    title: "Friday ship · pickup windows",
    body: "We ship across New York State on Fridays. Brooklyn porch pickups open when available and may pause during weekend markets.",
  },
  {
    n: "04",
    title: "Check the market schedule",
    body: "Weekend vending rotates across New York City. If porch pickup is unavailable, Hotplate may temporarily close while the latest pickup availability and market location are updated.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
            How it works
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            From our kitchen to your table.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-xl bg-elevated border border-border p-7 hover:border-primary/40 transition-colors"
            >
              <div className="font-display text-5xl text-primary/80">{s.n}</div>
              <div className="mt-4 font-display text-2xl">{s.title}</div>
              <p className="mt-2 text-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-elevated px-6 py-5 text-sm text-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>Free shipping on orders over $50. Latest pickup and market details live on Hotplate.</div>
          <a
            href="https://www.hotplate.com/pandearwah"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Find us at our next market day →
          </a>
        </div>
      </div>
    </section>
  )
}
