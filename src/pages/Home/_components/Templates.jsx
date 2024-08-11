import { Button } from '@/components/ui/button'
import Card from '@/components/ui/card'
import { ArrowRight, Home } from 'lucide-react'
import React from 'react'
import { TemplateItems } from './TemplateItems'

const Templates = () => {
    return (
        <div className='col-span-10 col-start-2 py-4'>
            <div className='text-center space-y-4 grid grid-cols-12 items-center'>
                <div className='col-span-12 lg:col-span-7 lg:col-start-3 xl:col-span-6 xl:col-start-4'>
                    <h2 className='text-5xl font-semibold text-center'>Endless ways to use it</h2>
                    <Button variant="link" className="text-custom-blue text-base">Browser all template <ArrowRight size={16} /></Button>
                </div>
                <div className='col-span-6 lg:col-span-2 !col-end-13 relative top-1/3'>
                    <img src="/doodles/dualPeek.png" alt="People peeking from top" className='ms-auto' height={200} width={300} />
                </div>
            </div>
            <div className='grid grid-rows-3 grid-cols-4 gap-6'>
                <Card className="row-span-3 col-span-4 md:col-span-2" icon={Home} title="Company wiki" getTemplate hoverable image="/doodles/wiki.svg" />
                {
                    TemplateItems.map(item => {
                        return <Card className="col-span-4 sm:col-span-2 lg:col-span-1" icon={item.icon} iconColor={item.color} title={item.title} getTemplate key={item.id} hoverable />
                    })
                }
            </div>
        </div>
    )
}

export default Templates