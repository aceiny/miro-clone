import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <Image
        src='/logo.svg'
        alt='logo'
        width={100}
        height={100}
        className=' animate-ping duration-1000'
        />
    </div>
  )
}

export default Loading