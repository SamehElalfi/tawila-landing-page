import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { PlayCircle, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { fadeInDown, fadeInLeft } from '../../utils/animations'

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-gray-50 via-purple-50/30 to-gray-50 pt-16">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-y-0 right-0 w-1/2">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop"
            alt="Restaurant Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-gray-50/60 to-gray-50"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <motion.div
              {...fadeInLeft}
              className="flex flex-col justify-center"
            >
              {/* Badge */}
              <motion.div
                {...fadeInDown}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-[#5a23b1]"
              >
                <Sparkles className="h-4 w-4" />
                New: AI for Restaurant Insights
              </motion.div>

              {/* H1 Headline */}
              <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                The Operating System for Restaurant Owners
              </h1>

              {/* Subheadline */}
              <p className="mb-8 text-xl text-gray-600">
                Complete technology solution with 0% commission fees. From your
                first 100 orders to sustainable growth.
              </p>

              {/* CTA Area */}
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/pricing"
                  className="rounded-lg bg-[#5a23b1] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#4a1d91] hover:shadow-xl"
                >
                  Get Started Free
                </Link>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="flex items-center gap-2 text-lg font-medium text-gray-700 transition-colors hover:text-[#5a23b1]"
                >
                  <PlayCircle className="h-6 w-6" />
                  View Demo Video
                </button>
              </div>
            </motion.div>

            {/* Right Content - Spacer for background image */}
            <div className="relative hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white transition-colors hover:text-gray-300"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </button>
            <div
              className="relative overflow-hidden rounded-lg bg-black"
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/BWNhGLH9Wh0?autoplay=1"
                title="Tawila Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
