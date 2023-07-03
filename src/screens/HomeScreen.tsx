import React from 'react'
import DashboardLayout from '../components/layouts/DashboardLayout'

const HomeScreen = () => {
   return (
      <main className="relative w-full">
         <DashboardLayout>
            <div className='bg-red-500'>
               <h2>Home Screen</h2>
            </div>
         </DashboardLayout>
      </main>
   )
}

export default HomeScreen
