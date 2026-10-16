import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NotFoundPage from '../pages/notFound/NotFoundPage'
import { routes } from '@/data/Routes'

function AppRoutes() {
  return (
    <BrowserRouter>
            <Routes>
                {routes.map(({route, page})=>(
                    <Route key={route} path={route} element={page} />
                ))}

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
  )
}

export default AppRoutes