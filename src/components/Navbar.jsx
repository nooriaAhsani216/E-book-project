import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { headerData } from '@/lib/headerData';
import Link from 'next/link';
import Buttons from './Home/Buttons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" w-full bg-white text-black shadow-md z-50">
      <div className='max-w-[1240px] mx-auto px-4 py-6 flex justify-between items-center'>
        <Link href="/">
          <h1 className="font-bold text-2xl cursor-pointer">BookByte</h1>
        </Link>
        <ul className="hidden lg:flex gap-6">
          {headerData.map((d, i) => (
            <li key={i}>
              <Link href={d.link} className="hover:underline">
                {d.title}
              </Link>
            </li>
          ))}
        </ul>


        <div className="hidden lg:flex gap-4">
          <Link href="/sign-up">
            <Buttons text="Sign Up" className='w-auto' />
          </Link>
          <Buttons text="Try for free" />
        </div>
        <div className='block lg:hidden'>
          {isOpen ? (
            <IoMdClose size={24} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <GiHamburgerMenu size={24} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className='lg:hidden fixed left-0 w-[80%] bg-white text-xl sm:text-2xl rounded-tr-4xl rounded-br-4xl h-screen z-50 shadow-lg transition-all duration-300 ease-in-out overflow-y-auto'>
          <ul className="p-6 flex flex-col space-y-5">
            {headerData.map((d, i) => (
              <li key={i}>
                <Link href={d.link}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    {d.title}
                  </span>
                </Link>
              </li>
            ))}
            <div className='ml-4 space-y-5'>
              <li>
                <button
                  className="w-full text-left hover:underline "
                >
                  Sign Up
                </button>
              </li>
              <li>
                <button
                  className=" hover:underline"
                >
                  Try for free
                </button>
              </li>
            </div>
          </ul>
        </div>
      )}

    </div>

  );
}