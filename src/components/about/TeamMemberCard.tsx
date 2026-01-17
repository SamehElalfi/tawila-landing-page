import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { createDelayedAnimation } from '../../utils/animations'
import type { TeamMember } from '../../types/about'

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      {...createDelayedAnimation(index * 0.1)}
      className="text-center"
    >
      <div className="group relative mx-auto mb-6 h-64 w-64">
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-400 to-purple-600 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
        <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-purple-100 transition-all duration-500 group-hover:ring-8 group-hover:ring-purple-200">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-purple-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
      <h3 className="mb-2 text-2xl font-bold text-gray-900">{member.name}</h3>
      <p className="mb-2 text-lg font-semibold text-[#5a23b1]">{member.role}</p>
      <p className="mb-4 text-gray-600">{member.bio}</p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#5a23b1] transition-all hover:gap-3 hover:text-[#4a1d91]"
      >
        <Linkedin className="h-5 w-5" />
        Connect on LinkedIn
      </a>
    </motion.div>
  )
}
