import {
  Check,
  Globe,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Zap,
} from 'lucide-react'
import type { ProductPageData } from '../types/product-page'

export const orderingPageData: ProductPageData = {
  title: 'Direct Ordering Platform',
  subtitle:
    'Take control of your online orders with a commission-free ordering system. Build direct relationships with your customers and keep 100% of your revenue.',
  ctaText: 'Start Your Free Trial',
  ctaLink: 'https://calendly.com/ahmedabdulalgane/tawila-ltd',
  features: [
    {
      icon: ShoppingBag,
      title: 'Zero Commission',
      description: 'Keep 100% of your revenue. No hidden fees, no commissions.',
    },
    {
      icon: Smartphone,
      title: 'Branded Mobile Apps',
      description: 'Custom iOS and Android apps with your restaurant branding.',
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description:
        'Instant order notifications and live tracking for customers.',
    },
    {
      icon: TrendingUp,
      title: 'Increase Revenue',
      description: 'Direct ordering leads to 2x more repeat customers.',
    },
    {
      icon: Globe,
      title: 'Custom Website',
      description: 'Beautiful, responsive ordering website with your domain.',
    },
    {
      icon: Check,
      title: 'Easy Integration',
      description: 'Seamlessly integrates with your existing kitchen workflow.',
    },
  ],
  benefits: [
    'Commission-free ordering - keep 100% of revenue',
    'Custom branded website and mobile apps',
    'Real-time order tracking and notifications',
    'Multiple payment methods supported',
    'Automated order routing to kitchen',
    'Customer loyalty program built-in',
    'Menu management made simple',
    '24/7 customer support',
  ],
  showcaseImage:
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  showcaseTitle: 'Built for Restaurant Success',
  showcaseDescription:
    'Our ordering platform is designed specifically for restaurants, with features that help you grow your business and improve customer satisfaction.',
}
