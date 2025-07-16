/* eslint-disable @typescript-eslint/no-unused-vars */
import { EclipseIcon as Ethereum, DollarSign, Coins, Box, Smartphone, CuboidIcon as Cube } from "lucide-react"
import ExchangePairCard from "./ExchangePairCard";
import StatisticsCard from "./StatisticsCard";
import SectionHeader from "@/components/shared components/sectionHeader";

const iconMap = {
  ethereum: Ethereum,
  "dollar-sign": DollarSign,
  coins: Coins,
  box: Box,
  smartphone: Smartphone,
  cube: Cube,
}
const TrendingSection = () => {

    const sectionHeaderData = {
        sectionHeader : "No header",
        sectionTitle : "Trending Exchange Pairs",
        sectionDescription : "Discover the most popular exchange pairs in the crypto market.",
        isCentered : true,
    }

    const trendingPairsData = {
  "title": "Trending Exchange Pairs.",
  "exchangePairs": [
    {
      "id": 1,
      "pair": "ETH-USDC",
      "icon1": "ethereum",
      "icon2": "dollar-sign",
      "color1": "bg-gray-700",
      "color2": "bg-blue-500"
    },
    {
      "id": 2,
      "pair": "ETH-USDC",
      "icon1": "ethereum",
      "icon2": "dollar-sign",
      "color1": "bg-green-500",
      "color2": "bg-blue-500"
    },
    {
      "id": 3,
      "pair": "ETH-USDT",
      "icon1": "ethereum",
      "icon2": "dollar-sign",
      "color1": "bg-gray-700",
      "color2": "bg-green-500"
    },
    {
      "id": 4,
      "pair": "AUXT-ETH",
      "icon1": "coins",
      "icon2": "ethereum",
      "color1": "bg-yellow-500",
      "color2": "bg-gray-700"
    }
  ],
  "statistics": [
    {
      "id": 1,
      "value": "500K+",
      "icon": "box",
      "bgColor": "bg-gradient-to-br from-green-400 to-blue-500",
      "label" : "Active Users"
    },
    {
      "id": 2,
      "value": "100+",
      "icon": "smartphone",
      "bgColor": "bg-gradient-to-br from-blue-500 to-purple-500",
      "label" : "Supported Cryptocurrencies"
    },
    {
      "id": 3,
      "value": "$1B+",
      "icon": "coins",
      "bgColor": "bg-gradient-to-br from-blue-500 to-pink-500",
      "label" : "Assets Managed"
    },
    {
      "id": 4,
      "value": "100K+",
      "icon": "cube",
      "bgColor": "bg-gradient-to-br from-green-400 to-blue-600",
      "label" : "Trade Transactions"
    }
  ]
    }

  return (
    // mergin added for every section spacing = my-24
    <section className="bg-black py-16 my-24 px-4">
      {/* width problem solved here */}
      <div className=".max-w-7xl mx-auto">

        {/* Section Header */}
        <SectionHeader sectionHeaderData={sectionHeaderData}/>

        {/* Exchange Pairs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 mb-16">
          {trendingPairsData.exchangePairs.map((pair) => (
            <ExchangePairCard
              key={pair.id}
              pair={pair.pair}
              icon1={pair.icon1 as keyof typeof iconMap}
              icon2={pair.icon2 as keyof typeof iconMap}
              color1={pair.color1}
              color2={pair.color2}
            />
          ))}
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trendingPairsData.statistics.map((stat) => (
            <StatisticsCard
              key={stat.id}
              value={stat.value}
              icon={stat.icon as keyof typeof iconMap}
              bgColor={stat.bgColor}
              label ={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingSection;