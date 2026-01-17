import type { LucideIcon } from 'lucide-react'

export interface ProductFeature {
  icon?: LucideIcon
  text: string
}

export interface ProductStat {
  value: string
  label: string
}

export interface ProductDetails {
  id: string
  icon: LucideIcon
  title: string
  description: string
  features: Array<ProductFeature>
  image: string
  stat: ProductStat
  link: string
  imageLeft?: boolean
}
