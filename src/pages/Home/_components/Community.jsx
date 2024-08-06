import { Button } from '@/components/ui/button'
import Card from '@/components/ui/card'
import Carousel from '@/components/ui/carousel'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { CommunityCarouselItems, CommunityCommentItems } from './CommunityItems'

const Community = () => {
    return (
        <div className='col-span-10 col-start-2 text-center space-y-4'>
            <h2 className='text-5xl font-semibold'>Join a global Doodle.<br /> Unleash your creativity.</h2>
            <p>Our vibrant community produces content, teaches courses, and leads events all over the world.</p>
            <Button variant="link" size="sm" className="text-custom-blue text-base">Learn More <ArrowRight size={16} /></Button>
            <div className='overflow-hidden'>
                <img src="/doodles/faces.png" alt="faces doodle from freePics" className='w-screen mx-auto md:!mt-12' />
            </div>
            <div className='grid grid-cols-6 gap-6 text-left'>
                <Card heading="1M+" desc="community members" className="col-span-6 md:col-span-3 lg:col-span-2" />
                <Card heading="150+" desc="community groups" className="col-span-6 md:col-span-3 lg:col-span-2" />
                <Card heading="50+" desc="countries represented" className="col-span-6 md:col-span-3 lg:col-span-2" />
                <Card className="col-span-6 md:col-span-3" title="An always-on support network" desc="Swap setups and share tips in over 149 online communities." image="/images/socialMedia.jpg" />
                <Card className="col-span-6 md:col-span-3" title="Choose your language" desc="Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!" image="/images/languages.jpg" />

                <div className='col-span-6 grid grid-cols-6 grid-rows-3 gap-6'>
                    <Card className='col-span-6 xl:col-span-4 row-span-3' component={<Carousel data={CommunityCarouselItems} bottomCaption indicators imageClassName="max-h-[36rem] object-cover object-left-top" />} />
                    {
                        CommunityCommentItems.map(item => {
                            return <Card comment={item} className="row-span-1 col-span-6 md:col-span-3 lg:col-span-2" key={item.id} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Community