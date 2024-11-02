import React, { ReactNode } from 'react'
import PrelineScript from '../common/PrelineScript'

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <PrelineScript />
        <main>{children}</main>
    </div>
  )
}

export default AuthLayout