"use client";

import StatCard from "./StatCard";
import SectionHeader from "@/components/shared components/sectionHeader";
import Button from "@/components/ui/Button/Button";

const CTASection = () => {

  const sectionHeaderData = {
    "sectionTitle": "Start Your Crypto Journey with Bulipe Exchange Today!",
    "sectionDescription": "Join Coinzy and simplify your cryptocurrency journey!",
    "isCentered": true
  }

  const ctaData = {
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

      {/* Background SVG */}
      <div className="absolute top-0 left-0 w-full h-[350px] z-0">
      <svg
        viewBox="0 0 500 125"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B0000" stopOpacity="1" />
            <stop offset="25%" stopColor="#600000" stopOpacity="1" />
            <stop offset="60%" stopColor="#2B0000" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path d="M-10,80 Q250,0 510,80 L510,125 L-10,125 Z" fill="url(#grad1)" />
        {/* top left = 510,  bottom left = 510*, bottom right = -10, top right = */}
      </svg>
    </div>
      {/* End Background SVG */}

    <div className="relative z-10 max-w-6xl mx-auto pt-10">
      {/* Section content goes here */}
      <SectionHeader sectionHeaderData={sectionHeaderData} />

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

    <div className="text-center">
      <Button
        label={ctaData.cta.text}
        variant="primary"
        type="button"
        disable={false}
        handleFunc={() => {
          console.log("CTA Button clicked");
        }}
      />
    </div>
  </div>
</section>

  )
}

export default CTASection;
