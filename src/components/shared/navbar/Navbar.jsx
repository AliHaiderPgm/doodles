import React from 'react'
import Logo from './_components/Logo'
import Menu from './_components/Menu'
import ActionButtons from './_components/ActionButtons'
import MobileMenu from './_components/MobileMenu'
import { useMobileMenu } from '@/context/MobileNavContext'

const Navbar = () => {
    const navbarClasses = `flex items-center justify-between h-14 sticky bg-white z-50 top-0 border-b border-gray-200 py-7 px-4`
    const { isMenuVisible } = useMobileMenu()
    return <>
        <nav className='contents'>
            <div className={navbarClasses} >
                <div className='flex items-center gap-2 '>
                    <Logo />
                    <Menu />
                </div>
                <ActionButtons />
            </div>
            <MobileMenu className={!isMenuVisible && "hidden"} />
        </nav>
    </>
}

export default Navbar