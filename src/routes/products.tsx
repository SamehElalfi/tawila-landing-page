import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Package, Clock, Smartphone, Menu, X } from 'lucide-react'

export const Route = createFileRoute('/products')({ component: ProductsPage })

function ProductsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const products = [
    {
      icon: ShoppingBag,
      title: 'Online Ordering System',
      description: 'Commission-free ordering platform with custom branding',
      features: ['Custom website', 'Mobile app', 'Real-time tracking', 'Multiple payment options'],
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Smart inventory tracking and automated reordering',
      features: ['Real-time stock levels', 'Automated alerts', 'Supplier management', 'Recipe costing'],
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
