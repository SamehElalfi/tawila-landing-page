import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ProductSection } from '../components/products/ProductSection'
import { CTABanner } from '../components/shared/CTABanner'
import { products } from '../data/products'
import { fadeInUp } from '../utils/animations'

export const Route = createFileRoute('/products')({ component: ProductsPage })

function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-600 to-purple-800 py-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl">
              Our Products
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-purple-100">
              Complete suite of tools to run your restaurant efficiently. Zero
              commissions, powerful features, and built for restaurant success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => (
        <ProductSection
          key={product.id}
          product={product}
          isDark={index === 1}
        />
      ))}

      {/* CTA Section */}
      <CTABanner />

      <Footer />
    </div>
  )
}
