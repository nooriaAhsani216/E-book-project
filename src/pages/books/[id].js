import React from 'react'
import { bookData } from '@/lib/bookData';
import { useRouter } from 'next/router'
import Image from 'next/image';

export default function Book() {
  const router = useRouter();
  const {id} = router.query;
  const bookItem = bookData.find((item =>item.id === Number(id)));
  return (
   <div className='container mt-20'>
    {bookItem ? ( 
      <div className="min-h-screen bg-white py-10 px-6 flex flex-col items-baseline">
      {/* Book Card */}
      <div className="bg-rose-50 shadow-2xl rounded-2xl p-6 max-w-4xl flex flex-col md:flex gap-8">
        {/* Book Image */}
        <div className="relative w-full h-full md:w-1/2 aspect-[2/3] rounded-xl overflow-hidden">
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
            <p className="text-lg italic text-black">
              {bookItem.author}
            </p>
            <p className="text-gray-800 leading-relaxed">{bookItem.description}</p>
          </div>
        </div>
        <button
        onClick={() => router.push('/books')}
        className="text-center px-4 py-2 rounded-full bg-red-200 text-black hover:text-white hover:bg-rose-400 transition-colors duration-300"
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
