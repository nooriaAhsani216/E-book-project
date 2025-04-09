import React from 'react'
import Navbar from './Navbar'
import SignIn from './Sign-in'

export default function Header() {
  return (
    <div className="bg-amber-600 p-5 md:grid md:grid-cols-3 md:items-center">
      <p className="text-xl font-bold">BookByte</p>
      <Navbar />
      <div className="hidden md:flex justify-end">
        <SignIn />
      </div>
    </div>
  )
}
