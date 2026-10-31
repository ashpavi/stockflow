import React from 'react'

import { sidebarNav, sidebarProfile } from '@/data/nav'
import SidebarHeader from './com/SidebarHeader'
import SidebarNav from './com/SidebarNav'
import SidebarProfile from './com/SidebarProfile'

function Sidebar() {
  return (
    <aside className=" flex sticky top-0 h-screen w-60 shrink-0 flex-col border-r border-border bg-background lg:flex">
        
        <SidebarHeader />
        <SidebarNav items={sidebarNav}/>
        <SidebarProfile profile={sidebarProfile}/>
    </aside>
  )
}

export default Sidebar