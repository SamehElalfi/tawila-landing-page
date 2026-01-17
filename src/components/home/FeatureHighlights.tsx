import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { featureHighlights } from '../../data/homepage'
import { fadeInUp, slideInFromBottom } from '../../utils/animations'

export function FeatureHighlights() {
  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Powerful Features Built for Success
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Everything you need to run a modern restaurant, all in one
            integrated platform
          </p>
        </motion.div>

        <div className="space-y-32">
          {featureHighlights.map((feature) => (
            <motion.div
              key={feature.title}
              {...slideInFromBottom}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  feature.imageLeft ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Text Content */}
                <div className={feature.imageLeft ? 'lg:col-start-2' : ''}>
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className={`mb-6 inline-flex items-center justify-center rounded-2xl bg-linear-to-br ${feature.gradient} p-4 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="mb-4 text-4xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mb-8 text-lg text-gray-600">
                    {feature.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mb-8 space-y-4">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * bulletIndex }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`mt-1 rounded-full bg-linear-to-br ${feature.gradient} p-1`}
                        >
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-lg text-gray-700">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    {feature.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + statIndex * 0.1 }}
                        className="text-center"
                      >
                        <div
                          className={`mb-1 bg-linear-to-r ${feature.gradient} bg-clip-text text-3xl font-bold text-transparent`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image with Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${feature.imageLeft ? 'lg:col-start-1' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-20`}
                    ></div>
                  </div>
                  {/* Floating Card Accent */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className={`absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl ${
                      feature.imageLeft ? 'lg:-left-6 lg:right-auto' : ''
                    }`}
                  >
                    <div
                      className={`bg-linear-to-r ${feature.gradient} bg-clip-text text-2xl font-bold text-transparent`}
                    >
                      {feature.stats[0].value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {feature.stats[0].label}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
