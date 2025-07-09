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

  /* 
  width: 138.65625;
height: 120;
angle: 0 deg;
opacity: 1;

  */

  return (
    <Card className="bg-white w-36 h-32 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-3 mb-3">
        <Icon className={`w-5 h-5 ${iconColor} mt-1`} />
        <div className="text-gray-600 text-sm font-medium">{label}</div>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-gray-900">{value}</div>
    </Card>
  )
}

export default StatCard;