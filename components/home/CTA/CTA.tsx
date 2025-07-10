import { Button } from "@/components/ui/button"
import StatCard from "./StatCard";
import { Section } from "lucide-react";
import SectionHeader from "@/components/shared components/sectionHeader";

const CTASection = () => {

  const sectionHeaderData = {
    "sectionTitle": "Start Your Crypto Journey with Bulipe Exchange Today!",
    "sectionDescription": "Join Coinzy and simplify your cryptocurrency journey!",
    "isCentered": true
  }

    const ctaData = {
  "title": "Start Your Crypto Journey with Bulipe Exchange Today!",
  "subtitle": "Join Coinzy and simplify your cryptocurrency journey!",
  "statistics": [
    {
      "id": 1,
      "icon": "trending-up",
      "label": "24h Volume",
      "value": "$12.5M",
      "iconColor": "text-orange-500"
    },
    {
      "id": 2,
      "icon": "bar-chart-3",
      "label": "Total Value Locked",
      "value": "$1.2B",
      "iconColor": "text-orange-500"
    },
    {
      "id": 3,
      "icon": "trending-up",
      "label": "Total Trades",
      "value": "125K",
      "iconColor": "text-orange-500"
    }
  ],
  "cta": {
    "text": "Get Started",
    "href": "/signup"
  }
}

  return (
    <section className="bg-black py-16 px-4 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <SectionHeader sectionHeaderData={sectionHeaderData} />

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center my-14">
          {ctaData.statistics.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon as keyof typeof iconMap}
              label={stat.label}
              value={stat.value}
              iconColor={stat.iconColor}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {ctaData.cta.text}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection;
