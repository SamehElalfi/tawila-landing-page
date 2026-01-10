import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Utensils, Coffee, Pizza, Building2 } from 'lucide-react'
import { Navbar } from '../components/Navbar'

export const Route = createFileRoute('/solutions')({ component: SolutionsPage })

function SolutionsPage() {
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
