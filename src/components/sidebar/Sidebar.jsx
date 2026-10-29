import React from 'react'
import { SidebarHeader,SidebarNav,SidebarProfile } from './com'

import { sidebarNav, sidebarProfile } from '@/data/nav'

function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-60 shrink-0 flex-col border-r border-border bg-background lg:flex">
        
        <SidebarHeader/>
        <SidebarNav items={sidebarNav}/>
        <SidebarProfile profile={sidebarProfile}/>
    </aside>
  )
}

export default Sidebar