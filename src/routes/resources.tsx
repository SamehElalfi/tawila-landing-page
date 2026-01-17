import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ResourceCategoryCard } from '../components/resources/ResourceCategoryCard'
import { ResourceArticleCard } from '../components/resources/ResourceArticleCard'
import { resourceArticles, resourceCategories } from '../data/resources'
import { fadeInUp } from '../utils/animations'

export const Route = createFileRoute('/resources')({ component: ResourcesPage })

function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-50 via-purple-50/30 to-gray-50 py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="mb-6 text-5xl font-bold text-gray-900 lg:text-6xl">
              Resources & Learning
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Everything you need to succeed with Tawila
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {resourceCategories.map((category, index) => (
              <ResourceCategoryCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Featured Articles</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Latest guides and insights to help your restaurant thrive
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resourceArticles.map((article, index) => (
              <ResourceArticleCard key={article.title} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
