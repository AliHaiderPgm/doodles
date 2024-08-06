import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Download, LeftOverProductList, ProductList, Resources, SolByTeamFunc, SolByTeamSize, SolNotionFor } from './MenuItems'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'


const MobileMenu = ({ className }) => {
    return (
        <>
            <div className={`${className} min-h-[calc(100vh_-_56.98px)] w-full min-[1080px]:hidden bg-white px-4 pb-4`}>
                <Accordion type="multiple" collapsible="true">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Product</AccordionTrigger>
                        <AccordionContent>
                            {ProductList.map((item) => {
                                return <Link to="#" className='block mb-2 text-base' key={item.title}>
                                    <div className='flex gap-2'>
                                        <item.icon className={`${item.iconColor}`} />
                                        <p className='text-base'>{item.title}
                                            {item.new ? <span className="bg-gray-400/25 text-gray-700 rounded-full px-2 pb-1 ml-1 text-sm font-medium ">New</span> : null}
                                        </p>
                                    </div>
                                </Link>
                            })}
                            {
                                LeftOverProductList.map((item) => {
                                    return <Link to="#" className='text-base mb-2 block' key={item.title}>{item.title}</Link>
                                })
                            }
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Solutions</AccordionTrigger>
                        <AccordionContent>
                            <div className='space-y-6'>
                                <div>
                                    <p className='uppercase tracking-wide font-light text-xs mb-1'>By Team Size</p>
                                    {SolByTeamSize.map((item) => {
                                        return <Link to={item.link} className='text-base mb-2 block' key={item.title}>{item.title}</Link>
                                    })}
                                </div>
                                <div>
                                    <p className='uppercase tracking-wide font-light text-xs mb-1'>By Team Function</p>
                                    {SolByTeamFunc.map((item) => {
                                        return <Link to={item.link} className='text-base mb-2 block' key={item.title}>{item.title}</Link>
                                    })}
                                </div>
                                <div>
                                    <p className='uppercase tracking-wide font-light text-xs mb-1'>Notion For</p>
                                    {SolNotionFor.map((item) => {
                                        return <Link to={item.link} className='text-base mb-2 block' key={item.title}>{item.title}</Link>
                                    })}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Resources</AccordionTrigger>
                        <AccordionContent>
                            {Resources.map((item) => {
                                return <Link to={item.link} className='block mb-2 text-base' key={item.title}>{item.title}</Link>
                            })}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Download</AccordionTrigger>
                        <AccordionContent>
                            <div>
                                {Download.map((item) => {
                                    return <Link to={item.link} className='block mb-2 text-base' key={item.title}>{item.title}</Link>
                                })}
                                <p className='pt-1 text-sm text-gray-400 font-medium tracking-wide cursor-pointer'>We are always at home right <span className='underline hover:text-blue-500'>into your browser</span> </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Link to="#" className='text-base font-bold py-4 block border-b'>Pricing</Link>
                <Link to="#" className='text-base font-bold py-4 block border-b'>Request a demo</Link>
                <div className='space-y-4 mt-4'>
                    <Button className="w-full text-base" size="sm">Get Notion Free</Button>
                    <Button variant="ghost" className="w-full border text-base">Login</Button>
                </div>
            </div>
        </>
    )
}

export default MobileMenu