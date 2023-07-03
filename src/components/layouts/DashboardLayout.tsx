import Sidebar from '../molecules/Sidebar'
import { ReactNode, FC } from 'react'

interface LayoutProps {
   children: ReactNode
}

const DashboardLayout: FC<LayoutProps> = ({ children }) => {
   return (
      <div className='w-full flex relative'>
         <Sidebar />
         <div className='w-[calc(100% - 280px)]'>{children}</div>
      </div>
   )
}

export default DashboardLayout
