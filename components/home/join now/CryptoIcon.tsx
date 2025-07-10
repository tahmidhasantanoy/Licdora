import { Bitcoin, User, Circle, DollarSign, Box, Waves, Flower, Triangle } from "lucide-react"

// Icon mapping for dynamic rendering
const iconMap = {
  bitcoin: Bitcoin,
  user: User,
  "circle-9": Circle,
  "dollar-sign": DollarSign,
  box: Box,
  waves: Waves,
  flower: Flower,
  triangle: Triangle,
}

const CryptoIcon =({
  name,
  icon,
  bgColor,
  iconColor,
}: {
  name: string
  icon: keyof typeof iconMap
  bgColor: string
  iconColor: string
}) => {
  const Icon = iconMap[icon]

  return (
    <div
      className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${bgColor} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}
      title={name}
    >
      <Icon className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${iconColor}`} />
    </div>
  )
}

export default CryptoIcon;