import { Check, CreditCard, Tablet, Users, Wifi, Zap } from 'lucide-react'
import type { ProductPageData } from '../types/product-page'

export const posPageData: ProductPageData = {
  title: 'Point of Sale System',
  subtitle:
    'A modern POS system designed for restaurants. Fast, reliable, and packed with features to help you serve customers better and run operations smoothly.',
  ctaText: 'Request a Demo',
  ctaLink: 'https://calendly.com/ahmedabdulalgane/tawila-ltd',
  features: [
    {
      icon: Tablet,
      title: 'Modern Interface',
      description:
        'Intuitive touchscreen interface designed for speed and efficiency.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Process orders in seconds, reducing wait times and improving service.',
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Multiple staff members can use the system simultaneously.',
    },
    {
      icon: CreditCard,
      title: 'All Payment Types',
      description: 'Accept cash, cards, contactless, and digital wallets.',
    },
    {
      icon: Wifi,
      title: 'Offline Mode',
      description:
        'Continue taking orders even when internet connection drops.',
    },
    {
      icon: Check,
      title: 'Easy Training',
      description: 'Get your staff up and running in minutes, not days.',
    },
  ],
  benefits: [
    'Quick order entry with visual menu',
    'Table management and floor plans',
    'Split bills and group payments',
    'Integrated payment processing',
    'Kitchen display system (KDS) sync',
    'Menu management and modifications',
    'Customer loyalty program',
    'Detailed sales reporting',
  ],
  showcaseImage:
    'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
  showcaseTitle: 'Streamline Your Operations',
  showcaseDescription:
    'Speed up service, reduce errors, and give your staff the tools they need to deliver exceptional customer experiences.',
}
