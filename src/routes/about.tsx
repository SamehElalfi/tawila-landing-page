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
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQEr5LIkejyb-Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1655157555816?e=1765411200&v=beta&t=byyghW8fFjskl07xOO3wWpjENIrWBCfdkzROtyM6WRI',
      linkedin: 'https://www.linkedin.com/in/ahmed-mohamed-193005242/',
    },
    {
      name: 'Ahmed Elsir',
      role: 'Co-Founder & CTO',
      bio: 'Ex-Chef, Ex-food-deliverer',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHVJOoi5RW-9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709401064127?e=1765411200&v=beta&t=N_70QJCmNsCOHZz9xomIrGEKjh4YkDUYNe6CecNOPVM',
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
                Tawila was born from firsthand experience in the restaurant industry. Our founders,
                Ahmed Mohammed and Ahmed Elsir, have worked as chefs, dishwashers, and food deliverers.
                They experienced the challenges restaurant owners face every day: high commission fees,
                complicated systems, and lack of support.
              </p>
              <p>
                We saw how third-party delivery apps were taking 12-30% of hard-earned revenue, making
                it nearly impossible for small restaurants to thrive. We knew there had to be a better way.
              </p>
              <p>
                In 2024, we decided to build that better way. Tawila is a complete operating system
                designed specifically for restaurants - with zero commission fees, transparent pricing,
                and support from people who truly understand the industry.
              </p>
              <p>
                Today, we're proud to serve over 10,000 venues, helping them keep 100% of their revenue
                and grow their businesses on their own terms.
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto mb-6 h-48 w-48 rounded-full object-cover shadow-xl"
                />
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="mb-2 text-lg font-semibold text-[#5a23b1]">{member.role}</p>
                <p className="mb-4 text-gray-600">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#5a23b1] hover:text-[#4a1d91]"
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
              { value: '10,000+', label: 'Venues Served' },
              { value: '0%', label: 'Commission Fees' },
              { value: '£5M+', label: 'Saved Annually' },
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
