import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import TrustStrip   from './components/TrustStrip'
import Stats        from './components/Stats'
import ProductShowcase from './components/ProductShowcase'
import Platform     from './components/Platform'
import Integrations from './components/Integrations'
import HowItWorks   from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import ClosingCTA   from './components/ClosingCTA'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Stats />
        <ProductShowcase />
        <Platform />
        <Integrations />
        <HowItWorks />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  )
}
