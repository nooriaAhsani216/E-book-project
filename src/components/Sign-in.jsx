import React from 'react'

export default function SignIn() {
  const btnClass = "px-5 py-2 rounded-full text-lg bg-rose-200 hover:bg-rose-400 hover:text-white"

  return (
    <div className="flex justify-between" >
      <button className={btnClass}>Sign In</button>
      <button className={btnClass}>Try for Free</button>
    </div>
  )
}
