"use client";

import Button from "@/components/ui/Button/Button";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface link {
    label: string;
    href: string;
}

interface NavLinksProps {
    links : link[]
}

const NavLinks = ({links} : NavLinksProps) => {

function ExpandingSearchComponent({ size = "sm", color = "blue", featured = false }: ExpandingSearchProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const getSizeClasses = () => {
    switch (size) {
      case "xs":
        return {
          expanded: "w-40", // 160px
          collapsed: "w-10 h-10",
          input: "text-sm",
          icon: "w-4 h-4",
        }
      case "sm":
        return {
          expanded: "w-50", // 200px
          collapsed: "w-11 h-11",
          input: "text-sm",
          icon: "w-4 h-4",
        }
      case "md":
        return {
          expanded: "w-60", // 240px
          collapsed: "w-12 h-12",
          input: "text-base",
          icon: "w-5 h-5",
        }
      default:
        return {
          expanded: "w-50",
          collapsed: "w-11 h-11",
          input: "text-sm",
          icon: "w-4 h-4",
        }
    }
  }

  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-500 hover:bg-blue-600",
          text: "text-white",
          placeholder: "placeholder-blue-200",
        }
      case "purple":
        return {
          bg: "bg-purple-500 hover:bg-purple-600",
          text: "text-white",
          placeholder: "placeholder-purple-200",
        }
      case "green":
        return {
          bg: "bg-green-500 hover:bg-green-600",
          text: "text-white",
          placeholder: "placeholder-green-200",
        }
      case "gray":
        return {
          bg: "bg-gray-600 hover:bg-gray-700",
          text: "text-white",
          placeholder: "placeholder-gray-300",
        }
      case "gradient":
        return {
          bg: "bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600",
          text: "text-white",
          placeholder: "placeholder-pink-200",
        }
      case "outline":
        return {
          bg: "bg-white border-2 border-gray-300 hover:border-gray-400",
          text: "text-gray-700",
          placeholder: "placeholder-gray-400",
        }
      case "white":
        return {
          bg: "bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30",
          text: "text-white",
          placeholder: "placeholder-white/70",
        }
      default:
        return {
          bg: "bg-blue-500 hover:bg-blue-600",
          text: "text-white",
          placeholder: "placeholder-blue-200",
        }
    }
  }

  const sizeClasses = getSizeClasses()
  const colorClasses = getColorClasses()

  return (
    <div className="relative">
      <div
        className={`p-[8px_10px] border border-solid   flex items-center rounded-full transition-all duration-500 ease-out bg-red-500 ${colorClasses.bg} ${
          isExpanded ? `${sizeClasses.expanded} px-3 py-2` : `w-40 h-12 ${sizeClasses.collapsed} cursor-pointer hover:scale-110`
        } ${featured ? "shadow-lg hover:shadow-xl" : ""}`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <Search className={`${sizeClasses.icon} ${colorClasses.text} flex-shrink-0 ${isExpanded ? "" : "mx-auto"}`} />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={`bg-transparent ${colorClasses.text} ${colorClasses.placeholder} outline-none transition-all duration-500 ${sizeClasses.input} ${
            isExpanded ? "w-full ml-2 opacity-100" : "w-0 opacity-0"
          }`}
          placeholder="Search..."
          onBlur={() => !searchValue && setIsExpanded(false)}
        />
        {isExpanded && searchValue && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSearchValue("")
              setIsExpanded(false)
            }}
            className={`ml-1 p-1 hover:bg-black/10 rounded-full transition-colors duration-200`}
          >
            <X className={`w-3 h-3 ${colorClasses.text}`} />
          </button>
        )}
      </div>

      {featured && isExpanded && (
        <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur animate-pulse"></div>
      )}
    </div>
  )
}


    
    return (
        <div className="flex items-center font-medium gap-4">
            {Array.isArray(links) && links.map((link,index) =>
            link?.label == "Search" ?
            (
                <ExpandingSearchComponent key={index} size="md" color="green" />
            ) 
            :
            link?.label == "Connect Wallet" ? (
                <Button
                    key={index}
                    label={link?.label}
                    variant="primary"
                    disable={false}
                ></Button>
            ) 
            :
            <Link key={index} href={link?.href} className="text-gray-50/90 text-md relative hover:text-[#ae6363] transition-colors duration-300 group">{link?.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#830707] group-hover:w-full transition-all duration-500"></span>
            </Link>
            )}
        </div>
    );
};

export default NavLinks;