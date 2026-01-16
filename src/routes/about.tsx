import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Heart, Target, Users, Award, Linkedin } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put restaurant owners at the heart of everything we do, building solutions that truly solve their problems.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to bring the latest technology and best practices to the restaurant industry.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of restaurant owners who learn and grow together.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every aspect of our platform and service.',
    },
  ]

  const team = [
    {
      name: 'Ahmed Mohammed',
      role: 'Co-Founder & COO',
      bio: 'Ex-dish-washer, Ex-food-deliverer',
      image: '/ahmed-mohammed.jpeg',
      linkedin: 'https://www.linkedin.com/in/ahmed-mohamed-193005242/',
    },
    {
      name: 'Ahmed Elsir',
      role: 'Co-Founder & CTO',
      bio: 'Ex-Chef, Ex-food-deliverer',
      image: '/ahmed-elsir.jpeg',
      linkedin: 'https://www.linkedin.com/in/aelsir/',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
              About Tawila
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We're on a mission to empower restaurant owners with technology that helps them succeed.
              Built by people who've worked in restaurants, for people who run restaurants.
            </p>
          </motion.div>
        </div>
      </section>

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
              <p>
                We are Sudanese. We both ran businesses back in Sudan. Starting over in a new country, 
                we experienced firsthand the challenges of navigating unfamiliar systems.
              </p>
              <p>
                We watched our friends—brilliant chefs who had also fled conflict—struggle with the same 
                barriers. They could create incredible food, but they faced unfamiliar systems and technology 
                companies failed to meet their needs.
              </p>
              <p>
                We saw how third-party delivery apps were taking 15-35% of hard-earned revenue, making
                it nearly impossible for small restaurants to thrive. We knew there had to be a better way.
              </p>
              <p>
                And that's why we started Tawila in 2024. Tawila means "Restaurant's Table" in Arabic, 
                a metaphor for togetherness. We provide a complete operating system designed specifically 
                for immigrant restaurant owners—with zero commission fees, transparent pricing, and support 
                from people who truly understand the journey.
              </p>
              <p>
                Our goal is simple: Help restaurant owners from day zero, from getting their first 100 
                orders to scaling sustainably.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                  <value.icon className="h-6 w-6 text-[#5a23b1]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Meet Our Founders</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From the kitchen to the boardroom - we've been in your shoes
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="group relative mx-auto mb-6 h-64 w-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-purple-100 transition-all duration-500 group-hover:ring-8 group-hover:ring-purple-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="mb-2 text-lg font-semibold text-[#5a23b1]">{member.role}</p>
                <p className="mb-4 text-gray-600">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#5a23b1] transition-all hover:gap-3 hover:text-[#4a1d91]"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Our Impact</h2>
            <p className="mx-auto max-w-2xl text-lg text-purple-100">
              Making a real difference for restaurant owners
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: '7+', label: 'Active Restaurants' },
              { value: '0%', label: 'Commission Fees' },
              { value: '£1,500+', label: 'Saved by Customers' },
              { value: '48h', label: 'Average Setup' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold md:text-5xl">{stat.value}</div>
                <div className="text-lg text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Ready to Join Us?</h2>
            <p className="mb-8 text-xl text-gray-600">
              Let's work together to make your restaurant more successful
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendly.com/ahmedabdulalgane/tawila-ltd" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#5a23b1] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#4a1d91]">
                Book a Demo
              </a>
              <a
                href="/contact"
                className="rounded-lg border-2 border-[#5a23b1] px-8 py-3 font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
