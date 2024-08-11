import { Button } from '@/components/ui/button'
import Carousel from '@/components/ui/carousel'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CarouselItems } from './HeroItems'
import { SplitText } from '@/components/constant/SplitText'

const HeroSection = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-8 justify-center'>
                <div className='w-full sm:w-2/3 md:w-full pt-8 md:pt-9 lg:pt-14 xl:pt-16'>
                    <h1 className='text-5xl md:text-6xl text-center font-bold break-words'>
                        <SplitText>
                            Creative, fun, art, joy
                        </SplitText>
                    </h1>
                </div>
                <p className='text-2xl font-medium text-center md:w-2/3 mx-auto'>Unleash your creativity with vibrant doodles <br /> that spark joy and imagination</p>
                <div className='flex flex-wrap justify-center gap-4'>
                    <Link to="/">
                        <Button className="bg-custom-blue dark:text-white hover:bg-custom-blue-hover text-base" size="sm">Get Doodles free</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="ghost" size="sm" className="text-base text-custom-blue dark:text-white hover:text-custom-blue-hover hover:bg-blue-500/5 dark:hover:bg-blue-500/20">
                            <div className='flex gap-1 items-center'>
                                <p>Request a demo</p>
                                <ArrowRight size={16} />
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='relative mt-0 lg:mt-8 max-w-screen-2xl mx-auto mb-8 lg:mb-32'>
                <div className='overflow-hidden'>
                    <div className='w-screen lg:w-fit'>
                        <img src="/doodles/LongHairDoodle.svg" alt="Long Hair Doodle" className='max-w-none lg:w-full ml-6 -mt-16 md:mt-0 dark:invert' loading='eager' height={1080} width={1920} />
                    </div>
                </div>
                <div className='hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-2/3 xl:w-1/2 min-w-[800px]'>
                    <video src="/videos/screen-v2.mp4" autoPlay muted className='border dark:border-white shadow-lg rounded-lg aspect-800/480 dark:invert'>
                        <track src="/videos/doodleCaption.vtt" kind="captions" srcLang="en" label="english_captions" />
                    </video>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4 py-4 lg:py-14'>
                <blockquote className={`before:content-[open-quote] after:content-[close-quote] text-center text-4xl font-medium`}>
                    It's a journey, not a destination.
                </blockquote>
                <p className='font-semibold text-xl font-serif'>Thoughts</p>
            </div>
            <div className='lg:w-3/4 2xl:w-1/2 mx-auto px-6'>
                <Carousel topNav caption data={CarouselItems} />
            </div>
        </>
    )
}

export default HeroSection