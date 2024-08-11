import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { SponsorList } from './SponsorList'
import Quote from '@/components/constant/Quote'

const Sponsor = () => {
    return (
        <div className='col-span-12 flex flex-col items-center gap-12 lg:gap-22 text-center'>
            <div className='flex flex-col items-center p-4'>
                <h2 className='text-5xl font-semibold'>Millions run on Notion every day</h2>
                <div className='max-w-md'>
                    <p className='mt-2 text-base'>Powering the world’s best teams, from next-generation startups to established enterprises.</p>
                </div>
                <Button variant="link" className="text-custom-blue text-base">Read Customer Stories <ArrowRight size={16} /></Button>
                <div className='max-w-screen-sm mt-4'>
                    <div className='flex justify-center gap-4 flex-wrap'>
                        {SponsorList.map(item => {
                            return <div key={item.img} className='p-1 rounded-lg dark:bg-white'>
                                <img
                                    className='w-16 md:w-20 aspect-video '
                                    src={item.img}
                                    alt="Sponsor"
                                />
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='relative w-full md:w-auto overflow-hidden md:overflow-visible'>
                <h2 className=' text-4xl md:text-5xl font-semibold mb-4 md:mb-8'>Consolidate tools. <br /> Cut costs.</h2>
                <div className='mx-auto overflow-hidden sm:overflow-visible'>
                    <img src="/images/tools-before-notion-V2.avif" alt="icons" className='max-w-sm sm:max-w-lg md:max-w-full mx-auto ' height={200} width={800} />
                </div>
                <img src="/images/tools-strikethrough-V2.avif" alt="line" className='absolute bottom-4 right-20 md:right-0 mix-blend-multiply w-4/5 md:w-full' />
                <img src="/images/pencil-peek-illustration-V2.avif" alt="small girl" className='md:hidden absolute -right-10 sm:-right-8 -bottom-10 sm:-bottom-8' />
                <img src="/images/giant-pencil-illustration.avif" alt="giant girl" className=' hidden md:block absolute -top-16 -right-28 w-1/3 dark:invert' />
            </div>
            <Quote heading="The love of money is the root of all evil" logo="/sponsor/logo12.svg" name="Bible" position="Collection of religious texts or scriptures." />
        </div>
    )
}

export default Sponsor