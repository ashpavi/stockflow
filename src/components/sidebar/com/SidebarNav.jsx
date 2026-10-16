import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from 'cn'


function SidebarNavItem({ item }) {

  const { pathname } = useLocation()

  const { label, icon: Icon, badge, to, activePath = [item.to] } = item

  const isActive = activePath.includes(pathname)



  return (
    <li>
      <NavLink to={to}
        className={cn({
          "flex items-center gap-3 w-full h-11 px-3 rounded-lg text-left text-sm font-medium": true,
          "text-muted-foreground hover:bg-muted hover:text-foreground": true,
          'bg-[#f0f0f0] text-[#d35630]': isActive

        })}>
        <Icon className="size-4 shrink-0" />
        <span>{label}</span>
        {badge && (
          <span className='ml-auto bg-[#dd6844] rounded-full px-1 py-0 text-white text-[11px] font-semibold'>
            {badge}
          </span>
        )}
      </NavLink>
    </li>
  )
}

function SidebarNav({ items }) {
  return (
    <nav aria-label='Primary navigation' className='px-3 py-4'>
      <ul className='space-y-1'>
        {items.map((item) => (
          <SidebarNavItem key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  )
}

export default SidebarNav