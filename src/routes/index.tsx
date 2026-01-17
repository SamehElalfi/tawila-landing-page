import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { FeatureHighlights } from '../components/home/FeatureHighlights'
import { HeroSection } from '../components/home/HeroSection'
import { SavingsCalculator } from '../components/home/SavingsCalculator'
import { TrustBar } from '../components/home/TrustBar'
import { ValueProposition } from '../components/home/ValueProposition'
import { Navbar } from '../components/Navbar'
import { CTABanner } from '../components/shared/CTABanner'

export const Route = createFileRoute('/')({
  component: TawilaLandingPage,
})

/**
 * Restaurant Operating System Landing Page
 * A complete, responsive landing page for a Restaurant SaaS platform
 */
function TawilaLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />
      <HeroSection />

      {/* Social Proof / Trust Bar */}
      <TrustBar />

      {/* Value Proposition (Icon Grid) */}
      <ValueProposition />

      {/* Savings Calculator */}
      <SavingsCalculator />

      {/* Feature Highlights (Zig-Zag Layout) */}
      <FeatureHighlights />

      {/* Bottom CTA Banner */}
      <CTABanner />
      <Footer />
    </div>
  )
}
