import React from 'react'
import { bookData } from '@/lib/bookData';
import { useRouter } from 'next/router'
import Image from 'next/image';

export default function Book() {
  const router = useRouter();
  const {book} = router.query;
  const bookItem = bookData.find((item =>item.id === Number(book)));
  return (
   <div>
    {bookItem ? ( <div className="min-h-[60vh] bg-amber-100 py-10 px-6 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => router.push('/books')}
        className=" px-6 py-2 rounded-full bg-[#6B4226] text-white hover:bg-[#4A2F1B] transition-colors duration-300"
      >
        ← Back
      </button>

      {/* Book Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-4xl w-full flex flex-col md:flex gap-8">
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
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold text-[#4A2F1B] mb-2">
              {bookItem.title}
            </h1>
            <p className="text-lg italic text-gray-600 mb-4">
              Author:{bookItem.author}
            </p>
          </div>
        </div>
      </div>
    </div>): (
      <p className='text-2xl text-red-500'>Book Not Found</p>
    )}
   </div>
  )
}
