import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Video, FileText, Headphones, Menu, X } from 'lucide-react'

export const Route = createFileRoute('/resources')({ component: ResourcesPage })

function ResourcesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
