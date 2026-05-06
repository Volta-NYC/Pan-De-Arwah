import Hero from "@/lib/components/hero"
import About from "@/lib/components/about"
import Menu from "@/lib/components/menu"
import GlutenFreeSpotlight from "@/lib/components/gluten-free-spotlight"
import HowItWorks from "@/lib/components/how-it-works"
import WholesaleCTA from "@/lib/components/wholesale-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <GlutenFreeSpotlight />
      <HowItWorks />
      <WholesaleCTA />
    </>
  )
}
