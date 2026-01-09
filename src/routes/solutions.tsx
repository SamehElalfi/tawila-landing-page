import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Utensils, Coffee, Pizza, Building2, Menu, X } from 'lucide-react'

export const Route = createFileRoute('/solutions')({ component: SolutionsPage })

function SolutionsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const solutions = [
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Elevate your fine dining experience with premium features',
      benefits: [
        'Table reservations',
        'Wine pairing suggestions',
        'Premium branding',
        'White-glove support',
      ],
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    },
    {
      icon: Coffee,
      title: 'Cafes & Coffee Shops',
      description: 'Perfect for quick service and high volume orders',
      benefits: [
        'Quick order processing',
        'Loyalty programs',
        'Mobile ordering',
        'Multiple locations',
      ],
      image:
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
    },
    {
      icon: Pizza,
      title: 'Quick Service Restaurants',
      description: 'Fast-paced operations made simple',
      benefits: [
        'Delivery management',
        'Kitchen display',
        'Order tracking',
        'Peak hour optimization',
      ],
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
    },
    {
      icon: Building2,
      title: 'Multi-Location Chains',
      description: 'Centralized management for restaurant groups',
      benefits: [
        'Unified dashboard',
        'Cross-location analytics',
        'Centralized menu',
        'Franchise support',
      ],
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
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
              Solutions for Every Restaurant
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Tailored solutions designed for your specific restaurant type
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-[#5a23b1]">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="mb-6 text-lg text-gray-600">
                      {solution.description}
                    </p>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <span className="h-2 w-2 rounded-full bg-[#5a23b1]"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
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
