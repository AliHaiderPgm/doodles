import CarouselV2 from '@/components/ui/carousel-v2'
import React from 'react'
import { BuildingBlockItems } from './BuildingBlockItems'
import { Eye, Palette, Shuffle } from 'lucide-react'
import Card from '@/components/ui/card'
import Quote from '@/components/constant/Quote'

const BuildingBlock = () => {
    return (
        <div className='mx-auto md:col-start-2 col-span-12 md:col-span-10 p-4 lg:p-2'>
            <div className='flex flex-col-reverse md:flex-row gap-4 md:items-center relative top-3 md:top-4'>
                <img src="/doodles/topPeek.png" alt="Doodle peek from top" className='w-1/2 md:w-1/3 lg:w-auto dark:invert' height={80} width={100} />
                <h2 className='text-4xl lg:text-5xl font-semibold text-center md:text-left'>Powerful building blocks</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <Card
                    icon={Shuffle}
                    title="Visualize, filter & sort any way you want"
                    desc="Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that’s most helpful to you."
                    component={<CarouselV2 data={BuildingBlockItems} className="mt-4" />}
                    className='md:col-span-2'
                />
                <Card
                    icon={Eye}
                    title="Customize the info you track" desc="Create your own labels, tags, owners, and more, so everyone has context and everything stays organized."
                    image="/images/blockImage1.avif"
                />
                <Card
                    icon={Palette}
                    title="Build any page, communicate any idea"
                    desc="Everything is drag and drop in Notion — images, toggles, to-do’s, even embedded databases."
                    image="/images/blockImage2.avif"
                />
            </div>
            <div className='p-4'>
                <Quote width="md:w-1/2" heading="Notion adapts to your needs. It’s as minimal or as powerful as you need it to be." logo="/images/fire.avif" name="Rahim Makani" position="Director of Product, Matchgroup" />
            </div>
        </div>
    )
}

export default BuildingBlock