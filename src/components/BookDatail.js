import { bookData } from '@/lib/bookData';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

export default function BookDatail() {
    const [book,setBook] = useState([]);

    useEffect(()=>{
        fetch('/api/books')
        .then((res)=>res.json())
        .then((data)=>{
            setBook(data);
        })
    }, [])
  return (
    <div className='mt-50 bg-black'>
     <ul>
        {bookData.map((book,i)=>{
            return(
                <li>{book.title}</li>
            )
        })}
     </ul>
    </div>
  )
}
