import { EclipseIcon as Ethereum, DollarSign, Coins, Box, Smartphone, CuboidIcon as Cube } from "lucide-react"

const iconMap = {
  ethereum: Ethereum,
  "dollar-sign": DollarSign,
  coins: Coins,
  box: Box,
  smartphone: Smartphone,
  cube: Cube,
}

const ExchangePairCard = ({
  pair,
  icon1,
  icon2,
  color1,
  color2,
}: {
  pair: string
  icon1: keyof typeof iconMap
  icon2: keyof typeof iconMap
  color1: string
  color2: string
}) => {
  const Icon1 = iconMap[icon1]
  const Icon2 = iconMap[icon2]

  return (
    <div className="bg-gray-800 border-gray-700 p-4 hover:bg-gray-750 transition-colors">
      <div className="flex items-center gap-3">
        <div className="flex items-center -space-x-2">
          <div className={`w-8 h-8 rounded-full ${color1} flex items-center justify-center`}>
            <Icon1 className="w-4 h-4 text-white" />
          </div>
          <div className={`w-8 h-8 rounded-full ${color2} flex items-center justify-center border-2 border-gray-800`}>
            <Icon2 className="w-4 h-4 text-white" />
          </div>
        </div>
        <span className="text-white font-medium">{pair}</span>
      </div>
    </div>
  )
}

export default ExchangePairCard;