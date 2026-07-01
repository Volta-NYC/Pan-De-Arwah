import About from "@/lib/components/about"
import HowItWorks from "@/lib/components/how-it-works"

export const metadata = {
  title: "About — Pan De Arwah",
  description:
    "Pan De Arwah is a sourdough microbakery in East New York, Brooklyn — small batch, slow ferment, generous bread.",
}

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
            About
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Bread, made with patience.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl">
            Pan De Arwah is a sourdough microbakery in East New York, Brooklyn.
            We bake in small batches, ferment slowly, and ship across New York
            State on Fridays.
          </p>
        </div>
      </section>
      <About />
      <HowItWorks />
    </>
  )
}
