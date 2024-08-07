import React from 'react'
import { SEO } from '../../components/constant/SEO'
import HeroSection from './_components/HeroSection'
import Sponsor from './_components/Sponsor'
import BuildingBlock from './_components/BuildingBlock'
import EveryTeam from './_components/EveryTeam'
import Community from './_components/Community'
import Templates from './_components/Templates'
import GetStarted from './_components/GetStarted'

const Home = () => {
    return <>
        <SEO title="Your connected doodles." description="Doodle - Simple and powerful note & docs for teams." />
        <HeroSection />
        <div className='max-w-[1274px] mx-auto'>
            <div className='grid grid-cols-12 gap-6'>
                <Sponsor />
                <BuildingBlock />
                <EveryTeam />
                <Community />
                <Templates />
                <GetStarted />
            </div>
        </div>
    </>
}

export default Home
