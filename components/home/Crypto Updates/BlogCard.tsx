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
          <div>
            <div className='group p-0 .max-w-sm bg-opacity-80 rounded-[40px]  border border-solid duration-1000 transition-all'
            
              style={{
              background : `linear-gradient(180deg, 
                rgba(255, 58, 41, 0.7) 0%, 
                rgba(255, 58, 41, 0.4) 30%, 
                rgba(255, 58, 41, 0.2) 49.99%, 
                rgba(255, 58, 41, 0.4) 70%, 
                rgba(255, 58, 41, 0.7) 100%)`,
                borderRadius : '24px',
            }}
            >
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
      </div>
          )
        }

        export default BlogCard;