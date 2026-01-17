import { motion } from 'framer-motion'
import { valuePropositionFeatures } from '../../data/homepage'
import { createDelayedAnimation, fadeInUp } from '../../utils/animations'

export function ValueProposition() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Everything you need to run a modern restaurant
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From commission-free ordering to POS systems and analytics—we've got
            you covered.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {valuePropositionFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                {...createDelayedAnimation(index * 0.2)}
                className="rounded-lg border border-gray-100 p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${feature.color}`}
                >
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
