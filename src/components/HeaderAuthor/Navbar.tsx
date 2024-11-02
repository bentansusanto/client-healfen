'use client'
import React from 'react'
import { Mobile } from '../common/MediaQuery'
import Link from 'next/link'
import Image from 'next/image'
import image from '@/libs/ImageData'
import { navData } from '@/libs/NavFootData'

const Navbar = () => {
  const {isMobile, isTablet} = Mobile()
  return (
    <>
      {
        isMobile || isTablet ? 
        // Mobile & Tablet
        (<></>) :
        // Desktop and Large Desktop 
        (<div className='xl:px-40 lg:px-20 py-4 flex items-center justify-between'>
            <div className='flex items-center space-x-20'>
              <Link href={'/'}>
                  <Image src={image.LogoHealfen} alt='logo-healfen' className='w-14'/>
              </Link>
              <ul className='flex items-center space-x-5'>
                {
                  navData.map((list:any, idx:any) => (
                    <li key={idx}>
                      <Link href={list.link}>{list.page}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* authentication */}
            <div className='flex items-center space-x-2'>
              <button className='py-2.5 px-6'>Login</button>
              <button className='py-2.5 px-6 bg-gray-200 rounded-md hover:-translate-y-1 transition-all duration-300 hover:bg-blue hover:text-white'>Register</button>
            </div>
        </div>)
      }
    </>
  )
}

export default Navbar