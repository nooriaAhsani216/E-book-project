import React from 'react'

export default function SignIn({ className = "" }) {
  const btnClass = "px-5 py-2 rounded-full text-lg bg-rose-200 hover:bg-rose-400 hover:text-white"

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <button className={btnClass}>Sign In</button>
      <button className={btnClass}>Try for Free</button>
    </div>
  )
}
