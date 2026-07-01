export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
            Our story
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            A small kitchen, a long ferment.
          </h2>
        </div>
        <div className="md:col-span-3 space-y-5 text-foreground/85 text-lg leading-relaxed">
          <p>
            Pan De Arwah began in a Brooklyn home kitchen with one starter and a
            stubborn belief that sourdough should be unhurried, generous, and
            shared.
          </p>
          <p>
            Every loaf is mixed by hand and given a long, slow rise — the kind of
            patience that turns flour, water, and salt into something worth waiting
            for. Our gluten-free line was built with the same care, so no one at
            the table has to opt out.
          </p>
          <p className="text-muted">
            We bake in small batches, ship on Fridays, and follow the rhythm of
            market weekends across New York City.
          </p>
        </div>
      </div>
    </section>
  )
}
