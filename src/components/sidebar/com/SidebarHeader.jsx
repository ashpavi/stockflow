import React from 'react'
import { BarChart3 } from 'lucide-react'

function SidebarHeader() {
    return (
        <div className='flex items-center gap-3 h-15 px-5 border-b border-border '>
            <div className='flex items-center justify-center rounded-md flex-row bg-[#e85d31] text-white size-8  shadow-2xl'>
                <BarChart3 className='size-5 stroke-[2.25]' />
            </div>
            <div className='leading-tight'>
                <p className='text-sm font-semibold text-foreground'>Stockflow</p>
                <p className='text-[11px] text-muted-foreground'>Distribution System</p>
            </div>
        </div>
    )
}

export default SidebarHeader