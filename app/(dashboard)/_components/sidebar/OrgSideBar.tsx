"use client";
import Link from 'next/link';
import React from 'react'
import logo from '@/public/logo.svg'
import Image from 'next/image';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Star } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
const OrgSideBar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get('favorites');
  return (
    <div className='hidden lg:flex flex-col  space-y-6 w-[206px] pl-5  pt-5'>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <OrganizationSwitcher
      hidePersonal
      appearance={{
        elements : {
          rootBox : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            width : '100%',
          },
          organizationSwitcherTrigger : {
            padding : '6px',
            width : '100%',
            borderRadius : '8px',
            border : "1px solid #e5e7eb",
            justifyContent : 'space-between',
            backgroundColor : 'white',
          },
        }
      }}
      />
      <div className='space-y-1 w-full'>
        <Button
        variant={favorites ? "secondary" : "ghost"}
        className='font-normal justify-start px-2 w-full'
        >
          <Link className='flex items-center' href="/dashboard">
            <LayoutDashboard className='h-4 w-4 mr-2' />
            Team boards
          </Link>
        </Button>
        <Button
        variant={favorites ? "ghost" : "secondary"}
        asChild
        size={"lg"}
        className='font-normal justify-start px-2 w-full'
        >
          <Link className='flex items-center' href={{
            pathname: "/",
            query: { favorites: true },
          }}>
            <Star className='h-4 w-4 mr-2'/>
            Favorites
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default OrgSideBar