import React, { ReactNode, FC } from 'react'

interface LayoutProps {
   children: ReactNode
}

const AuthLayout: FC<LayoutProps> = ({ children }) => {
   return (
      <div>
         {children}
      </div>
   )
}

export default AuthLayout
