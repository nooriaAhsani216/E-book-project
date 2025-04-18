import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { headerData } from '@/lib/headerData';
import SignIn from './Sign-in';
import Link from 'next/link';
import Buttons from './Home/Buttons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#6B4226] text-[#FAF3E0] shadow-md z-50">
      <div className='max-w-[1240px] m-auto flex justify-between items-center pt-10'> 
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

        <div className="hidden sm:flex sm:gap-4 ">
          <Buttons text="Sign In" className='px-2 sm:w-auto w-0'/>
          <Buttons text="Try for free" />
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
        <div className='sm:hidden fixed left-0 w-[80%] bg-[#FAF3E0] text-[#6B4226] text-2xl rounded-tr-4xl rounded-br-4xl  h-screen z-50 shadow-lg transition-all duration-300 ease-in-out'>
          <ul className="p-6 gap-5 ">
            {headerData.map((d, i) => (
              <li key={i} className='p-2'>
                <Link href={d.link} onClick={() => setIsOpen(false)}>
                  {d.title}
                </Link>
              </li>
            ))}
            <li className=''>
              <Buttons/>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
