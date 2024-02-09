"use client"
import React from 'react'
import Image from 'next/image'
import {
    useOrganization,
    useOrganizationList
} from '@clerk/nextjs'
import { cn } from '@/lib/utils'

interface ItemProps {
    id: string ;
    name: string ;
    imageUrl : string ;
}
const Item = ({
    id,
    name,
    imageUrl
} : ItemProps) => {
    const {organization} = useOrganization()
    const {setActive} = useOrganizationList() as any
    const isActive = organization?.id === id 
    const onClick = () => {
        if(isActive) return
        setActive({organization : id})
    }
  return (
    <div className=' h-[50px] w-[50px]'>
        <img 
        src={imageUrl} 
        alt={name} 
        key={id}
        onClick={onClick}
        className={cn(
            'rounded-md',
            'cursor-pointer',
            'h-full',
            'w-full',
            'object-cover',
            'opacity-60',
            'hover:opacity-100',
            'transition',isActive && 'opacity-100'
        )} 
        />
    </div>
  )
}

export default Item