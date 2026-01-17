import type { LucideIcon } from 'lucide-react'

export interface CompanyValue {
  icon: LucideIcon
  title: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
}

export interface CompanyStat {
  value: string
  label: string
}
