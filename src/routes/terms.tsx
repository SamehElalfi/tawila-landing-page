import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/terms')({
  component: TermsOfServicePage,
})

function TermsOfServicePage() {
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
              Terms of Service
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Tawila's restaurant management platform and services ("Services"),
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these
              Terms, please do not use our Services. We reserve the right to modify these Terms at any
              time, and your continued use constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-600 mb-6">
              Tawila provides a comprehensive restaurant operating system including online ordering,
              table management, inventory tracking, analytics, point-of-sale systems, and related services.
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any
              time with or without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>
            <p className="text-gray-600 mb-4">
              To use our Services, you must:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 18 years old and legally able to enter into contracts</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-gray-600 mb-6">
              You are responsible for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Use the Services for any illegal purpose or in violation of any laws</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Use the Services to transmit viruses, malware, or harmful code</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest information about other users</li>
              <li>Use automated systems to access the Services without permission</li>
              <li>Reverse engineer or attempt to extract source code</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Billing</h2>
            <p className="text-gray-600 mb-6">
              You agree to pay all fees associated with your use of the Services according to the pricing
              plan you select. All fees are non-refundable unless otherwise stated. We reserve the right
              to change our pricing with 30 days' notice. Failure to pay fees may result in suspension or
              termination of your account. You are responsible for all taxes associated with your use of
              the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6">
              The Services, including all content, features, and functionality, are owned by Tawila and
              are protected by international copyright, trademark, patent, trade secret, and other
              intellectual property laws. You are granted a limited, non-exclusive, non-transferable
              license to use the Services for your business purposes. You may not copy, modify, distribute,
              sell, or lease any part of our Services without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Content and Data</h2>
            <p className="text-gray-600 mb-6">
              You retain ownership of any content and data you upload to the Services ("User Content").
              By uploading User Content, you grant us a worldwide, non-exclusive, royalty-free license to
              use, store, and process your User Content solely to provide and improve the Services. You
              represent that you have all necessary rights to your User Content and that it does not violate
              any third-party rights or applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Privacy and Security</h2>
            <p className="text-gray-600 mb-6">
              We take data security seriously and implement industry-standard measures to protect your data.
              However, we cannot guarantee absolute security. Our use of your personal information is governed
              by our Privacy Policy. You are responsible for maintaining the security of your account and for
              backing up your data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Level and Availability</h2>
            <p className="text-gray-600 mb-6">
              While we strive to provide reliable and uninterrupted service, we do not guarantee that the
              Services will be available at all times or error-free. We may perform maintenance, updates,
              or modifications that temporarily affect service availability. We are not liable for any
              downtime, data loss, or business interruption.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Services and Links</h2>
            <p className="text-gray-600 mb-6">
              Our Services may integrate with or link to third-party services, websites, or applications.
              We are not responsible for the content, privacy practices, or availability of third-party
              services. Your use of third-party services is at your own risk and subject to their terms
              and conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TAWILA SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
              WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
              INTANGIBLE LOSSES, RESULTING FROM: (A) YOUR USE OR INABILITY TO USE THE SERVICES; (B)
              UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA; (C) ANY THIRD-PARTY CONDUCT OR CONTENT;
              OR (D) ANY OTHER MATTER RELATING TO THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE
              AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to indemnify, defend, and hold harmless Tawila, its affiliates, officers, directors,
              employees, and agents from any claims, liabilities, damages, losses, and expenses, including
              reasonable attorney's fees, arising out of or in any way connected with your use of the Services,
              your User Content, or your violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-600 mb-6">
              You may terminate your account at any time by contacting our support team. We may suspend or
              terminate your access to the Services at any time, with or without cause or notice, for any
              reason including violation of these Terms. Upon termination, your right to use the Services
              will immediately cease. We may retain your data as required by law or for legitimate business
              purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Dispute Resolution and Arbitration</h2>
            <p className="text-gray-600 mb-6">
              Any disputes arising from these Terms or your use of the Services shall be resolved through
              binding arbitration in accordance with the rules of [Arbitration Association]. You agree to
              waive your right to participate in class actions. The arbitration shall take place in [Location],
              and judgment on the award may be entered in any court having jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction],
              without regard to its conflict of law principles. You agree to submit to the personal jurisdiction
              of the courts located in [Location] for any legal proceedings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Miscellaneous</h2>
            <p className="text-gray-600 mb-6">
              These Terms constitute the entire agreement between you and Tawila regarding the Services. If
              any provision is found to be unenforceable, the remaining provisions will remain in effect. Our
              failure to enforce any right or provision shall not constitute a waiver. You may not assign or
              transfer these Terms without our written consent. We may assign these Terms to any affiliate or
              in connection with a merger or sale.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>Tawila</strong></p>
              <p className="text-gray-600">Email: legal@tawila.co.uk</p>
              <p className="text-gray-600">Address: [Your Business Address]</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
