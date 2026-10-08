import React from 'react'

function AuthLayout({ children }) {
    return (
        <div className='min-h-screen bg-amber-100 flex items-center justify-center'>
            {children}
        </div>
    )
}

export default AuthLayout