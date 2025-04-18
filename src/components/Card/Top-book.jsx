import React from 'react'

export default function TopBook() {
  return (
    <div>
       <div className="flex justify-between m-3 items-center">
              <p className='text-2xl text-[#6B4226]'>Today's Hits </p>
              <Link href="/#">
                <button className="px-5 py-2 rounded-full text-lg bg-[#6B4226] text-[#FAF3E0] hover:bg-[#FAF3E0] hover:text-[#6B4226]">
                  View all
                </button></Link>
            </div>
    </div>
  )
}
