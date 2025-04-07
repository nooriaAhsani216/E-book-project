import React from 'react'
import Navbar from './Navbar'
import SignIn from './Sign-in'

export default function Header() {
  return (
    <div className = "bg-amber-600 md:flex justify-between">
       <p>BookByte</p>
<Navbar />
<SignIn />
    </div>
  )
}
