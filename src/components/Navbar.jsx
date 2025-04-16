import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { headerData } from '@/lib/headerData';
import SignIn from './Sign-in';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'> 
        <Link href="/">
          <h1 className="font-bold text-2xl cursor-pointer">BookByte</h1>
        </Link>

        <ul className="hidden sm:flex gap-6">
          {headerData.map((d, i) => (
            <li key={i}>
              <Link href={d.link} className="hover:underline">
                {d.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:block hidden">
          <SignIn />
        </div>

        <div className='block sm:hidden'>
          {isOpen ? (
            <IoMdClose size={24} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <GiHamburgerMenu size={24} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-screen z-50 bg-white sm:hidden flex items-center justify-center'>
          <ul className=" bg-green-200 items-start p-5">
            {headerData.map((d, i) => (
              <li key={i} className='p-2'>
                <Link href={d.link} onClick={() => setIsOpen(false)}>
                  {d.title}
                </Link>
              </li>
            ))}
            <li>
              <SignIn />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
