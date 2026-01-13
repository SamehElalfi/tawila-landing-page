import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Tablet, Zap, Users, CreditCard, Check, Wifi } from 'lucide-react'

export const Route = createFileRoute('/pos')({
  component: POSPage,
})

function POSPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: Tablet,
      title: 'Modern Interface',
      description: 'Intuitive touchscreen interface designed for speed and efficiency.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process orders in seconds, reducing wait times and improving service.',
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Multiple staff members can use the system simultaneously.',
    },
    {
      icon: CreditCard,
      title: 'All Payment Types',
      description: 'Accept cash, cards, contactless, and digital wallets.',
    },
    {
      icon: Wifi,
      title: 'Offline Mode',
      description: 'Continue taking orders even when internet connection drops.',
    },
    {
      icon: Check,
      title: 'Easy Training',
      description: 'Get your staff up and running in minutes, not days.',
    },
  ]

  const capabilities = [
    'Quick order entry with visual menu',
    'Table management and floor plans',
    'Split bills and group payments',
    'Integrated payment processing',
    'Kitchen display system (KDS) sync',
    'Real-time inventory updates',
    'Customer loyalty program',
    'Detailed sales reporting',
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
              Point of Sale System
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-purple-100">
              A modern POS system designed for restaurants. Fast, reliable, and packed
              with features to help you serve customers better and run operations smoothly.
            </p>
            <a href="https://calendly.com/ahmedabdulalgane/tawila-ltd" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50">
              Request a Demo
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
              Built for Restaurant Success
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Everything you need to manage orders, payments, and operations efficiently
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

      {/* Capabilities Section */}
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
                Powerful POS Features
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Our POS system is designed specifically for restaurants, with all the features
                you need to streamline operations and delight customers.
              </p>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.li
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 rounded-full bg-purple-100 p-1">
                      <Check className="h-4 w-4 text-[#5a23b1]" />
                    </div>
                    <span className="text-lg text-gray-700">{capability}</span>
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
              <h3 className="mb-6 text-3xl font-bold">Why Choose Tawila POS?</h3>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 text-4xl font-bold">3x</div>
                  <div className="text-purple-100">Faster order processing</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">99.9%</div>
                  <div className="text-purple-100">Uptime reliability</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">5 min</div>
                  <div className="text-purple-100">Staff training time</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">24/7</div>
                  <div className="text-purple-100">Technical support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
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
              Seamless Integration
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Works perfectly with all other Tawila products
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Online Ordering',
                description: 'All online orders flow directly into your POS system automatically.',
              },
              {
                title: 'Analytics',
                description: 'Sales data syncs in real-time with your analytics dashboard.',
              },
              {
                title: 'Inventory',
                description: 'Stock levels update automatically with every sale.',
              },
            ].map((integration, index) => (
              <motion.div
                key={integration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-purple-50 p-6"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900">{integration.title}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </motion.div>
            ))}
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
              Ready to Upgrade Your POS?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              See how Tawila POS can transform your restaurant operations
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendly.com/ahmedabdulalgane/tawila-ltd" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#5a23b1] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#4a1d91]">
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="rounded-lg border-2 border-[#5a23b1] px-8 py-4 text-lg font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50"
              >
                Get Custom Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
