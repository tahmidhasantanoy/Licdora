import BlogCard from "./BlogCard"

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
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogData.cards.map((card) => (
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
      </div>
    </section>
  )
}

export default CryptoUpdates;
