import React from 'react'
import Image from 'next/image'
import Buttons from './Buttons'

export default function MainHome() {

  return (
    <section className="bg-pink-100 md:grid md:grid-cols-2 p-5">
      <div className="md:grid items-center">
        <h2 className="text-2xl">
          Listen to audiobooks for
          <span className="block text-2xl font-bold text-black">14 days for free</span>
        </h2>
        <p>Enjoy over <strong>900,000</strong>audiobooks and e-books on BookByte. During the trial period, you get access to <strong>20 hours</strong> of listening and reading.
          After that, just <strong>$7.99/month</strong>. Cancel anytime.
        </p>
        <Buttons />

      </div>
      <div className="bg-amber-500 flex justify-center items-center">
        <Image
          src="/image/download-removebg-preview.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>

    </section>
  )
}
