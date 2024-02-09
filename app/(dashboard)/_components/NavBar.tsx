"use client";
import { UserButton } from '@clerk/nextjs';
import React from 'react'

const NavBar = () => {
  return (
    <div className=' w-full flex items-center gap-x-4 p-5 bg-gray-500 '>
      <div className='hidden lg:flex lg:flex-1 bg-yellow'>
        <input type="text" />
        <p>search</p>
      </div>
      <UserButton/>
    </div>
  )
}

export default NavBar