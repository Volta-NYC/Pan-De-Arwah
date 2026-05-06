import WholesaleCTA from "@/lib/components/wholesale-cta"

export const metadata = {
  title: "Contact — Pan de Arwah",
  description:
    "Get in touch with Pan de Arwah for orders, wholesale, catering, or general questions.",
}

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
              Contact
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Say hello.
            </h1>
            <p className="mt-6 text-lg text-muted">
              Questions about an order, a wholesale relationship, or a market day?
              We&rsquo;d love to hear from you.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl bg-elevated border border-border p-5">
              <div className="text-xs uppercase tracking-widest text-muted">
                Email
              </div>
              <a
                href="mailto:pandearwah@gmail.com"
                className="font-display text-2xl hover:text-primary"
              >
                pandearwah@gmail.com
              </a>
            </div>
            <div className="rounded-xl bg-elevated border border-border p-5">
              <div className="text-xs uppercase tracking-widest text-muted">
                Visit
              </div>
              <div className="font-display text-2xl">East New York, Brooklyn</div>
              <div className="text-sm text-muted mt-1">
                Porch pickups Saturdays 3 – 8 PM
              </div>
            </div>
            <div className="rounded-xl bg-elevated border border-border p-5">
              <div className="text-xs uppercase tracking-widest text-muted">
                Markets &amp; pre-orders
              </div>
              <a
                href="https://www.hotplate.com/pandearwah"
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl hover:text-primary"
              >
                hotplate.com/pandearwah ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <WholesaleCTA />
    </>
  )
}
