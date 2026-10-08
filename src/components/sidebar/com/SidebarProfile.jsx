import React from 'react'
import { UserRound } from 'lucide-react'

function SidebarProfile() {
  return (
    <div className='px-4 py-4 mt-auto border-t border-border'>
      <div className='flex gap-3 items-center justify-center'>
        <div className='rounded-full flex items-center shrink-0 justify-center size-8 bg-[#fdfded] text-[#a63d1d] border'>
          <UserRound className='size-5 strokewidth-[1.8] ' />
        </div>
        <div className='leading-tight'>
          <p className='truncate text-xs font-medium text-foreground'>John Doe</p>
          <p className='truncate mt-0.5 text-[11px] text-muted-foreground'>Stock Manager</p>
          <p className='truncate mt-0.5 text-[10px] text-muted-foreground'>Colombo Central Warehouse</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarProfile