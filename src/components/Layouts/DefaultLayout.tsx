import React, { ReactNode } from 'react'
import Navbar from '../HeaderAuthor/Navbar'

const DefaultsLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default DefaultsLayout