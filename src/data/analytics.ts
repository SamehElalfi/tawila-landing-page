import {
  Activity,
  BarChart3,
  Check,
  LineChart,
  PieChart,
  TrendingUp,
} from 'lucide-react'
import type { ProductPageData } from '../types/product-page'

export const analyticsPageData: ProductPageData = {
  title: 'Analytics & Insights',
  subtitle:
    "Make data-driven decisions with powerful analytics that reveal opportunities for growth. See what's working and what's not in real-time.",
  ctaText: 'See Analytics in Action',
  ctaLink: 'https://calendly.com/ahmedabdulalgane/tawila-ltd',
  features: [
    {
      icon: BarChart3,
      title: 'Real-Time Dashboards',
      description:
        'Monitor sales, orders, and performance in real-time with intuitive dashboards.',
    },
    {
      icon: TrendingUp,
      title: 'Sales Tracking',
      description:
        'Track your revenue and sales performance across all channels.',
    },
    {
      icon: PieChart,
      title: 'Customer Insights',
      description:
        'Understand customer behavior, preferences, and ordering patterns.',
    },
    {
      icon: Activity,
      title: 'Performance Metrics',
      description: 'Track KPIs that matter most to your restaurant business.',
    },
    {
      icon: LineChart,
      title: 'Trend Analysis',
      description: 'Identify trends and opportunities to grow your revenue.',
    },
    {
      icon: Check,
      title: 'Custom Reports',
      description: 'Generate detailed reports tailored to your business needs.',
    },
  ],
  benefits: [
    'Real-time sales and revenue tracking',
    'Customer lifetime value analysis',
    'Menu item performance rankings',
    'Peak hours and demand patterns',
    'Staff productivity metrics',
    'Profit margin by item/category',
    'Customer retention rates',
    'Marketing campaign effectiveness',
  ],
  showcaseImage:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  showcaseTitle: 'Data-Driven Decision Making',
  showcaseDescription:
    'Transform your data into actionable insights that drive growth and improve profitability.',
}
