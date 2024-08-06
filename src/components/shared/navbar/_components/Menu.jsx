import React from 'react'
import { Link } from 'react-router-dom'
import { DropDownList, DropdownMenu, MenuTrigger } from '@/components/ui/dropdown'
import { Download, LeftOverProductList, ProductList, Resources, SolByTeamFunc, SolByTeamSize, SolNotionFor } from './MenuItems'

const Menu = () => {

    return (
        <div className='hidden min-[1080px]:flex gap-1 items-center'>
            <DropdownMenu>
                <MenuTrigger>Products</MenuTrigger>
                <DropDownList>
                    <div className="flex">
                        <ul className="grid p-2 md:w-[400px] lg:w-[280px] hover:cursor-pointer border-r">
                            {ProductList.map((product) => {
                                return <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm" key={product.title}>
                                    <product.icon className={`${product.iconColor} text-2xl mr-2`} />
                                    <div className="select-none">
                                        <div className="flex gap-1 items-center">
                                            <Link to="#" className="font-medium">{product.title}</Link>
                                            {product.new ? <span className="bg-gray-400/10 text-gray-700 rounded-full px-2 text-sm font-medium">New</span> : null}
                                        </div>
                                        <p className="text-gray-400 text-sm font-light">{product.description}</p>
                                    </div>
                                </div>
                            })}
                        </ul>
                        <ul className="grid p-2 md:w-[400px] lg:w-[250px] hover:cursor-pointer h-full">
                            {LeftOverProductList.map((product) => {
                                return <div className="flex flex-col gap-1 hover:bg-gray-400/10 p-1 rounded-sm select-none" key={product.title}>
                                    <div className="flex gap-1 items-center">
                                        <Link to="#" className="font-medium">{product.title}</Link>
                                        {product.new ? <span className="bg-gray-500/10 text-gray-700 rounded-full px-2 text-sm font-medium">New</span> : null}
                                    </div>
                                    <p className="text-gray-400 text-sm font-light">{product.description}</p>
                                </div>
                            })}
                        </ul>
                    </div>
                </DropDownList>
            </DropdownMenu>

            <DropdownMenu>
                <MenuTrigger>Download</MenuTrigger>
                <DropDownList>
                    <div className='md:w-[150px] lg:w-[220px]'>
                        {
                            Download.map((item) => {
                                return <Link to={item.link} className='block w-full font-medium hover:bg-gray-400/10 rounded p-1' key={item.title}>{item.title}</Link>
                            })
                        }
                        <p className='pt-1 pb-3 text-sm text-gray-400 font-medium tracking-wide cursor-pointer'>We are always at home right <span className='underline hover:text-blue-500'>into your browser</span> </p>
                    </div>
                </DropDownList>
            </DropdownMenu>

            <DropdownMenu>
                <MenuTrigger>Solutions</MenuTrigger>
                <DropDownList>
                    <div className='flex gap-2'>
                        <div className='p-1 border-r'>
                            <p className='uppercase tracking-wide font-light text-sm'>By Team Size</p>
                            {
                                SolByTeamSize.map((item) => {
                                    return <div className='flex gap-2 items-center hover:bg-gray-400/10 rounded p-1 md:w-[230px] lg:w-[280px]' key={item.title}>
                                        <item.icon className='text-3xl' />
                                        <Link to={item.link}>
                                            <p className='text-lg font-medium'>{item.title}</p>
                                            <p className='text-gray-400 text-sm font-light'>{item.description}</p>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                        <div className='p-1 border-r'>
                            <p className='uppercase tracking-wide font-light text-sm'>By Team Function</p>
                            {
                                SolByTeamFunc.map((item) => {
                                    return <div className='flex gap-2 items-center hover:bg-gray-400/10 rounded p-1 md:w-[150px] lg:w-[200px]' key={item.title}>
                                        <Link to={item.link} className='text-lg font-medium'>{item.title}</Link>
                                    </div>
                                })
                            }
                        </div>
                        <div className='p-1'>
                            <p className='uppercase tracking-wide font-light text-sm'>Notion For</p>
                            {
                                SolNotionFor.map((item) => {
                                    return <div className='flex gap-2 items-center hover:bg-gray-400/10 rounded p-1 md:w-[150px] lg:w-[200px]' key={item.title}>
                                        <Link to={item.link} className='text-lg font-medium'>{item.title}</Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </DropDownList>
            </DropdownMenu>

            <DropdownMenu>
                <MenuTrigger>Resources</MenuTrigger>
                <DropDownList>
                    <div className='md:w-[150px] lg:w-[190px] p-1'>
                        {Resources.map((item) => <Link to={item.link} className='block w-full font-medium hover:bg-gray-400/10 rounded p-1' key={item.title}>{item.title}</Link>)}
                    </div>
                </DropDownList>
            </DropdownMenu>

            <Link to="#" className='navBtn'>Pricing</Link>
        </div>
    )
}

export default Menu