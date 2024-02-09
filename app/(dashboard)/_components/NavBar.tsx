"use client";
import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import React , {useState} from 'react'
const NavBar = () => {
  return (
    <div className=' w-full flex items-center gap-x-4 p-5 bg-gray-500 '>
      <div className='hidden lg:flex lg:flex-1'>
        <div className='w-[510px] gap-1 p-3 bg-white rounded-md flex items-center'>
          <Search/>
          <input type="text" className=' outline-none w-full' placeholder='search boards'/>
        </div>
      </div>
      <UserButton/>
    </div>
  )
}

export default NavBar