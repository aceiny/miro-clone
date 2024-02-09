import React from 'react'
import NewButton from './NewButton'
import OrgList from './OrgList'

const SideBar = () => {
  return (
    <aside 
    className='bg-[#050038] p-3 fixed z-[1] left-0 h-full w-[60px] flex flex-col items-center gap-y-4 text-white'
    >
      <NewButton/>
      <OrgList/>
    </aside>
  )
}

export default SideBar