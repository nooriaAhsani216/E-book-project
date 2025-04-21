import React from 'react'
import { bookData } from '@/lib/bookData';
import { useRouter } from 'next/router'
import Image from 'next/image';

export default function Book() {
  const router = useRouter();
  const {id} = router.query;
  const bookItem = bookData.find((item =>item.id === Number(id)));
  return (
   <div className='mt-16'>
    
    {bookItem ? ( 
      <div className="h-screen bg-amber-100 py-10 px-6 flex flex-col items-center">
      {/* Book Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-4xl flex flex-col md:flex gap-8">
        {/* Book Image */}
        <div className="relative w-full md:w-1/2 aspect-[2/3] rounded-xl overflow-hidden">
          <Image
            src={bookItem.image}
            alt={bookItem.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="flex flex-col justify-between ">
          <div>
            <h1 className=" text-sm md:text-3xl font-bold text-[#4A2F1B] mb-2">
              {bookItem.title}
            </h1>
            <p className="text-lg italic text-gray-600 mb-4">
              Author:{bookItem.author}
            </p>
          </div>
        </div>
        <button
        onClick={() => router.push('/booksPage')}
        className="text-center px-4 py-2 rounded-full bg-[#6B4226] text-white hover:bg-[#4A2F1B] transition-colors duration-300"
      >
        ← Back
      </button>
      </div>
    </div>): (
     <div className='flex items-center justify-center h-screen'>
       <p className='text-2xl text-red-500 text-center'>Book Not Found</p>
      </div>
    )}
   </div>
  )
}
