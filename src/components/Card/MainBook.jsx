import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BookList from './BookList'
import TopBook from './Top-book'

export default function MainBook() {
  return (
    <div className="">
      <TopBook/>
      <BookList/>
    </div>
  )
}
