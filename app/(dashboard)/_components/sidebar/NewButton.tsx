"use client"
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CreateOrganization } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

const NewButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div className=' h-[50px] w-[50px] aspect-square'>
                <button className=' bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition '>
                    <Plus />
                </button>
            </div>
        </DialogTrigger>
        <DialogContent className='p-0 max-w-fit bg-transparent border-none'>
            <CreateOrganization />
        </DialogContent>
    </Dialog>
  )
}

export default NewButton