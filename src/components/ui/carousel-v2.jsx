import React, { useState } from 'react'
import { Button } from './button'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'


const CarouselV2 = ({ data, className, controls = "bottom", controlsWithIcon = false }) => {
    const [activeItem, setActiveItem] = useState(data[0])
    const largeScreen = useMediaQuery({ query: '(min-width: 1165px)' })
    return (
        <div className={`flex flex-col gap-4 md:p-4 mx-auto, ${className} ${controls === "bottom" ? "flex-col" : controls === "top" ? "flex-col-reverse" : ""}`}>
            <div className='h-[180px] md:h-[300px] lg:h-[550px] w-full shadow-lg bg-white rounded-2xl border'>
                <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='h-full w-full p-4'
                >
                    <img src={activeItem.image} alt={activeItem.title} className='h-full w-full' />
                </motion.div>
            </div>
            <div className='flex gap-2 justify-center flex-wrap'>
                {data.map(item => {
                    return controlsWithIcon && largeScreen ? <Button
                        size="lg"
                        key={item.id}
                        variant="outline"
                        onClick={() => setActiveItem(item)}
                        className={`flex flex-col gap-2 h-32 text-base  bg-gray-100 shadow-sm aspect-square ${item.id === activeItem.id ? 'bg-gray-100/5 hover:bg-gray-100/5 border' : 'border-none'}`}
                    >
                        <item.icon size={56} />
                        {item.title}
                    </Button>
                        :
                        <Button
                            size="sm"
                            key={item.id}
                            variant="outline"
                            onClick={() => setActiveItem(item)}
                            className={`${item.id === activeItem.id ? 'bg-gray-500/10' : ''}`}
                        >
                            {item.title}
                        </Button>
                })}
            </div>
        </div>
    )
}

export default CarouselV2