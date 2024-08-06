import React from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact'
import Navbar from '../components/shared/navbar/Navbar'
import Footer from '@/components/shared/footer/Footer'
import { useMobileMenu } from '@/context/MobileNavContext'

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
                <Route index element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default Router

const Root = () => {
    const { isMenuVisible } = useMobileMenu()
    return <>
        <Navbar />
        <div className={isMenuVisible ? 'hidden' : ''}>
            <Outlet />
            <Footer />
        </div>
    </>
}