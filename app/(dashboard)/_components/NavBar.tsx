"use client";
import { Button } from '@/components/ui/button';
import { DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { OrganizationProfile, OrganizationSwitcher, UserButton, useOrganization } from '@clerk/nextjs';
import { Dialog } from '@radix-ui/react-dialog';
import { Plus, Search } from 'lucide-react';
import React , {useState} from 'react'
const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus className='h-4 w-4 mr-2'/>
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-fit border-none bg-transparent p-0'>
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  )
}
const NavBar = () => {
  const {organization} = useOrganization()
  return (
    <div className='w-full flex items-center gap-x-4 p-5 '>
      <div className='hidden lg:flex lg:flex-1'>
        <div className='w-[510px] border border-[#eeeeee] gap-1 p-3 bg-white rounded-md flex items-center'>
          <Search className=' opacity-70'/>
          <input type="text" className=' outline-none w-full' placeholder='search boards'/>
        </div>
      </div>
      <div className='block flex-1 lg:hidden'>
      <OrganizationSwitcher
      hidePersonal
      appearance={{
        elements : {
          rootBox : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            width : '100%',
            maxWidth : '376px'
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
      </div>
      {
        organization && (
          <InviteButton/>
        )
      }
      <UserButton
      />
    </div>
  )
}

export default NavBar