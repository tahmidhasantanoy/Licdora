import { EclipseIcon as Ethereum, DollarSign, Coins, Box, Smartphone, CuboidIcon as Cube } from "lucide-react"

const iconMap = {
  ethereum: Ethereum,
  "dollar-sign": DollarSign,
  coins: Coins,
  box: Box,
  smartphone: Smartphone,
  cube: Cube,
}

// Reusable Statistics Card Component
const StatisticsCard =({
  value,
  icon,
  bgColor,
  label
}: {
  value: string
  icon: keyof typeof iconMap
  bgColor: string
  label : string
}) => {
  const Icon = iconMap[icon]

  return (
    <div className="text-center">
      <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl ${bgColor} flex items-center justify-center shadow-lg`}>
        <Icon className="w-12 h-12 text-white" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold text-white">{value}</h3>
        <p className="text-[#BDBDBD] w-42 h-8 opacity-100 font-poppins(add fonts) font-normal text-xl leading-[32px] tracking-[0%]">{label}</p>
      </div>
    </div>
  )
}

export default StatisticsCard;