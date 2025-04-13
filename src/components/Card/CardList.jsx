import React from 'react'
import { cardData } from '@/lib/cardData'
import Image from 'next/image'
import Link from 'next/link'

export default function CardList() {
  return (
    <div className=" min-h-screen">
          <div className="flex justify-between m-3 items-center bg-amber-400">
    <p>Today's Hits </p>
     <Link href="/contact">
     <button className="px-5 py-2 rounded-full text-lg bg-rose-200 hover:bg-rose-400 hover:text-white">
        View all
      </button></Link>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
  {cardData.map((card, i) => (
    <li
      key={i}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group"
    >
      <Link href={`/books/${card.id}`}>
        <div>
          {/* Image section */}
          <div className="relative w-full aspect-[2/3]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="bg-black text-white p-2">
            <p>{card.title}</p>
            <p className="text-sm text-gray-300 italic">{card.Author}</p>
          </div>
          <p>{props.name}</p>
        </div>
      </Link>
    </li>
  ))}
</ul>
    </div>
  )
}
