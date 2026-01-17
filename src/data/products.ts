import {
  BarChart3,
  CreditCard,
  Globe,
  ShoppingBag,
  Smartphone,
  Tablet,
  TrendingUp,
} from 'lucide-react'
import type { ProductDetails } from '../types/product'

export const products: Array<ProductDetails> = [
  {
    id: 'ordering',
    icon: ShoppingBag,
    title: 'Direct Ordering Platform',
    description:
      'Take control of your online orders with a commission-free ordering system. Build direct relationships with your customers and keep 100% of your revenue.',
    features: [
      { icon: Smartphone, text: 'Branded mobile apps (iOS & Android)' },
      { icon: Globe, text: 'Custom ordering website' },
      { icon: CreditCard, text: 'Multiple payment options' },
      { icon: TrendingUp, text: 'Real-time order tracking' },
    ],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    stat: { value: '0%', label: 'Commission' },
    link: '/ordering',
    imageLeft: false,
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & Insights',
    description:
      "Make data-driven decisions with powerful analytics that reveal opportunities for growth. See what's working and what's not in real-time.",
    features: [
      { text: 'Real-time sales dashboards' },
      { text: 'Customer behavior analysis' },
      { text: 'Menu performance tracking' },
      { text: 'Revenue forecasting' },
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    stat: { value: '50+', label: 'Metrics' },
    link: '/analytics',
    imageLeft: true,
  },
  {
    id: 'pos',
    icon: Tablet,
    title: 'Point of Sale System',
    description:
      'A modern POS system designed for restaurants. Fast, reliable, and packed with features to help you serve customers better and run operations smoothly.',
    features: [
      { text: 'Lightning-fast order processing' },
      { text: 'Table management & floor plans' },
      { text: 'Kitchen display integration' },
      { text: 'Works offline' },
    ],
    image:
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
    stat: { value: '3x', label: 'Faster' },
    link: '/pos',
    imageLeft: false,
  },
]
