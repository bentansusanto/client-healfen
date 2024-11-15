'use client'
import { ReactNode } from 'react'
import Navbar from '../HeaderAuthor/Navbar'
import { AOSSetup } from '../common/AosSetup'
import Footer from '../HeaderAuthor/Footer'

const DefaultsLayout = ({children}:{children:ReactNode}) => {
  AOSSetup()
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default DefaultsLayout