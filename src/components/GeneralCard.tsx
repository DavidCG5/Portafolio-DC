import { ReactNode } from 'react'

interface GeneralCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function GeneralCard({ icon, title, description }: GeneralCardProps) {
    return (
      <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl shadow-md space-y-2">
        <div className="flex items-center gap-3 text-blue-300">
          {icon}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </div>
    )
  }