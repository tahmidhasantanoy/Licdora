"use client"
import Link from "next/link"
import React from "react"
import { useState } from "react"

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterData {
  newsletter: {
    title: string
    description: string
    placeholder: string
  }
  sections: FooterSection[]
  copyright: string
  brandName: string
}

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle email submission logic here
    setEmail("")
  }

  const footerData : FooterData = {
  "newsletter": {
    "title": "Subscribe for Updates",
    "description": "Stay updated with the latest news in cryptocurrency.",
    "placeholder": "Enter your email"
  },
  "sections": [
    {
      "title": "Company",
      "links": [
        { "label": "Company Details", "href": "/company" },
        { "label": "Mission", "href": "/mission" },
        { "label": "Values", "href": "/values" }
      ]
    },
    {
      "title": "Resources",
      "links": [
        { "label": "About Us", "href": "/about" },
        { "label": "FAQs", "href": "/faqs" },
        { "label": "Support Center", "href": "/support" },
        { "label": "Contact Us", "href": "/contact" }
      ]
    },
    {
      "title": "Legal",
      "links": [{ "label": "Privacy Policy", "href": "/privacy" }, { "label": "Terms of Service", "href": "/terms" }]
    },
    {
      "title": "Connect",
      "links": [
        { "label": "Instagram", "href": "https://instagram.com" },
        { "label": "Facebook", "href": "https://facebook.com" },
        { "label": "LinkedIn", "href": "https://linkedin.com" },
        { "label": "Twitter/X", "href": "https://twitter.com" }
      ]
    }
  ],
  "copyright": "© 2025 Licdora. All Rights Reserved.",
  "brandName": "Bulipe Exchange"
}


  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Newsletter section */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-2 leading-24">{footerData.brandName}</h2>
            <h3 className="font-medium text-2xl leading-8 mb-3 ">{footerData.newsletter.title}</h3>
            <p className="text-[#9E9E9E] font-normal text-lg leading-7 mb-6">{footerData.newsletter.description}</p>

            <form
            onSubmit={handleSubmit}
            className="relative flex flex-col border border-white border-opacity-100 rounded-full bg-gray-900 text-white w-[330px] h-[56px]"
          >
            <button
              type="submit"
              className="absolute right-1 top-1 self-end bg-orange-500 hover:bg-orange-600 text-[#1A1A1A] text-sm px-3 rounded-full transition duration-200 w-[73px] h-[45px]"
            >
              Send
            </button>
            <input
              type="email"
              placeholder={footerData.newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-900 border border-[#1A1A1A] text-white placeholder:text-gray-500 rounded-full px-4 py-2 w-[328px] h-[56px]"
              required
            />
          </form>
          </div>

          {/* Footer sections */}
          {footerData.sections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-xl mb-6 font-normal leading-8">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-[#9E9E9E] hover:text-white transition-colors duration-200 font-normal text-lg leading-7">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
