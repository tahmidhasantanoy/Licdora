/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import cardImage from "../../../public/images/picture.png"

const BlogCard = ({
          image,
          date,
          category,
          title,
          categoryColor,
        }: {
          image: string
          date: string
          category: string
          title: string
          categoryColor: string
        }) => {

          // Why this cardContent is not used?
          const cardContent = (
            <div className="bg-black rounded-3xl p-6 h-full">
              {/* Image container */}
              <div className="relative w-full h-48 md:h-56 mb-4 rounded-2xl overflow-hidden">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                {/* GET http://localhost:3000/_next/image?url=%2Fcrypto-security.png&w=1920&q=75 400 (Bad Request) */}
              </div>
        
              {/* Date */}
              <div className="text-right mb-4">
                <span className="text-gray-400 text-sm">{date}</span>
              </div>
        
              {/* Category badge */}
              <div className="mb-4">
                <Badge variant="outline" className={`${categoryColor} bg-transparent hover:bg-gray-800`}>
                  {category}
                </Badge>
              </div>
        
              {/* Title */}
              <h3 className="text-white text-xl font-semibold leading-tight">{title}</h3>
            </div>
          )
        
        
          return (
            /* w-[392px] h-[517px] pt-4 pr-4 pb-8 pl-4 gap-[24px] rounded-[40px] border border-solid */
            /* Hover work with padding */
            <div className='group p-0 max-w-sm h-[517px] bg-opacity-80 .hover:bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-[40px]  border border-solid duration-500 .transition-transform transition-all'
            style={{
              background: `linear-gradient(to bottom, 
                #FF3C3C 0px, 
                #FF3C3C 80px, 
                rgba(94, 86, 91, 0.6) 80px, 
                rgba(94, 86, 91, 0.6) 120px,
                #FF3C3C 120px, 
                #FF3C3C 100%)`,
              // padding: '1px', // Thick border here
              borderRadius: '40px',
              }}>
                <Card className="bg-black border-gray-800 rounded-3xl p-6 group-hover:m-[1px]  transition-colors">
              <div className="relative w-full h-48 md:h-56 mb-4 rounded-2xl overflow-hidden">
                <Image src={cardImage || "/placeholder.svg"}
                  width={360}
                  height={300}
                  alt={title} 
                  className="object-cover rounded-2xl" />
                {/* GET http://localhost:3000/_next/image?url=%2Fcrypto-security.png&w=1920&q=75 400 (Bad Request) */}
              </div>
        
              <div className="text-right mb-4">
                <span className="font-normal text-sm leading-7 text-right text-[#EEEEEE]">{date}</span>
              </div>
        
              <div className="mb-4">
                <Badge variant="outline" className={`${categoryColor} bg-transparent hover:bg-gray-800 rounded-3xl px-3 py-1.5 border-[.5px] border-[#E59174]`}>
                  {category}
                </Badge>
              </div>
              <h3 className="font-medium text-white text-xl leading-8">{title}</h3>
            </Card>
        </div>
          )
        }

export default BlogCard;