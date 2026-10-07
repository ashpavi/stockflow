import React from 'react'

function Card({content}) {
  return (
    <div>
        <h1 className='font-bold text-amber-700 text-center pt-4'>{content}</h1>
    </div>
  )
}

export  {Card}