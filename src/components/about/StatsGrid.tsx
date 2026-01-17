import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'
import type { CompanyStat } from '../../types/about'

interface StatsGridProps {
  stats: Array<CompanyStat>
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <section className="bg-linear-to-br from-purple-600 to-purple-800 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
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
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold md:text-5xl">
                {stat.value}
              </div>
              <div className="text-lg text-purple-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
