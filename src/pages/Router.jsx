import React, { useEffect, useState } from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact'
import Navbar from '../components/shared/navbar/Navbar'
import Footer from '@/components/shared/footer/Footer'
import { useMobileMenu } from '@/context/MobileNavContext'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

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
    const [mode, setMode] = useState('light')
    const handleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light')
        document.body.classList.toggle('dark')
        const currentMode = mode === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', currentMode)
    }
    useEffect(() => {
        const savedMode = localStorage.getItem('theme')
        if (savedMode) {
            setMode(savedMode)
            document.body.classList.toggle('dark', savedMode === 'dark')
        }
    }, [])
    return <>
        <Navbar />
        <div className={isMenuVisible ? 'hidden' : ''}>
            <Outlet />
            <Footer />
        </div>
        <Button size="icon" onClick={handleMode} className="fixed bottom-4 right-4 rounded-full" aria-label="switch mode to dark and light">
            <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, }}
                key={mode}
            >
                {mode === 'dark' ? <Sun /> : <Moon />}
            </motion.div>
        </Button>
    </>
}