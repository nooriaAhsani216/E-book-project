import React from 'react'
import Image from 'next/image'
import Buttons from './Buttons'
import FirstSection from './First-section'
import CardList from '../Card/CardList'

export default function MainHome() {

  return (
    <section className='flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover custom-img bg-black/70'>
      {/* first section */}
    <div className=' bg-pink-100 grid items-center justify-between md:grid md:grid-cols-2 md:p-5'>
    <div>
      <FirstSection/>
       </div>
    </div>
    <div>
    <CardList/>
    </div>
    </section>
  )
}
