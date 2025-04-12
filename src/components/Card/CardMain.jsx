import React from 'react'
import Image from 'next/image'
import CardList from './CardList'
import Link from 'next/link'

export default function CardMain() {
  return (
    <div className="px-5">
       <div className="flex justify-between m-3 items-center bg-amber-400">
    <p>Today's Hits </p>
     <Link href="/books">
     <button className="px-5 py-2 rounded-full text-lg bg-rose-200 hover:bg-rose-400 hover:text-white">
        View all
      </button></Link>
    </div>
     <CardList />
    </div>
  )
}
