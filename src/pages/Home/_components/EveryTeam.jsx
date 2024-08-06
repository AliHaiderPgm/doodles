import CarouselV2 from '@/components/ui/carousel-v2'
import React from 'react'
import { EveryTeamItems } from './EveryTeamItems'

const EveryTeam = () => {
    return (
        <div className='col-span-12 md:col-span-10 md:col-start-2  p-4 lg:p-2 space-y-6'>
            <h2 className='text-4xl md:text-5xl font-semibold text-center'>Every team, side-by-side</h2>
            <CarouselV2 data={EveryTeamItems} controls="top" controlsWithIcon={true} />
        </div>
    )
}

export default EveryTeam