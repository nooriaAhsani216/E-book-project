import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import {headerData} from '@/lib/headerData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  } 
  return (
<div>
        <div className = "bg-red-800 md:hidden"> 
           {isOpen ? (
            <IoMdClose  size={30} onClick = {toggleMenu}/>
          
          ):(
            <GiHamburgerMenu size={30} onClick = {toggleMenu}/>
          )} 
          {isOpen && (
            <div>
{headerData.map((d,i)=>{
          return(
            <li>{d.title}</li>
          )
        })}
            </div>
          )}  
        </div>
        
    </div>
  )
}
