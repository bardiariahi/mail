import React from 'react'
import { sidebar } from './helpers/constatnce'
import Link from 'next/link'

export default function SideBar() {
  return (
    <div className='hidden lg:flex min-h-full w-5/12 md:w-2/12 lg:w-4/12 xl:w-[20%] rounded-md bg-[#F1F5F9] p-4'>
        <div className="flex flex-col gap-3 w-full">
        {
            sidebar.map( (item: any) => {
                return <div className='flex w-full gap-3 px-3 py-1 hover:bg-[#233D9A] hover:text-white rounded-lg cursor-pointer items-center text-base duration-300 hover:shadow-md h-10'>
                    <Link className='w-full flex gap-1' href={item.path} >
                    {item.icon}
                    {item.name}
                </Link>
                </div> as any
            })
        }
        </div>
    </div>
  )
}
