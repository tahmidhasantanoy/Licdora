"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import Button from "@/components/ui/Button/Button";

interface singleBlog {
    id: number;
    image: string;
    date: string;
    category: string;
    title: string;
    categoryColor: string;
}

interface blogsDataProps {
    blogsData : singleBlog[]

}

const CryptoClient = ({blogsData} : blogsDataProps) => {

      const [visibleItems, setVisibleItems] = useState(3);

  const handleSeeMore = () => {
    setVisibleItems((previous) => previous + 3);
  }

  const blogData = {
    "title": "Latest Crypto Insights",
    "cards": [
        {
        "id": 1,
        "image": "/crypto-security.png",
        "date": "Mar 10, 2025",
        "category": "Security",
        "title": "Crypto Security: How to Keep Your Funds Safe",
        "categoryColor": "border-[#E59174] text-[#E59174]"
        },
        {
        "id": 2,
        "image": "/crypto-security.png",
        "date": "Feb 20, 2025",
        "category": "Crypto Basics",
        "title": "How to Quickly Understand Cryptocurrency Basics",
        "categoryColor": "border-[#E59174] text-[#E59174]"
        },
        {
        "id": 3,
        "image": "/crypto-security.png",
        "date": "Jan 01, 2025",
        "category": "Trends",
        "title": "Exploring the Great Future of Cryptocurrency",
        "categoryColor": "border-[#E59174] text-[#E59174]"
        },
        {
        "id": 4,
        "image": "/crypto-security.png",
        "date": "Jan 01, 2025",
        "category": "Trends",
        "title": "Exploring the Great Future of Cryptocurrency",
        "categoryColor": "border-[#E59174] text-[#E59174]"
        },
    ] 
        }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {blogsData?.slice(0,visibleItems).map((card) => (
                  <BlogCard
                    key={card.id}
                    image={card.image}
                    date={card.date}
                    category={card.category}
                    title={card.title}
                    categoryColor={card.categoryColor}
                  />
             ))}
            </div>
            {visibleItems < blogData?.cards.length && (
            <div className="text-center mt-8">
                <Button label="See More" variant="primary" handleFunc={handleSeeMore} disable={false}>
                </Button>
            </div>
            )}
      </div>
    );
};

export default CryptoClient;