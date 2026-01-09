import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Menu } from 'lucide-react'

export const Route = createFileRoute('/pricing')({ component: PricingPage })

function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const plans = [
    {
      name: 'Starter',
      price: '£49',
      period: '/month',
      description: 'Perfect for small takeaways and cafes',
      features: [
        { text: 'Online Ordering System', included: true },
        { text: 'Custom Website', included: true },
        { text: 'Your Own Domain', included: true },
        { text: 'Basic Analytics', included: true },
        { text: 'Email Support', included: true },
        { text: 'Mobile App', included: false },
        { text: 'Dine-in System', included: false },
        { text: 'Priority Support', included: false },
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '£98',
      period: '/month',
      description: 'Ideal for growing restaurants',
      features: [
        { text: 'Everything in Starter', included: true },
        { text: 'Mobile App (iOS & Android)', included: true },
        { text: 'Advanced Analytics', included: true },
        { text: 'Inventory Management', included: true },
        { text: 'Priority Support', included: true },
        { text: 'Multiple Locations', included: true },
        { text: 'Dine-in System', included: false },
        { text: 'Dedicated Account Manager', included: false },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '£147',
      period: '/month',
      description: 'Complete solution for full-service restaurants',
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'Dine-in System with QR', included: true },
        { text: 'Marketing Consultancy', included: true },
        { text: 'Dedicated Account Manager', included: true },
        { text: 'Custom Integrations', included: true },
        { text: 'White-label Solutions', included: true },
        { text: '24/7 Phone Support', included: true },
        { text: 'Training & Onboarding', included: true },
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <StickyNavigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-50 via-purple-50/30 to-gray-50 py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-gray-900 lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Choose the plan that fits your restaurant's needs. No hidden fees, cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-[#5a23b1] text-white shadow-2xl ring-2 ring-[#5a23b1] scale-105'
                    : 'bg-gray-50 text-gray-900'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`mb-2 text-sm font-semibold uppercase tracking-wider ${
                    plan.popular ? 'text-purple-200' : 'text-gray-500'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className={`text-lg ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className={`h-5 w-5 shrink-0 ${
                          plan.popular ? 'text-white' : 'text-[#5a23b1]'
                        }`} />
                      ) : (
                        <X className={`h-5 w-5 shrink-0 ${
                          plan.popular ? 'text-purple-300' : 'text-gray-300'
                        }`} />
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.popular ? 'text-white' : 'text-gray-700'
                          : plan.popular ? 'text-purple-300' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-lg px-6 py-3 font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-[#5a23b1] hover:bg-gray-100'
                      : 'bg-[#5a23b1] text-white hover:bg-[#4a1d91]'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            <button className="rounded-lg bg-[#5a23b1] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#4a1d91]">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function StickyNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}) {
  const navLinks = ['Products', 'Solutions', 'Resources', 'Pricing']
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-white shadow-sm'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://www.tawila.co.uk/_next/image?url=%2Ftawila.png&w=3840&q=75"
                alt="Tawila"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="text-gray-700 transition-colors hover:text-[#5a23b1] hover:underline"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            <button className="rounded-lg border-2 border-[#5a23b1] bg-purple-50 px-4 py-2 text-[#5a23b1] transition-colors hover:bg-[#5a23b1] hover:text-white">
              Log In
            </button>
            <button className="rounded-lg bg-[#5a23b1] px-4 py-2 text-white transition-colors hover:bg-[#4a1d91]">
              Book a Demo
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <div className="space-y-2 pt-4">
              <button className="w-full rounded-lg border-2 border-[#5a23b1] px-4 py-2 text-[#5a23b1]">
                Log In
              </button>
              <button className="w-full rounded-lg bg-[#5a23b1] px-4 py-2 text-white">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
