import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { BookOpen, Video, FileText, Headphones } from 'lucide-react'
import { Navbar } from '../components/Navbar'

export const Route = createFileRoute('/resources')({ component: ResourcesPage })

function ResourcesPage() {
  const categories = [
    {
      icon: BookOpen,
      title: 'Guides & Tutorials',
      description: 'Step-by-step guides to help you get the most out of Tawila',
      count: '24 resources',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch and learn from our comprehensive video library',
      count: '15 videos',
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real success stories from restaurants like yours',
      count: '12 case studies',
    },
    {
      icon: Headphones,
      title: 'Support Center',
      description: '24/7 support and documentation for all your questions',
      count: 'Always available',
    },
  ]

  const articles = [
    {
      category: 'Guide',
      title: '10 Tips to Optimize Your Restaurant Menu',
      excerpt:
        'Learn how to design a menu that maximizes profits and delights customers',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
      readTime: '5 min read',
    },
    {
      category: 'Case Study',
      title: 'How Bella Italia Increased Revenue by 40%',
      excerpt:
        'Discover how this popular restaurant chain transformed their operations',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      readTime: '8 min read',
    },
    {
      category: 'Tutorial',
      title: 'Setting Up Your First Online Menu',
      excerpt: 'A complete walkthrough for creating your first menu in Tawila',
      image:
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
      readTime: '10 min read',
    },
    {
      category: 'Guide',
      title: 'Reducing Food Waste in Your Kitchen',
      excerpt: 'Practical strategies to minimize waste and maximize efficiency',
      image:
        'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=400&h=300&fit=crop',
      readTime: '6 min read',
    },
    {
      category: 'Article',
      title: 'Understanding Restaurant Analytics',
      excerpt: 'Key metrics every restaurant owner should track',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      readTime: '7 min read',
    },
    {
      category: 'Tutorial',
      title: 'Integrating with Delivery Platforms',
      excerpt:
        'Connect your restaurant with major delivery services seamlessly',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      readTime: '4 min read',
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
              Resources & Learning Center
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Everything you need to succeed with your restaurant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl border border-gray-200 p-6 text-center transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-[#5a23b1]">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    {category.description}
                  </p>
                  <p className="text-xs font-semibold text-[#5a23b1]">
                    {category.count}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Articles Grid */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl border border-gray-200 transition-shadow hover:shadow-lg"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#5a23b1]">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600">{article.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

