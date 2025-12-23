import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './togglebutton'

const Navbar = () => {
  return (
    <nav className='z-50 sticky top-0 bg-background/50 border-b backdrop-blur'>
        <div className='max-w-6xl mx-auto px-4'>
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <Link href={'/'} className='text-xl font-bold'>
                    <span className='text-3xl'>Desi-destination</span>
                    <span className='text-3xl text-red-500'>Heven</span>
                    </Link>
                </div>

                <div className="hidden md:flex space-x-4 items-center">
                    <Link href={'/'} className='hover:text-gray-600'>Home</Link>
                    <Link href={'/jobs'} className='hover:text-gray-600'>Jobs</Link>
                    <Link href={'/about'} className='hover:text-gray-600'>About</Link>
                    <Link href={'/login'} className='hover:text-gray-600'>Login</Link>
                    <div>
                        <ModeToggle/>
                    </div>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar