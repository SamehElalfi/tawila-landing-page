import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BarChart3, TrendingUp, PieChart, Activity, Check, LineChart } from 'lucide-react'

export const Route = createFileRoute('/analytics')({
  component: AnalyticsPage,
})

function AnalyticsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: BarChart3,
      title: 'Real-Time Dashboards',
      description: 'Monitor sales, orders, and performance in real-time with intuitive dashboards.',
    },
    {
      icon: TrendingUp,
      title: 'Sales Forecasting',
      description: 'AI-powered predictions help you plan inventory and staffing.',
    },
    {
      icon: PieChart,
      title: 'Customer Insights',
      description: 'Understand customer behavior, preferences, and ordering patterns.',
    },
    {
      icon: Activity,
      title: 'Performance Metrics',
      description: 'Track KPIs that matter most to your restaurant business.',
    },
    {
      icon: LineChart,
      title: 'Trend Analysis',
      description: 'Identify trends and opportunities to grow your revenue.',
    },
    {
      icon: Check,
      title: 'Custom Reports',
      description: 'Generate detailed reports tailored to your business needs.',
    },
  ]

  const insights = [
    'Real-time sales and revenue tracking',
    'Customer lifetime value analysis',
    'Menu item performance rankings',
    'Peak hours and demand patterns',
    'Staff productivity metrics',
    'Profit margin by item/category',
    'Customer retention rates',
    'Marketing campaign effectiveness',
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Analytics & Insights
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-purple-100">
              Make data-driven decisions with powerful analytics that reveal opportunities
              for growth. See what's working and what's not in real-time.
            </p>
            <a href="https://calendly.com/ahmedabdulalgane/tawila-ltd" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50">
              See Analytics in Action
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Comprehensive Analytics Platform
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From real-time metrics to predictive insights, everything you need to optimize your restaurant
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
                  <feature.icon className="h-6 w-6 text-[#5a23b1]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Turn Data Into Action
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Our analytics platform gives you the insights you need to make smarter decisions,
                optimize operations, and increase profitability.
              </p>
              <ul className="space-y-4">
                {insights.map((insight, index) => (
                  <motion.li
                    key={insight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 rounded-full bg-purple-100 p-1">
                      <Check className="h-4 w-4 text-[#5a23b1]" />
                    </div>
                    <span className="text-lg text-gray-700">{insight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-8 text-white shadow-2xl"
            >
              <h3 className="mb-6 text-3xl font-bold">Analytics Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 text-4xl font-bold">25%</div>
                  <div className="text-purple-100">Average increase in profitability</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">50+</div>
                  <div className="text-purple-100">Key metrics tracked</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">Live</div>
                  <div className="text-purple-100">Real-time updates</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">360°</div>
                  <div className="text-purple-100">Complete business view</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              How Restaurants Use Analytics
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Optimize Menu',
                description: 'Identify your most and least profitable items to make menu decisions that boost margins.',
              },
              {
                title: 'Reduce Waste',
                description: 'Track inventory trends to minimize food waste and optimize ordering quantities.',
              },
              {
                title: 'Improve Marketing',
                description: 'Understand which campaigns drive results and allocate your marketing budget effectively.',
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-purple-50 p-6"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Start Making Smarter Decisions
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Get the insights you need to grow your restaurant business
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendly.com/ahmedabdulalgane/tawila-ltd" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#5a23b1] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#4a1d91]">
                View Demo
              </a>
              <a
                href="/contact"
                className="rounded-lg border-2 border-[#5a23b1] px-8 py-4 text-lg font-semibold text-[#5a23b1] transition-colors hover:bg-purple-50"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
