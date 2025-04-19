import React from 'react'
import { bookData } from '@/lib/bookData'
import Image from 'next/image'
import Link from 'next/link'
import TopBook from './Top-book'

export default function BookList() {
  return (
    <div className="h-screen mt-20 p-8">
      {/* Top-section */}
     <TopBook/>
      {/* BookList-section */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {bookData.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <Link href={`/booksPage/${item.id}`}>
              <div>
                {/* Image section */}
                <div className="relative w-full aspect-[2/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Content */}
                <div className="bg-black text-white p-2">
                  <p>{item.title}</p>
                  <p className="text-sm text-gray-300 italic">{item.author}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
