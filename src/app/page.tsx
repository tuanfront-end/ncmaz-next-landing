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

      {/* tabIndex -1 so the skip link actually moves focus here. Chrome moves
          the sequential focus starting point on a fragment jump without it;
          Safari and screen-reader virtual cursors do not. */}
      <main id="main" tabIndex={-1}>
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
