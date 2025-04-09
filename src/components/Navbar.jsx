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
    <div className="">
      <div className="md:hidden bg-amber-400">
        {isOpen ? (
          <IoMdClose size={30} onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu size={30} onClick={toggleMenu} />
        )}
      </div>
      <div>
        {isOpen && (
          <ul className="md:flex md:flex-row items-center gap-10">
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
