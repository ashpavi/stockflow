import React from 'react'
import TopNav from '../components/top-nav/TopNav'

function DefaultLayout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <TopNav />
            <div className='flex-1  bg-gray-100'>
                <div className='p-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout