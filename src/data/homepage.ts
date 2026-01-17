import { BarChart3, Package, ShoppingBag } from 'lucide-react'
import type { Feature, Resource, Testimonial } from '../types/common'

export const trustBarBrands = [
  'https://tawila-vault.s3.eu-north-1.amazonaws.com/01962ebb-4b46-78f6-b5e2-e554b512463e.avif',
  'https://imagedelivery.net/om7lG0lN91mifFHl_A941A/123d4f69-772e-40b6-e414-a4e5e05b7900/public',
  'https://toctive-medisync.s3.me-central-1.amazonaws.com/menu-items/01957109-dd42-7022-a36a-fd1ced0b7bb8..avif',
  'https://tawila-vault.s3.eu-north-1.amazonaws.com/01976b0d-5eb4-75fb-be6a-69b7758bb6b1.jpeg',
  'https://tawila-vault.s3.eu-north-1.amazonaws.com/01984d88-7e79-7cda-a976-d2e58aa31356.png',
]

export const valuePropositionFeatures: Array<Feature> = [
  {
    icon: ShoppingBag,
    title: '0% Commission Ordering',
    description:
      'Keep 100% of your revenue with our direct ordering platform. Web, iOS, and Android apps with your branding.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Package,
    title: 'Complete POS System',
    description:
      'Modern cashier and back-office system designed specifically for restaurant owners. Easy to use, powerful features.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Analytics',
    description:
      'All your sales data and performance metrics in one place. Make informed decisions to grow your business.',
    color: 'bg-purple-100 text-purple-600',
  },
]

export const featureHighlights = [
  {
    title: 'Commission-Free Ordering',
    description:
      'Take control of your online presence with a complete ordering system that keeps 100% of your revenue.',
    bullets: [
      'Zero commission fees - keep every penny',
      'Branded website, iOS & Android mobile apps',
      'Real-time order tracking and notifications',
      'Custom promotions and notifications',
    ],
    stats: [
      { value: '0%', label: 'Commission' },
      { value: '100%', label: 'Your Revenue' },
      { value: '48h', label: 'Setup Time' },
    ],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    imageLeft: false,
    gradient: 'from-purple-600 to-purple-400',
    icon: ShoppingBag,
  },
  {
    title: 'Modern POS System',
    description:
      'Complete point-of-sale and back-office system designed to be easy and intuitive for restaurant owners.',
    bullets: [
      'Fast order processing and payment handling',
      'Menu management and modifications',
      'Dine-in and pick-up system integration',
      'Works seamlessly with ordering platform',
    ],
    stats: [
      { value: '3x', label: 'Faster' },
      { value: 'Easy', label: 'To Use' },
      { value: '24/7', label: 'Support' },
    ],
    image:
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
    imageLeft: true,
    gradient: 'from-purple-500 to-violet-500',
    icon: Package,
  },
  {
    title: 'Reporting & Analytics',
    description:
      'Comprehensive reporting and analytics to help you understand your business and make informed decisions.',
    bullets: [
      'Real-time sales dashboards and reports',
      'Customer ordering patterns and insights',
      'Revenue and performance tracking',
      'Fully integrated with all systems',
    ],
    stats: [
      { value: 'Live', label: 'Updates' },
      { value: 'All Data', label: 'In One Place' },
      { value: 'Easy', label: 'Reports' },
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    imageLeft: false,
    gradient: 'from-purple-700 to-indigo-600',
    icon: BarChart3,
  },
]

export const testimonials: Array<Testimonial> = [
  {
    quote:
      'Tawila completely transformed our business. No more pen and paper, everything is digital and organized.',
    name: 'Alostora',
    restaurant: 'Restaurant Owner',
    avatar: 'https://i.pravatar.cc/150?img=1',
    metric: '⬆ 2x Revenue Every 3 Months',
  },
  {
    quote:
      'Finally, a system built for people like us. Easy to use and no commission fees eating into our profits.',
    name: 'Restaurant Owner',
    restaurant: 'Ethnic Cuisine',
    avatar: 'https://i.pravatar.cc/150?img=2',
    metric: '0% Commission Fees',
  },
  {
    quote:
      'The support team truly understands our challenges. They listen and help us grow.',
    name: 'Small Business Owner',
    restaurant: 'Family Restaurant',
    avatar: 'https://i.pravatar.cc/150?img=3',
    metric: '£1,500+ Saved',
  },
]

export const resources: Array<Resource> = [
  {
    tag: 'Guide',
    title: 'How to Get Your First 100 Orders',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
  },
  {
    tag: 'Article',
    title: 'Marketing Your Restaurant in 2026',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
  },
  {
    tag: 'Case Study',
    title: 'How Alostora Achieved 2x Growth with Tawila',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
  },
]
