import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ShoppingBag, Smartphone, Zap, TrendingUp, Check, Globe } from 'lucide-react'

export const Route = createFileRoute('/ordering')({
  component: OrderingPage,
})

function OrderingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: ShoppingBag,
      title: 'Zero Commission',
      description: 'Keep 100% of your revenue. No hidden fees, no commissions.',
    },
    {
      icon: Smartphone,
      title: 'Branded Mobile Apps',
      description: 'Custom iOS and Android apps with your restaurant branding.',
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Instant order notifications and live tracking for customers.',
    },
    {
      icon: TrendingUp,
      title: 'Increase Revenue',
      description: 'Direct ordering leads to 2x more repeat customers.',
    },
    {
      icon: Globe,
      title: 'Custom Website',
      description: 'Beautiful, responsive ordering website with your domain.',
    },
    {
      icon: Check,
      title: 'Easy Integration',
      description: 'Seamlessly integrates with your existing kitchen workflow.',
    },
  ]

  const benefits = [
    'Commission-free ordering - keep 100% of revenue',
    'Custom branded website and mobile apps',
    'Real-time order tracking and notifications',
    'Multiple payment methods supported',
    'Automated order routing to kitchen',
    'Customer loyalty program built-in',
    'Menu management made simple',
    '24/7 customer support',
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Direct Ordering Platform
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-purple-100">
              Take control of your online orders with a commission-free ordering system.
              Build direct relationships with your customers and keep 100% of your revenue.
            </p>
            <a href="https://calendly.com/ahmedabdulalgane/tawila-ltd" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50">
              Start Your Free Trial
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Everything You Need to Succeed
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Powerful features designed to help you take control of your online ordering
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                  <feature.icon className="h-6 w-6 text-[#5a23b1]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Why Choose Tawila Ordering?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Stop paying commissions to third-party apps. With Tawila, you own the customer
                relationship and keep 100% of your hard-earned revenue.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 rounded-full bg-purple-100 p-1">
                      <Check className="h-4 w-4 text-[#5a23b1]" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-8 text-white shadow-2xl"
            >
              <h3 className="mb-6 text-3xl font-bold">See the Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 text-4xl font-bold">£350+</div>
                  <div className="text-purple-100">Average monthly savings per restaurant</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">2x</div>
                  <div className="text-purple-100">Increase in repeat customers</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">48h</div>
                  <div className="text-purple-100">Average setup time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Ready to Take Control?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Start accepting direct orders today and keep 100% of your revenue
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendly.com/ahmedabdulalgane/tawila-ltd" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#5a23b1] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#4a1d91]">
                Get Started Free
              </a>
              <a
                href="/contact"
                className="rounded-lg border-2 border-[#5a23b1] px-8 py-4 text-lg font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50"
              >
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
