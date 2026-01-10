import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Clock, Smartphone } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/products')({ component: ProductsPage })

function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const products = [
    {
      icon: ShoppingBag,
      title: 'Online Ordering System',
      description: 'Commission-free ordering platform with custom branding',
      features: ['Custom website', 'Mobile app', 'Real-time tracking', 'Multiple payment options'],
    },
    {
      icon: Clock,
      title: 'Table Management',
      description: 'Streamline dine-in operations with QR code ordering',
      features: ['QR code menus', 'Table reservations', 'Order tracking', 'Staff management'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native iOS and Android apps for your restaurant',
      features: ['Push notifications', 'Loyalty programs', 'Easy reordering', 'Customer profiles'],
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
              Our Products
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Complete suite of tools to run your restaurant efficiently
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-[#5a23b1]">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{product.title}</h3>
                  <p className="mb-6 text-gray-600">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#5a23b1]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
