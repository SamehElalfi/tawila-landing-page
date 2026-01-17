import type { LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

export interface Testimonial {
  quote: string
  name: string
  restaurant: string
  avatar: string
  metric: string
}

export interface Resource {
  tag: string
  title: string
  image: string
}
