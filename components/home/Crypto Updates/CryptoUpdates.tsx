import { Suspense } from "react";
import CryptoClient from "./CryptoClient";

const CryptoUpdates = () => {

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
    // margin added for every section spacing = my-16
    <section className="bg-black py-16 my-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<p className="text-7xl text-red-600">loading</p>}>
          <CryptoClient blogsData={blogData?.cards} />
        </Suspense>
      </div>
    </section>
  )
}

export default CryptoUpdates;
