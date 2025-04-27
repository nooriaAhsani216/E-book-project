import React from 'react'
import BookList from './BookList'
import TopBook from './Top-book'

export default function MainBook() {
  return (
    <div className="min-h-screen hidden container mx-auto">
      <TopBook/>
      <BookList/>
    </div>
  )
}
