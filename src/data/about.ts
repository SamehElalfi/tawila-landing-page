import { Award, Heart, Target, Users } from 'lucide-react'
import type { CompanyStat, CompanyValue, TeamMember } from '../types/about'

export const companyValues: Array<CompanyValue> = [
  {
    icon: Heart,
    title: 'Customer First',
    description:
      'We put restaurant owners at the heart of everything we do, building solutions that truly solve their problems.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description:
      'Constantly pushing boundaries to bring the latest technology and best practices to the restaurant industry.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Building a supportive community of restaurant owners who learn and grow together.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Committed to delivering exceptional quality in every aspect of our platform and service.',
  },
]

export const teamMembers: Array<TeamMember> = [
  {
    name: 'Ahmed Mohammed',
    role: 'Co-Founder & COO',
    bio: 'Ex-dish-washer, Ex-food-deliverer',
    image: '/ahmed-mohammed.jpeg',
    linkedin: 'https://www.linkedin.com/in/ahmed-mohamed-193005242/',
  },
  {
    name: 'Ahmed Elsir',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Chef, Ex-food-deliverer',
    image: '/ahmed-elsir.jpeg',
    linkedin: 'https://www.linkedin.com/in/aelsir/',
  },
]

export const companyStats: Array<CompanyStat> = [
  { value: '7+', label: 'Active Restaurants' },
  { value: '0%', label: 'Commission Fees' },
  { value: '£1,500+', label: 'Saved by Customers' },
  { value: '48h', label: 'Average Setup' },
]

export const ourStory = [
  'We are Sudanese. We both ran businesses back in Sudan. Starting over in a new country, we experienced firsthand the challenges of navigating unfamiliar systems.',
  'We watched our friends—brilliant chefs who had also fled conflict—struggle with the same barriers. They could create incredible food, but they faced unfamiliar systems and technology companies failed to meet their needs.',
  'We saw how third-party delivery apps were taking 15-35% of hard-earned revenue, making it nearly impossible for small restaurants to thrive. We knew there had to be a better way.',
  'And that\'s why we started Tawila in 2024. Tawila means "Restaurant\'s Table" in Arabic, a metaphor for togetherness. We provide a complete operating system designed specifically for immigrant restaurant owners—with zero commission fees, transparent pricing, and support from people who truly understand the journey.',
  'Our goal is simple: Help restaurant owners from day zero, from getting their first 100 orders to scaling sustainably.',
]
