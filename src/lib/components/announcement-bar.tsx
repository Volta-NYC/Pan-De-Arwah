export default function AnnouncementBar() {
  return (
    <div className="bg-foreground text-bg text-center text-xs sm:text-sm tracking-wide py-2 px-4">
      Free shipping on orders over $50 &nbsp;·&nbsp; Shipping Fridays only &nbsp;·&nbsp;{" "}
      <a
        href="https://www.hotplate.com/pandearwah"
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 hover:text-accent"
      >
        Brooklyn pickup &amp; market days →
      </a>
    </div>
  )
}
