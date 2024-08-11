import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const GetStarted = () => {
    return (
        <div className='col-span-10 col-start-2 space-y-4 text-center'>
            <h2 className='text-4xl sm:text-5xl font-semibold'>Get started for free</h2>
            <p>Play around with it first. Pay and add your team later.</p>
            <div className='flex gap-2 justify-center'>
                <Button size="sm">Try Notion Free</Button>
                <Button variant="link" size="sm" className="text-custom-blue text-base">Request a demo <ArrowRight size={16} /></Button>
            </div>
            <img src="/doodles/parade.png" alt="Parade" className='md:w-3/4 mx-auto dark:invert' height={400} width={600} />
        </div>
    )
}

export default GetStarted