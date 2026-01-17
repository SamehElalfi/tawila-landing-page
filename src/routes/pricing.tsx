import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { PricingCard } from '../components/pricing/PricingCard'
import { pricingPlans } from '../data/pricing'
import { fadeInUp } from '../utils/animations'

export const Route = createFileRoute('/pricing')({ component: PricingPage })

function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-50 via-purple-50/30 to-gray-50 py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-gray-900 lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Choose the plan that fits your restaurant's needs. No hidden fees,
              cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Questions about pricing?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Contact our sales team for custom enterprise solutions
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfFbO3qsAFcuD0pApU3Vlth8L_ZnvJnEiIdl4U_wEyd_7p-iQ/viewform?usp=preview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#5a23b1] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#4a1d91]"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
