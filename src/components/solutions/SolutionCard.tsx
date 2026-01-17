import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeInLeft, fadeInRight } from '../../utils/animations'
import type { Solution } from '../../types/resources'

interface SolutionCardProps {
  solution: Solution
  index: number
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
  const IconComponent = solution.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      {...(isEven ? fadeInLeft : fadeInRight)}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`grid items-center gap-8 lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-dense'}`}
    >
      <div className={isEven ? '' : 'lg:col-start-2'}>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
          <IconComponent className="h-6 w-6 text-[#5a23b1]" />
        </div>
        <h3 className="mb-3 text-3xl font-bold text-gray-900">
          {solution.title}
        </h3>
        <p className="mb-6 text-lg text-gray-600">{solution.description}</p>
        <ul className="space-y-3">
          {solution.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <Check className="h-5 w-5 shrink-0 text-[#5a23b1]" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={isEven ? '' : 'lg:col-start-1'}>
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <img
            src={solution.image}
            alt={solution.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}
