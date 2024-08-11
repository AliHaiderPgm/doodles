import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { FooterItems } from './_components/FooterItems'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='grid grid-cols-12 mx-auto border-t p-6 md:p-12'>
            <div className='col-span-12 sm:col-span-10 xl:col-span-8 sm:col-start-2 xl:col-start-3 grid grid-cols-6 lg:grid-cols-5 gap-8 space-x-4 mx-auto text-nowrap'>
                <div className='col-span-6 lg:col-span-1 space-y-4 lg:space-y-3'>
                    <img src="/logos/full-logo.png" alt="Doodle" className='w-1/3 lg:w-3/4 mb-8' height={50} width={100} />
                    <div className='flex gap-2 flex-wrap lg:justify-center !mb-12'>
                        <Instagram size={28} className='hover:bg-gray-500/25 rounded p-1 hover:text-fuchsia-600' />
                        <Twitter size={28} className='hover:bg-gray-500/25 rounded p-1 hover:text-blue-500' />
                        <Linkedin size={28} className='hover:bg-gray-500/25 rounded p-1 hover:text-blue-500' />
                        <Facebook size={28} className='hover:bg-gray-500/25 rounded p-1 hover:text-blue-600' />
                        <Youtube size={28} className='hover:bg-gray-500/25 rounded p-1 hover:text-red-600' />
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px]" aria-label="select new language">
                                <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="urdu">Urdu</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='flex flex-col gap-6 items-start'>
                        <Button variant="link" size="sm" className="text-gray-500 p-0 h-0">Don't sell or share my info</Button>
                        <Button variant="link" size="sm" className="text-gray-500 p-0 h-0">Cookie setting</Button>
                    </div>
                    <p className='text-sm'>© {year} Notion Labs, Inc.</p>
                </div>
                <div className='col-span-3 lg:col-span-1 space-y-2'>
                    <p className='font-semibold'>Company</p>
                    <div className='flex flex-col'>
                        {FooterItems.company.map(item => {
                            return <Link className="text-gray-600 hover:underline underline-offset-2 h-8" key={item.title}>{item.title}</Link>
                        })}
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-1 space-y-2'>
                    <p className='font-semibold'>Resources</p>
                    <div className='flex flex-col'>
                        {FooterItems.Resources.map(item => {
                            return <Link className="text-gray-600 hover:underline underline-offset-2 h-8" key={item.title}>{item.title}</Link>
                        })}
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-1 space-y-2'>
                    <p className='font-semibold'>Download</p>
                    <div className='flex flex-col'>
                        {FooterItems.Download.map(item => {
                            return <Link className="text-gray-600 hover:underline underline-offset-2 h-8" key={item.title}>{item.title}</Link>
                        })}
                    </div>
                </div>
                <div className='col-span-3 lg:col-span-1 space-y-2 relative'>
                    <p className='font-semibold'>Doodle For</p>
                    <div className='flex flex-col'>
                        {FooterItems.NotionFor.map(item => {
                            return <Link className="text-gray-600 hover:underline underline-offset-2 h-8" key={item.title}>{item.title}</Link>
                        })}
                    </div>
                    <Link className="text-gray-900 font-semibold hover:underline underline-offset-2 flex items-center absolute bottom-0">Explore more <ArrowRight size={16} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer