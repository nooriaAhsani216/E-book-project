import React, { useState } from 'react'
import { bookData } from '@/lib/bookData'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopBook from './Top-book'
const ENDPOINT = "http://localhost:3000/api/books";

export default function BookList() {
  
  const [books,setBooks] = useState([]);
  useEffect(()=>{
    async function fetchBooks () {
      const res = await fetch('http://localhost:3000/api/books'); 
      const data = await res.json();
      setBooks(data)
    }
    fetchBooks();
  },[])

  return (
    <div className="min-h-screen mt-16 p-8 bg-white">
      {/* Top-section */}
     <TopBook/>
      {/* BookList-section */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6">
        {books.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group"
          >
            <Link href={`/books/${item.id}`}>
              <div>
                {/* Image section */}
                <div className="relative w-full aspect-[3/3] sm:aspect-[2/3]">
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
