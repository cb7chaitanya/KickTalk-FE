import { Navbar } from '@/components/Home/Navbar'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import React from 'react'

function Home() {
  return (
    <div className='w-full h-[100%]'>
      <Navbar />
      <Sidebar/>
    </div>
  )
}

export default Home