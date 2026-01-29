import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TopBook from './Top-book'

const ENDPOINT = "http://localhost:3000/api/books";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch(ENDPOINT);
      const data = await res.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
   <div>
     <div className='container mx-auto p-4 '>
      {/* Top section */}
      {/* <TopBook /> */}
      {/* Book list */}
      <ul className='grid lg:grid-cols-6 gap-4'>
        {books.map((item) => (
          <li key={item.id} className='border rounded-xl bg-amber-50 '>
            <Link href={`/books/${item.id}`}>
             <div className="flex flex-col h-full overflow-hidden rounded-2xl">
                <div className='flex justify-center items-center w-full object-cover'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                   className="object-cover p-1"
                  />
                </div>

            <div className="flex flex-col text-center p-2 bg-black text-white">
            <p className="font-semibold text-sm line-clamp-2">
              {item.title}
            </p>
            <p className="text-xs">
              {item.author}
            </p>
          </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
   </div>
  )
}
