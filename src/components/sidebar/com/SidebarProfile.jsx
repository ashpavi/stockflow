import React from 'react'
import { UserRound } from 'lucide-react'

function SidebarProfile({profile}) {
  return (
    <div className='px-4 py-4 mt-auto border-t border-border'>
      <div className='flex gap-3 items-center '>
        <div className='rounded-full flex items-center shrink-0 justify-center size-8 bg-[#fdfded] text-[#a63d1d] border'>
          <UserRound aria-hidden="true" className="size-5" strokeWidth={1.8}/>
        </div>
        <div className=' min-w-0 leading-tight'>
          <p className='truncate text-xs font-medium text-foreground'>{profile.name}</p>
          <p className='truncate mt-0.5 text-[11px] text-muted-foreground'>{profile.role}</p>
          <p className='truncate mt-0.5 text-[10px] text-muted-foreground'>{profile.warehouse}</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarProfile