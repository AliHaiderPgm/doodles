import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './button'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRight, ArrowRightIcon } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const Carousel = ({ topNav = false, caption = false, bottomCaption = false, indicators = false, imageClassName = '', data = [] }) => {
    const [activeTab, setActiveTab] = useState(data[0])
    const [color, setColor] = useState('')
    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' })
    const handleMouseEnter = (color) => setColor(color)
    const handleMouseLeave = () => setColor('')
    const handleNext = () => {
        const currentIndex = data.findIndex(item => item.id === activeTab.id)
        const nextIndex = (currentIndex + 1) % data.length
        setActiveTab(data[nextIndex])
    }

    const handlePrev = () => {
        const currentIndex = data.findIndex(item => item.id === activeTab.id)
        const prevIndex = (currentIndex - 1 + data.length) % data.length
        setActiveTab(data[prevIndex])
    }

    return (
        <>
            <div className='space-y-6'>
                {topNav && <div className='grid grid-cols-1 md:grid-cols-6 gap-x-8 w-4/5 mx-auto'>
                    {isLargeScreen ?
                        data.map(item => {
                            return <div key={item.id}
                                className='flex flex-col gap-1 items-center group cursor-pointer'
                                onClick={() => setActiveTab(item)}
                                onMouseEnter={() => handleMouseEnter(item.color)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <item.icon className={` transition  
                            ${item.id === activeTab.id ? `${item.color}` : (item.color === color ? color : 'text-gray-400')}`
                                } />
                                <p className={`text-2xl tracking-tight font-semibold transition ${item.id === activeTab.id ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-600'} ${item.id === activeTab.id ? '' : 'group-hover:text-black dark:group-hover:text-gray-400'}`}>{item.title}</p>
                            </div>
                        })
                        :
                        <>
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <div className='flex items-center justify-center gap-2 w-full'>
                                    <activeTab.icon className={`${activeTab.color}`} />
                                    <p className={`text-2xl font-semibold text-black dark:text-white`}>{activeTab.title}</p>
                                </div>
                            </motion.div>
                        </>
                    }
                </div>}
                {/* Image and Caption */}
                <div className='relative space-y-4'>
                    {caption && data.map(item => {
                        return item.id === activeTab.id ?
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                key={item.id}
                                className='min-h-20'
                            >
                                <div className='flex flex-col md:flex-row items-center md:justify-center gap-1 select-none'>
                                    <p className='text-base font-semibold text-center'>{item.description}</p>
                                    <Link className={`${item.color} hover:underline`}>
                                        Learn More
                                        <ArrowRight className='inline' size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                            : null
                    })}
                    {data.map(item => {
                        return item.id === activeTab.id ?
                            <div key={item.id}>
                                <div className='p-4 dark:bg-gray-300 rounded'>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <img src={item.image} alt={item.description} className={`select-none mx-auto h-[300px] md:h-[500px] ${imageClassName}`} height={800} width={1000} />
                                    </motion.div>
                                </div>
                                {bottomCaption && <p className='text-center'>{item.description}</p>}
                            </div>
                            : null
                    })}
                    <div className='absolute w-full h-[calc(100%_-_7rem)] top-12 cursor-pointer'>
                        <div className='w-1/2 h-full absolute left-0 dark:left-2 top-0 group' onClick={handlePrev}>
                            <Button size="icon" className="rounded-full absolute top-1/2 left-0 shadow-md md:opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-label="previous slide"><ArrowLeftIcon /></Button>
                        </div>
                        <div className='w-1/2 h-full absolute right-0 dark:right-2 top-0 group' onClick={handleNext}>
                            <Button size="icon" className="rounded-full absolute top-1/2 right-0 shadow-md md:opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-label="next slide"><ArrowRightIcon /></Button>
                        </div>
                    </div>

                    {indicators && <div className='flex gap-1 justify-center my-2'>
                        {data.map(i => <div className={`h-2 w-2 rounded-full ${i.id === activeTab.id ? "bg-gray-800 dark:bg-gray-200" : "bg-gray-800/10 dark:bg-gray-200/10"}`} key={i.id} />)}
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Carousel