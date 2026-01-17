import { Building2, Coffee, Pizza, Utensils } from 'lucide-react'
import type { Solution } from '../types/resources'

export const solutions: Array<Solution> = [
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Elevate your fine dining experience with premium features',
    benefits: [
      'Table reservations',
      'Wine pairing suggestions',
      'Premium branding',
      'White-glove support',
    ],
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
  },
  {
    icon: Coffee,
    title: 'Cafes & Coffee Shops',
    description: 'Perfect for quick service and high volume orders',
    benefits: [
      'Quick order processing',
      'Loyalty programs',
      'Mobile ordering',
      'Multiple locations',
    ],
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
  },
  {
    icon: Pizza,
    title: 'Quick Service Restaurants',
    description: 'Fast-paced operations made simple',
    benefits: [
      'Delivery management',
      'Kitchen display',
      'Order tracking',
      'Peak hour optimization',
    ],
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
  },
  {
    icon: Building2,
    title: 'Multi-Location Chains',
    description: 'Centralized management for restaurant groups',
    benefits: [
      'Unified dashboard',
      'Cross-location analytics',
      'Centralized menu',
      'Franchise support',
    ],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
  },
]
