import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { fadeInLeft, fadeInRight } from '../../utils/animations'
import type { ProductDetails } from '../../types/product'

interface ProductSectionProps {
  product: ProductDetails
  isDark?: boolean
}

export function ProductSection({
  product,
  isDark = false,
}: ProductSectionProps) {
  const IconComponent = product.icon

  return (
    <section
      className={isDark ? 'bg-gray-50 py-20 lg:py-32' : 'py-20 lg:py-32'}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            {...(product.imageLeft ? fadeInRight : fadeInLeft)}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={product.imageLeft ? 'order-1 lg:order-2' : ''}
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <IconComponent className="h-8 w-8 text-[#5a23b1]" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              {product.title}
            </h2>
            <p className="mb-6 text-lg text-gray-600">{product.description}</p>

            <div className="mb-8 space-y-4">
              {product.features.map((feature, index) => {
                const FeatureIcon = feature.icon || Check
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: product.imageLeft ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-lg bg-purple-50 p-2">
                      <FeatureIcon className="h-5 w-5 text-[#5a23b1]" />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </motion.div>
                )
              })}
            </div>

            <Link
              to={product.link}
              className="inline-flex items-center gap-2 rounded-lg bg-[#5a23b1] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4a1d91]"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            {...(product.imageLeft ? fadeInLeft : fadeInRight)}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${product.imageLeft ? 'order-2 lg:order-1' : ''}`}
          >
            <div className="rounded-2xl bg-linear-to-br from-purple-50 to-purple-100 p-8">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-xl shadow-2xl"
              />
              <div
                className={`absolute -bottom-6 ${product.imageLeft ? '-left-6' : '-right-6'} rounded-xl bg-white p-6 shadow-xl`}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#5a23b1]">
                    {product.stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{product.stat.label}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
