import React from 'react'
import Buttons from './Buttons'

export default function FirstSection() {
  return (
    <div>
      <div className="grid  md:grid-cols-1  p-0 bg-amber-300 rounded-xl">
        <div className='p-10'>
          <h2 className="text-2xl">
            Listen to audiobooks for
            <span className="block text-2xl font-bold text-black">
              14 days for free
            </span>
          </h2>
          <p className="mt-4 text-sm text-gray-800">
            Enjoy over <strong>900,000</strong> audiobooks and e-books on BookByte.
            During the trial period, you get access to <strong>20 hours</strong> of listening and reading.
            After that, just <strong>$7.99/month</strong>. Cancel anytime.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus voluptatum ad molestiae porro voluptatem dolor odit veniam magnam, inventore impedit! Molestiae iure consequatur aperiam maiores tempore voluptatibus beatae commodi.
          </p>
        </div>
        <div className="">
          <Buttons />
        </div>
      </div>
    </div>
  )
}
