export default function WholesaleCTA() {
  return (
    <section id="wholesale" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-xl border border-border bg-gradient-to-br from-surface to-bg p-8 md:p-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
              Wholesale &amp; Catering
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Bake with us, in bigger batches.
            </h2>
            <p className="mt-5 text-muted">
              Cafés, restaurants, and event hosts — we build standing orders and
              custom catering menus around what you need. Tell us a little about
              your space and we&rsquo;ll be in touch.
            </p>
            <p className="mt-4 text-sm text-muted">
              Or email us directly:{" "}
              <a
                href="mailto:pandearwah@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                pandearwah@gmail.com
              </a>
            </p>
          </div>

          <form className="grid gap-3" action="mailto:pandearwah@gmail.com" method="post" encType="text/plain">
            <input
              required
              name="name"
              placeholder="Name"
              className="rounded-xl bg-elevated border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="rounded-xl bg-elevated border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              name="phone"
              placeholder="Phone (optional)"
              className="rounded-xl bg-elevated border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Tell us about your business or event"
              className="rounded-xl bg-elevated border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-foreground transition-colors"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
