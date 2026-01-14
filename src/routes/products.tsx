import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, BarChart3, Tablet, Check, ArrowRight, Smartphone, Globe, CreditCard, TrendingUp, Users } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/products')({ component: ProductsPage })

function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl">
              Our Products
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-purple-100">
              Complete suite of tools to run your restaurant efficiently. Zero commissions, 
              powerful features, and built for restaurant success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ordering Product Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <ShoppingBag className="h-8 w-8 text-[#5a23b1]" />
              </div>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Direct Ordering Platform
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Take control of your online orders with a commission-free ordering system. 
                Build direct relationships with your customers and keep 100% of your revenue.
              </p>
              
              <div className="mb-8 space-y-4">
                {[
                  { icon: Smartphone, text: 'Branded mobile apps (iOS & Android)' },
                  { icon: Globe, text: 'Custom ordering website' },
                  { icon: CreditCard, text: 'Multiple payment options' },
                  { icon: TrendingUp, text: 'Real-time order tracking' },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-lg bg-purple-50 p-2">
                      <item.icon className="h-5 w-5 text-[#5a23b1]" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/ordering"
                className="inline-flex items-center gap-2 rounded-lg bg-[#5a23b1] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4a1d91]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                  alt="Online Ordering"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#5a23b1]">0%</p>
                    <p className="text-sm text-gray-600">Commission</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Product Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                  alt="Analytics Dashboard"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#5a23b1]">50+</p>
                    <p className="text-sm text-gray-600">Metrics</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <BarChart3 className="h-8 w-8 text-[#5a23b1]" />
              </div>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Analytics & Insights
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Make data-driven decisions with powerful analytics that reveal opportunities 
                for growth. See what's working and what's not in real-time.
              </p>
              
              <div className="mb-8 space-y-4">
                {[
                  'Real-time sales dashboards',
                  'Customer behavior analysis',
                  'Menu performance tracking',
                  'Revenue forecasting',
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-purple-50 p-1">
                      <Check className="h-5 w-5 text-[#5a23b1]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/analytics"
                className="inline-flex items-center gap-2 rounded-lg bg-[#5a23b1] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4a1d91]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POS Product Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Tablet className="h-8 w-8 text-[#5a23b1]" />
              </div>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Point of Sale System
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                A modern POS system designed for restaurants. Fast, reliable, and packed 
                with features to help you serve customers better and run operations smoothly.
              </p>
              
              <div className="mb-8 space-y-4">
                {[
                  'Lightning-fast order processing',
                  'Table management & floor plans',
                  'Kitchen display integration',
                  'Works offline',
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-purple-50 p-1">
                      <Check className="h-5 w-5 text-[#5a23b1]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/pos"
                className="inline-flex items-center gap-2 rounded-lg bg-[#5a23b1] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4a1d91]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8">
                <img
                  src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop"
                  alt="POS System"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#5a23b1]">3x</p>
                    <p className="text-sm text-gray-600">Faster</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="mb-8 text-xl text-purple-100">
              Get all three products in one complete platform
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://calendly.com/ahmedabdulalgane/tawila-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-lg bg-white px-8 py-4 text-center text-lg font-semibold text-[#5a23b1] shadow-lg transition-transform hover:scale-105 sm:w-auto"
              >
                Book a Demo
              </a>
              <Link
                to="/contact"
                className="w-full rounded-lg border-2 border-white px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#5a23b1] sm:w-auto"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
