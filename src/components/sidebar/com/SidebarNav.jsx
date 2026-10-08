import React from 'react'

import { sidebarNav } from '../../../data/Nav'

function SidebarNavItem({ item }) {
  const { label, icon: Icon, badge } = item
  return (
    <li>
      <div className='flex items-center gap-3 w-full h-11 px-3 text-left text-sm font-medium'>
        <Icon className="size-4 shrink-0" />
        <span>{label}</span>
        {badge && <span className='ml-auto bg-[#dd6844] rounded-full px-1 py-0 text-white text-[11px] font-semibold'> {badge}</span>}
      </div>
    </li>
  )
}

function SidebarNav() {
  return (
    <div>


      {sidebarNav.map((item) => (<SidebarNavItem item={item} />))}
    </div>
  )
}

export default SidebarNav