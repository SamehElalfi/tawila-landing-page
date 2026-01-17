import type { LucideIcon } from 'lucide-react'

export interface ResourceCategory {
  icon: LucideIcon
  title: string
  description: string
  count: string
}

export interface ResourceArticle {
  category: string
  title: string
  excerpt: string
  image: string
  readTime: string
}

export interface Solution {
  icon: LucideIcon
  title: string
  description: string
  benefits: Array<string>
  image: string
}
