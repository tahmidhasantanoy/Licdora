import { Card } from "@/components/ui/card"
import { TrendingUp, BarChart3 } from "lucide-react"

// Icon mapping for dynamic rendering
const iconMap = {
  "trending-up": TrendingUp,
  "bar-chart-3": BarChart3,
}

// Reusable Statistics Card Component
const StatCard = ({
  icon,
  label,
  value,
  iconColor,
}: {
  icon: keyof typeof iconMap
  label: string
  value: string
  iconColor: string
}) => {
  const Icon = iconMap[icon]

  return (
    <Card className="bg-white w-[8.5rem] h-[7.5rem] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <div className="flex items-center gap-1">
          <Icon className={`w-5 h-5 ${iconColor}`} />
          <div className="font-normal text-sm text-[#6B7280] leading-4">
            {label}
          </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <p className="font-semibold text-2xl md:text-3xl leading-8 text-black">{value}</p>
      </div>
      </div>
    </Card>
  )
}

export default StatCard;