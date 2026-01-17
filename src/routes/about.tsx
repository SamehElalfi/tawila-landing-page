import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { StatsGrid } from '../components/about/StatsGrid'
import { TeamMemberCard } from '../components/about/TeamMemberCard'
import { ValueCard } from '../components/about/ValueCard'
import {
  companyStats,
  companyValues,
  ourStory,
  teamMembers,
} from '../data/about'
import { fadeInUp } from '../utils/animations'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-50 to-white pt-32 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
              About Tawila
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We're on a mission to empower restaurant owners with technology
              that helps them succeed. Built by people who've worked in
              restaurants, for people who run restaurants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600">
              {ourStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Meet Our Founders
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From the kitchen to the boardroom - we've been in your shoes
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsGrid stats={companyStats} />

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Ready to Join Us?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Become part of a community of restaurant owners who are taking
              control of their business
            </p>
            <a
              href="https://calendly.com/ahmedabdulalgane/tawila-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#5a23b1] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#4a1d91]"
            >
              Book a Demo
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
