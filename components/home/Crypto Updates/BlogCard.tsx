/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

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
            <div className='group bg-opacity-80 .hover:bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-3xl p-0 duration-500 .transition-transform transition-all'
            style={{
              background: `linear-gradient(to bottom, 
                #FF3C3C 0px, 
                #FF3C3C 80px, 
                rgba(94, 86, 91, 0.6) 80px, 
                rgba(94, 86, 91, 0.6) 120px,
                #FF3C3C 120px, 
                #FF3C3C 100%)`,
              // padding: '1px', // Thick border here
              borderRadius: '10px',
              }}>
                <Card className="bg-black border-gray-800 rounded-3xl p-6 group-hover:m-[1px]  transition-colors">
              <div className="relative w-full h-48 md:h-56 mb-4 rounded-2xl overflow-hidden">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                {/* GET http://localhost:3000/_next/image?url=%2Fcrypto-security.png&w=1920&q=75 400 (Bad Request) */}
              </div>
        
              <div className="text-right mb-4">
                <span className="text-gray-400 text-sm">{date}</span>
              </div>
        
              <div className="mb-4">
                <Badge variant="outline" className={`${categoryColor} bg-transparent hover:bg-gray-800 rounded-3xl px-3 py-[2.5px]`}>
                  {category}
                </Badge>
              </div>
        
              <h3 className="text-white text-xl font-semibold leading-tight">{title}</h3>
            </Card>
        </div>
          )
        }

export default BlogCard;