import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import SectionIncluded from '@/components/SectionIncluded'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { SectionShowcase } from '@/components/SectionShowcase'
import SectionCTA from '@/components/SectionCTA'

export default function Home() {
  return (
    <div className="relative isolate bg-white">
      <GridPattern id="hero-grid" className="-z-10 opacity-70" />
      <Header />

      <main id="main">
        <Hero />
        <SectionShowcase />
        <SectionIncluded />
        <Container>
          <hr className="border-slate-200" />
        </Container>
        <SectionCTA />
      </main>
      <Footer />
    </div>
  )
}
