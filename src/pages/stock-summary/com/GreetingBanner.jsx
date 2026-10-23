import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { stockSummaryGreeting } from '@/data/mock/stock-summary'

function GreetingBanner() {
  const [isVisible, setVisible] = useState(true);

  if(!isVisible) {
    return null
  } 

  return (
    <section className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#d6641c] to-[#efab6b] p-4 sm:p-8'>
      <div className='absolute -right-20 -top-20 flex size-80 rounded-full '></div>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Dismiss Greeting"
          className="absolute top-3 right-3 text-white/80 hover:bg-white/10 cursor-pointer"
          onClick ={() => setVisible(false)}>

        <X className="size-4" />
      </Button>
      

      <div className='relative max-w-2xl'>
        <p className='text-[11px] font-semibold tracking-wide text-orange-100'>
          {stockSummaryGreeting.role}
        </p>
        <h2 className='mt-1 text-xl font-semibold tracking-tight text-orange-50'>
          {stockSummaryGreeting.title}
        </h2>
        <p className='mt-1.5 max-w-xl text-sm leading-5 text-orange-50'>
          {stockSummaryGreeting.description}
        </p>
        <p className='mt-2 text-xs text-orange-100'>
          {stockSummaryGreeting.date}
        </p>
      </div>
    

    </section>
  )
}

export default GreetingBanner