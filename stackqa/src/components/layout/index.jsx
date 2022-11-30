import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

function Layout() {
  return (
    <div className='w-full min-h-screen flex'>
        <div className="w-[200px] bg-fixed">
            <Sidebar />
        </div>
        <div className='flex-1 bg-[#C2C6CB]'>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout