import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react';

function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-row min-h-screen'>
            <div className='flex-1 flex items-center justify-center bg-gray-100 flex-col'>

                <p className='text-9xl font-bold text-orange-500'>404</p>
                <p className='text-xl'>The page you're looking for can't be found</p>
                <button
                    className='mt-15 text-sm text-blue-800 hover:text-blue-500 cursor-pointer flex gap-1'
                    type='button'
                    onClick={() =>
                        navigate(-1)
                    }>
                    <ArrowLeft className='size-3.5 mt-1' />
                    Go back to previous page


                </button>

            </div>
        </div>
    )
}

export default NotFoundPage