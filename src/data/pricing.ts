import type { PricingPlan } from '../types/pricing'

export const pricingPlans: Array<PricingPlan> = [
  {
    name: 'Starter',
    price: '£49',
    period: '/month',
    description: 'Perfect for small takeaways and cafes',
    features: [
      { text: 'Online Ordering System', included: true },
      { text: 'Custom Website', included: true },
      { text: 'Your Own Domain', included: true },
      { text: 'Basic Analytics', included: true },
      { text: 'Email Support', included: true },
      { text: 'Mobile App', included: false },
      { text: 'Dine-in System', included: false },
      { text: 'Priority Support', included: false },
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '£98',
    period: '/month',
    description: 'Ideal for growing restaurants',
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Mobile App (iOS & Android)', included: true },
      { text: 'Advanced Analytics', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Multiple Locations', included: true },
      { text: 'Dine-in System', included: false },
      { text: 'Dedicated Account Manager', included: false },
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '£147',
    period: '/month',
    description: 'Complete solution for full-service restaurants',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Dine-in System with QR', included: true },
      { text: 'Marketing Consultancy', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'White-label Solutions', included: true },
      { text: '24/7 Phone Support', included: true },
      { text: 'Training & Onboarding', included: true },
    ],
    popular: false,
  },
]
