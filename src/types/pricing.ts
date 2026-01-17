export interface PlanFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: Array<PlanFeature>
  popular: boolean
}
