import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/pricing')({ component: PricingPage })

function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <Navbar />
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

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfFbO3qsAFcuD0pApU3Vlth8L_ZnvJnEiIdl4U_wEyd_7p-iQ/viewform?usp=preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-[#5a23b1] hover:bg-gray-100'
                      : 'bg-[#5a23b1] text-white hover:bg-[#4a1d91]'
                  }`}
                >
                  Get Started
                </a>
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
            <a
              href="/contact"
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

