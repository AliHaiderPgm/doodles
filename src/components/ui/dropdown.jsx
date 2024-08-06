import { ChevronDown } from 'lucide-react';
import React, { createContext, useContext, useEffect, useState } from 'react';

const DropDownContext = createContext()

const useDropdown = () => useContext(DropDownContext)

const DropdownMenu = ({ children }) => {
    const [state, setState] = useState(false)
    const [isVisible, setVisible] = useState(false)

    const handleToggle = () => {
        setState(!state)
    }
    useEffect(() => {
        let showTimeout, hideTimeout;

        if (state) {
            showTimeout = setTimeout(() => {
                setVisible(true);
            }, 200);
        } else {
            hideTimeout = setTimeout(() => {
                setVisible(false);
            }, 140);
        }

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
        };
    }, [state]);
    return (
        <DropDownContext.Provider value={{ isVisible, handleToggle }}>
            <div className="relative group z-10 flex flex-col items-start max-w-max will-change-contents"
                onMouseEnter={() => setState(true)}
                onMouseLeave={() => setState(false)}
                data-state={state}
                data-open={isVisible}
            >
                {children}
            </div>
        </DropDownContext.Provider>
    );
};


const MenuTrigger = ({ children }) => {
    const { handleToggle } = useDropdown()
    return <>
        <button
            className="inline-flex navBtn items-center justify-center group-data-[state=true]:bg-accent/50 group-data-[open=true]:bg-accent/50"
            onClick={handleToggle}
        >
            {children}
            <ChevronDown
                className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=true]:rotate-180"
                aria-hidden="true" />
        </button>
    </>
}

const DropDownList = ({ children }) => {
    const { isVisible } = useDropdown()
    return <>
        {
            isVisible && <div className="absolute will-change-contents left-0 top-full transition duration-200 group-data-[state=true]:animate-in group-data-[state=false]:animate-out group-data-[state=false]:zoom-out-90 group-data-[state=true]:zoom-in-95 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg">
                <div className='px-2 py-1' >
                    {children}
                </div>
            </div>
        }
    </>
}


export { DropdownMenu, MenuTrigger, DropDownList };
