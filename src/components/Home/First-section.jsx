import React from 'react'
import Buttons from './Buttons'

export default function FirstSection() {
  return (
    <div className='w-full max-w-3xl mx-auto px-4 '>
      <div className="grid  md:grid-cols-1">
        <div className='py-5 m-5'>
          <h2 className="text-3xl">
            Listen to audiobooks for
            <span className="block text-2xl md:text-4xl font-bold text-black">
              14 days for free
            </span>
          </h2>
          <p className="mt-4 text-lg font-serif text-gray-800">
            Enjoy over <strong>900,000</strong> audiobooks and e-books on BookByte.
            During the trial period, you get access to <strong>20 hours</strong> of listening and reading.
            After that, just <strong>$7.99/month</strong>. Cancel anytime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus voluptatum ad molestiae porro voluptatem dolor odit veniam magnam, inventore impedit! Molestiae iure consequatur aperiam maiores tempore voluptatibus beatae commodi.
          </p>
        </div>
        <div className="flex gap-4 p-5 md:flex-row flex-col">
          <Buttons text="Try for free" className='flex-1'/>
          <Buttons text="View categories" className='flex-1'/>
        </div>
      </div>
    </div>
  )
}
