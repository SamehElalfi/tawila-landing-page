import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPolicyPage,
})

function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-purple-50 to-white pt-30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 10, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome to Tawila ("we," "our," or "us"). We are committed to
              protecting your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our restaurant management
              platform and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>
                Account information (name, email, phone number, business
                details)
              </li>
              <li>
                Payment information (processed securely through third-party
                payment processors)
              </li>
              <li>Restaurant data (menus, orders, inventory, analytics)</li>
              <li>
                Customer data (order history, preferences, contact information)
              </li>
              <li>Usage data (how you interact with our platform)</li>
              <li>
                Device information (IP address, browser type, operating system)
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>
                Send administrative information, updates, and security alerts
              </li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>
                Detect, prevent, and address technical issues and fraudulent
                activity
              </li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-600 mb-6">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>
                Service providers who assist in our operations (cloud hosting,
                payment processing, analytics)
              </li>
              <li>Business partners with your consent</li>
              <li>
                Legal authorities when required by law or to protect our rights
              </li>
              <li>
                Potential buyers in the event of a merger, acquisition, or sale
                of assets
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These measures include
              encryption, secure servers, regular security assessments, and
              access controls. However, no method of transmission over the
              internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-600 mb-6">
              We retain your information for as long as necessary to provide our
              services, comply with legal obligations, resolve disputes, and
              enforce our agreements. When we no longer need your information,
              we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Your Rights and Choices
            </h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>
                Object to or restrict certain processing of your information
              </li>
              <li>
                Data portability (receive your data in a structured format)
              </li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to collect usage
              information and improve our services. You can control cookies
              through your browser settings. However, disabling cookies may
              affect the functionality of our platform.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries
              other than your country of residence. We ensure appropriate
              safeguards are in place to protect your information in accordance
              with this Privacy Policy and applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Children's Privacy
            </h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to individuals under 18 years of
              age. We do not knowingly collect personal information from
              children. If you become aware that a child has provided us with
              personal information, please contact us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. Your continued use
              of our services after changes constitutes acceptance of the
              updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us:
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
