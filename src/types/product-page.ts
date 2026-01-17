import type { LucideIcon } from 'lucide-react'

export interface ProductPageFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ProductPageData {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  features: Array<ProductPageFeature>
  benefits: Array<string>
  showcaseImage?: string
  showcaseTitle?: string
  showcaseDescription?: string
}
