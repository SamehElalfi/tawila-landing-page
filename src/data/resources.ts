import { BookOpen, FileText, Headphones, Video } from 'lucide-react'
import type { ResourceArticle, ResourceCategory } from '../types/resources'

export const resourceCategories: Array<ResourceCategory> = [
  {
    icon: BookOpen,
    title: 'Guides & Tutorials',
    description: 'Step-by-step guides to help you get the most out of Tawila',
    count: '24 resources',
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Watch and learn from our comprehensive video library',
    count: '15 videos',
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real success stories from restaurants like yours',
    count: '12 case studies',
  },
  {
    icon: Headphones,
    title: 'Support Center',
    description: '24/7 support and documentation for all your questions',
    count: 'Always available',
  },
]

export const resourceArticles: Array<ResourceArticle> = [
  {
    category: 'Guide',
    title: '10 Tips to Optimize Your Restaurant Menu',
    excerpt:
      'Learn how to design a menu that maximizes profits and delights customers',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    readTime: '5 min read',
  },
  {
    category: 'Case Study',
    title: 'How Bella Italia Increased Revenue by 40%',
    excerpt:
      'Discover how this popular restaurant chain transformed their operations',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    readTime: '8 min read',
  },
  {
    category: 'Tutorial',
    title: 'Setting Up Your First Online Menu',
    excerpt: 'A complete walkthrough for creating your first menu in Tawila',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
    readTime: '10 min read',
  },
  {
    category: 'Guide',
    title: 'Reducing Food Waste in Your Kitchen',
    excerpt: 'Practical strategies to minimize waste and maximize efficiency',
    image:
      'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=400&h=300&fit=crop',
    readTime: '6 min read',
  },
  {
    category: 'Article',
    title: 'Understanding Restaurant Analytics',
    excerpt: 'Key metrics every restaurant owner should track',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    readTime: '7 min read',
  },
  {
    category: 'Tutorial',
    title: 'Integrating with Delivery Platforms',
    excerpt: 'Connect your restaurant with major delivery services seamlessly',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    readTime: '4 min read',
  },
]
