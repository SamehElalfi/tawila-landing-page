import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { createDelayedAnimation } from '../../utils/animations'
import type { PricingPlan } from '../../types/pricing'

interface PricingCardProps {
  plan: PricingPlan
  index: number
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      {...createDelayedAnimation(index * 0.15)}
      className={`relative rounded-2xl p-8 ${
        plan.popular
          ? 'scale-105 bg-[#5a23b1] text-white shadow-2xl ring-2 ring-[#5a23b1]'
          : 'bg-gray-50 text-gray-900'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-purple-400 to-pink-400 px-4 py-1 text-sm font-semibold text-white">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3
          className={`mb-2 text-sm font-semibold uppercase tracking-wider ${
            plan.popular ? 'text-purple-200' : 'text-gray-500'
          }`}
        >
          {plan.name}
        </h3>
        <div className="mb-2">
          <span className="text-5xl font-bold">{plan.price}</span>
          <span className={`text-lg ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
            {plan.period}
          </span>
        </div>
        <p className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
          {plan.description}
        </p>
      </div>

      <ul className="mb-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-3">
            {feature.included ? (
              <Check
                className={`h-5 w-5 shrink-0 ${plan.popular ? 'text-white' : 'text-[#5a23b1]'}`}
              />
            ) : (
              <X
                className={`h-5 w-5 shrink-0 ${plan.popular ? 'text-purple-300' : 'text-gray-300'}`}
              />
            )}
            <span
              className={`text-sm ${
                feature.included
                  ? plan.popular
                    ? 'text-white'
                    : 'text-gray-700'
                  : plan.popular
                    ? 'text-purple-300'
                    : 'text-gray-400'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfFbO3qsAFcuD0pApU3Vlth8L_ZnvJnEiIdl4U_wEyd_7p-iQ/viewform?usp=preview"
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-all ${
          plan.popular
            ? 'bg-white text-[#5a23b1] hover:bg-gray-100'
            : 'bg-[#5a23b1] text-white hover:bg-[#4a1d91]'
        }`}
      >
        Get Started
      </a>
    </motion.div>
  )
}
