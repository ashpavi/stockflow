import React from 'react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

function TopNav() {
    const navigate = useNavigate()

    return (
        <div className='flex justify-between items-center h-15 bg-background p-3 border-b border-border'>
            <div className='font-semibold text-foreground cursor-pointer' onClick={()=>navigate('/')}>Stockflow</div>
            <Button onClick={()=>
                navigate('/login')
            }>Login</Button>
        </div>
    )
}

export default TopNav