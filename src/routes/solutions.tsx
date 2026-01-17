import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { SolutionCard } from '../components/solutions/SolutionCard'
import { solutions } from '../data/solutions'
import { fadeInUp } from '../utils/animations'

export const Route = createFileRoute('/solutions')({ component: SolutionsPage })

function SolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-50 via-purple-50/30 to-gray-50 py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
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
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.title}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
