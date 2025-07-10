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
        {/* font-medium text-[56px] leading-[72px] tracking-[-4%] font-[Poppins]*/}
        <h3 className="font-medium text-6xl leading-[72px] tracking-[-4%] bg-gradient-to-t to-white from-[#999999] bg-clip-text text-transparent mt-6 mb-4">{value}</h3>
        {/* font-normal text-[20px] leading-[32px] font-[Poppins] */}
        <p className="font-normal text-xl leading-8 text-[#BDBDBD] h-8 (add fonts)">{label}</p>
      </div>
    </div>
  )
}

export default StatisticsCard;