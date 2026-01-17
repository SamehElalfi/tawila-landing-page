import { motion } from 'framer-motion'
import { createDelayedAnimation } from '../../utils/animations'
import type { CompanyValue } from '../../types/about'

interface ValueCardProps {
  value: CompanyValue
  index: number
}

export function ValueCard({ value, index }: ValueCardProps) {
  const IconComponent = value.icon

  return (
    <motion.div
      {...createDelayedAnimation(index * 0.1)}
      className="rounded-xl bg-white p-6 shadow-lg"
    >
      <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3">
        <IconComponent className="h-6 w-6 text-[#5a23b1]" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
      <p className="text-gray-600">{value.description}</p>
    </motion.div>
  )
}
