import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { createDelayedAnimation } from '../../utils/animations'
import type { ResourceArticle } from '../../types/resources'

interface ResourceArticleCardProps {
  article: ResourceArticle
  index: number
}

export function ResourceArticleCard({
  article,
  index,
}: ResourceArticleCardProps) {
  return (
    <motion.article
      {...createDelayedAnimation(index * 0.1)}
      className="overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#5a23b1]">
          {article.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {article.title}
        </h3>
        <p className="mb-4 text-gray-600">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{article.readTime}</span>
        </div>
      </div>
    </motion.article>
  )
}
