import React from 'react'
import BookList from './BookList'
import TopBook from './Top-book'

export default function MainBook() {
  return (
    <div className="min-h-screen bg-amber-100 hidden">
      <TopBook/>
      <BookList/>
    </div>
  )
}
