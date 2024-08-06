import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from './button'

const Card = ({ icon: Icon, iconColor = 'text-blue-500', title, desc, image, component, className, heading, comment, getTemplate = false, hoverable = false }) => {
    return (
        <div className={`bg-gray-800/5 rounded-xl 
        ${className} 
        ${hoverable ? 'hover:bg-gray-800/10 cursor-pointer transition-all' : ''} 
        ${image ? "grid grid-rows-3 lg:grid-rows-4 grid-cols-6" : ""}`
        }>
            {Icon || heading || title || desc ?
                <div className={`p-6 ${getTemplate ? 'space-y-4' : ''} ${image ? "row-span-1 col-span-6" : ''}`}>

                    {Icon && <Icon size={24} className={`${iconColor} mb-2`} />}

                    {heading && <h2 className='text-5xl font-semibold text-custom-blue'>{heading}</h2>}

                    {title && <p className='font-semibold text-xl'>{title}</p>}

                    {desc && <p className='tracking-tight'>{desc}</p>}

                    {getTemplate && <Button variant="link" className="text-blue-600 text-base p-0">Get template <ArrowRight size={16} /></Button>}
                </div> : <></>
            }
            {image &&
                <div className='row-span-2 lg:row-span-3 col-span-5 col-start-2 relative'>
                    <img src={image} alt={title} className='h-full w-full object-cover object-left-top ms-auto absolute bottom-0 right-0' />
                </div>
            }
            {/* Carousel */}
            {component && <div>{component}</div>}
            {/* Comments */}
            {comment && <div className='p-6 space-y-2'>
                <div className='flex gap-2'>
                    <img src={comment.profileImage} alt={comment.author} className='h-12 w-12 rounded-full overflow-hidden border bg-white p-1' />
                    <div>
                        <p className='font-semibold'>{comment.author}</p>
                        <p className='text-gray-500'>{comment.userId}</p>
                    </div>
                </div>
                <p className='text-lg'>{comment.comment}</p>
            </div>}
        </div>
    )
}

export default Card