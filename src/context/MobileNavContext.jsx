import React, { createContext, useContext, useState } from 'react'

const MobileMenuContext = createContext()

export const useMobileMenu = () => useContext(MobileMenuContext)

const MobileNavContext = ({ children }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const closeMenu = () => setIsMenuVisible(false)
    const openMenu = () => setIsMenuVisible(true)
    return (
        <MobileMenuContext.Provider value={{ isMenuVisible, openMenu, closeMenu }}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export default MobileNavContext