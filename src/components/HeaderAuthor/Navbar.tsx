'use client'
import image from '@/libs/ImageData'
import { navData } from '@/libs/NavFootData'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Mobile } from '../common/MediaQuery'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const {isMobile, isTablet} = Mobile()
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      {
        isMobile || isTablet ? 
        // Mobile & Tablet
        (<div className=''>
          <div className={`${openMenu&& "bg-gray-100"} transition-all duration-300 flex justify-between items-center py-4 md:px-8 px-5`}>
            <Link prefetch={true} href={'/'}>
              <Image src={image.LogoHealfen} alt='' className='md:w-12 w-10'/>
            </Link>
            <div className={`${openMenu&& "rotate-180"} duration-300 transition-all text-2xl`}>
              {
                openMenu? (<IoClose onClick={() => setOpenMenu(false)}/>) : (<HiOutlineMenuAlt3 onClick={handleOpenMenu} />)
              }
            
            </div>
          </div>
          {/* open menu */}
          <div className={`${openMenu? "top-12 h-full" : "opacity-0 top-20 pointer-events-none"} w-full bg-gray-100 transition-all duration-300`}>
            <h1> Hello world</h1>
          </div>  
         
        </div>) :
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