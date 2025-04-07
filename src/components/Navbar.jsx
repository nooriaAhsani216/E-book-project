import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { headerData } from '@/lib/headerData';
import SignIn from './Sign-in';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex flex-col justify-between bg-green-400">
     
      <div className="md:hidden">
        {isOpen ? (
          <IoMdClose size={30} onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu size={30} onClick={toggleMenu} />
        )}
      </div>
       <div>
        {isOpen && (
          <ul>
            {headerData.map((d, i) => {
              return (
                <li>{d.title}</li>
              )
            })}
          </ul>
        )}
      </div>
     

    </div>
  )
}
