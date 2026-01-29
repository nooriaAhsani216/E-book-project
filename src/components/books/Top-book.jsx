import React from 'react'
import Link from 'next/link' 

export default function TopBook() {
  return (
    <div>
       <div className="flex justify-between m-3 items-center">
              <p className='text-2xl text-black'>Today's Hits </p>
              <Link href="/#">
                <button className="px-5 py-2 rounded-full text-lg bg-rose-200 text-black hover:bg-rose-400 hover:text-white">
                  View all
                </button></Link>
            </div>
    </div>
  )
}
