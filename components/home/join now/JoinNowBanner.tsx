/* eslint-disable @typescript-eslint/no-unused-vars */
import { Bitcoin, User, Circle, DollarSign, Box, Waves, Flower, Triangle } from "lucide-react"
import CryptoIcon from "./CryptoIcon"

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


const JoinNowBanner = () => {

    const showcaseData = {
    "title": "Join millions of others and start earning profit from Bulipe Exchange today!",
    "cryptocurrencies": [
     {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "icon": "bitcoin",
        "bgColor": "bg-orange-500",
        "iconColor": "text-white"
        },
        {
          "id": 2,
          "name": "User Avatar",
          "symbol": "USER",
          "icon": "user",
          "bgColor": "bg-pink-300",
          "iconColor": "text-gray-800"
        },
        {
          "id": 3,
          "name": "Nine Protocol",
          "symbol": "NINE",
          "icon": "circle-9",
          "bgColor": "bg-purple-500",
          "iconColor": "text-white"
        },
        {
          "id": 4,
          "name": "Dollar Coin",
          "symbol": "USDC",
          "icon": "dollar-sign",
          "bgColor": "bg-blue-500",
          "iconColor": "text-white"
        },
        {
          "id": 5,
          "name": "Cube Token",
          "symbol": "CUBE",
          "icon": "box",
          "bgColor": "bg-blue-600",
          "iconColor": "text-white"
        },
        {
          "id": 6,
          "name": "Wave Protocol",
          "symbol": "WAVE",
          "icon": "waves",
          "bgColor": "bg-cyan-500",
          "iconColor": "text-white"
        },
        {
          "id": 7,
          "name": "Ripple",
          "symbol": "XRP",
          "icon": "flower",
          "bgColor": "bg-blue-400",
          "iconColor": "text-white"
        },
        {
          "id": 8,
          "name": "Tether",
          "symbol": "USDT",
          "icon": "triangle",
          "bgColor": "bg-teal-400",
          "iconColor": "text-white"
        }
    ]
    }

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto">
            {showcaseData.title}
          </h1>
        </div>

        {/* Cryptocurrency Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
          {showcaseData.cryptocurrencies.map((crypto) => (
            <CryptoIcon
              key={crypto.id}
              name={crypto.name}
              icon={crypto.icon as keyof typeof iconMap}
              bgColor={crypto.bgColor}
              iconColor={crypto.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinNowBanner;
