import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurant: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+44-7440363399',
      link: 'tel:+447440363399',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@tawila.co.uk',
      link: 'mailto:contact@tawila.co.uk',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'United Kingdom',
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-gradient-to-br from-purple-50 to-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-4">
                  <info.icon className="h-8 w-8 text-[#5a23b1]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-lg text-gray-600 hover:text-[#5a23b1]"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-lg text-gray-600">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow-xl">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-semibold text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#5a23b1] focus:outline-none focus:ring-2 focus:ring-[#5a23b1]/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#5a23b1] focus:outline-none focus:ring-2 focus:ring-[#5a23b1]/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#5a23b1] focus:outline-none focus:ring-2 focus:ring-[#5a23b1]/20"
                    placeholder="+44 1234 567890"
                  />
                </div>

                <div>
                  <label htmlFor="restaurant" className="mb-2 block font-semibold text-gray-700">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#5a23b1] focus:outline-none focus:ring-2 focus:ring-[#5a23b1]/20"
                    placeholder="Your Restaurant"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-semibold text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#5a23b1] focus:outline-none focus:ring-2 focus:ring-[#5a23b1]/20"
                  placeholder="Tell us about your restaurant and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5a23b1] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#4a1d91]"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Connect With Us</h3>
            <p className="mb-8 text-gray-600">
              Follow us on social media for updates, tips, and restaurant success stories
            </p>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/company/tawila-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-[#5a23b1] transition-all hover:bg-[#5a23b1] hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/tawila_uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-[#5a23b1] transition-all hover:bg-[#5a23b1] hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-2xl font-bold">Looking for Something Else?</h3>
            <p className="mb-8 text-purple-100">
              Check out our resources or schedule a demo to see Tawila in action
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/resources"
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#5a23b1]"
              >
                View Resources
              </a>
              <a
                href="https://calendly.com/ahmedabdulalgane/tawila-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-8 py-3 font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
