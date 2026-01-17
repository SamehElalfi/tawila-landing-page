import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useEffect } from 'react'
import { createDelayedAnimation, fadeInUp } from '../../utils/animations'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import type { ProductPageData } from '../../types/product-page'

interface ProductPageLayoutProps {
  data: ProductPageData
}

export function ProductPageLayout({ data }: ProductPageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-600 to-purple-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              {data.title}
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-purple-100">
              {data.subtitle}
            </p>
            <a
              href={data.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50"
            >
              {data.ctaText}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Everything You Need to Succeed
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Powerful features designed specifically for restaurant success
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  {...createDelayedAnimation(index * 0.1)}
                  className="rounded-xl border border-gray-100 p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <IconComponent className="h-6 w-6 text-[#5a23b1]" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                {data.showcaseTitle || 'Complete Solution'}
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                {data.showcaseDescription ||
                  'Everything you need in one integrated platform.'}
              </p>

              <ul className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="h-6 w-6 shrink-0 text-[#5a23b1]" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {data.showcaseImage && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={data.showcaseImage}
                    alt={data.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-purple-600 to-purple-800 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-purple-100">
              Join restaurant owners who are already growing their business with
              Tawila
            </p>
            <a
              href={data.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#5a23b1] transition-transform hover:scale-105"
            >
              {data.ctaText}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
