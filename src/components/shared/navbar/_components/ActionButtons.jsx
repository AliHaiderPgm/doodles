import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMobileMenu } from '@/context/MobileNavContext'

const ActionButtons = () => {
    const { isMenuVisible, openMenu, closeMenu } = useMobileMenu()
    return (
        <>
            <div className='hidden min-[1080px]:flex justify-center items-center xl:gap-2'>
                <Link className="navBtn">Request a demo</Link>
                <p className='select-none font-thin text-gray-300 text-xl'>|</p>
                <Link className="navBtn">Login</Link>
                <Button className="h-8" size="sm">Get Doodles free</Button>
            </div>
            <div className='flex items-center gap-2 min-[1080px]:hidden'>
                {!isMenuVisible ? <Button className="h-8" size="sm">Get Notion free</Button> : null}
                {isMenuVisible ? <X onClick={closeMenu} /> : <Menu onClick={openMenu} />}
            </div>
        </>
    )
}

export default ActionButtons