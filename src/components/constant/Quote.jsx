import React from 'react'

const Quote = ({ heading, logo, name, position, width }) => {
    return (
        <div className='p-2 space-y-4'>
            <h2 className={`text-2xl text-center mx-auto sm:w-3/4 ${width} before:content-[open-quote] after:content-[close-quote]`}>{heading}</h2>
            <div className='flex justify-center gap-2'>
                <img src={logo} alt={heading} className='' />
                <div className='text-left'>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-sm'>{position}</p>
                </div>
            </div>
        </div>
    )
}

export default Quote