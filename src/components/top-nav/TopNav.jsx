import React from 'react'
import { Button } from '../ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '@/data/Routes';

function TopNav() {
    const {pathname}=useLocation();
    console.log(pathname)
    const navigate = useNavigate();
    const pageTitle = routes.find(({route}) => route === pathname)?.title;

    return (
        <header className='sticky top-0 z-40 flex h-16 w-full items-center gap-2 border-b bg-background px-6'>
            <h1 className='font-semibold text-foreground'>{pageTitle}</h1>
            <div className='ml-auto'>
                <Button onClick={()=> navigate("/login")}>Login</Button>
            </div>
        </header>
    )
}

export default TopNav