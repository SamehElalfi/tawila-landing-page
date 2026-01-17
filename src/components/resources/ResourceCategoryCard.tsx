import { motion } from 'framer-motion'
import { createDelayedAnimation } from '../../utils/animations'
import type { ResourceCategory } from '../../types/resources'

interface ResourceCategoryCardProps {
  category: ResourceCategory
  index: number
}

export function ResourceCategoryCard({
  category,
  index,
}: ResourceCategoryCardProps) {
  const IconComponent = category.icon

  return (
    <motion.div
      {...createDelayedAnimation(index * 0.1)}
      className="rounded-xl border border-gray-100 p-6 text-center transition-shadow hover:shadow-lg"
    >
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
        <IconComponent className="h-8 w-8 text-[#5a23b1]" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{category.title}</h3>
      <p className="mb-3 text-gray-600">{category.description}</p>
      <span className="text-sm font-semibold text-[#5a23b1]">
        {category.count}
      </span>
    </motion.div>
  )
}
