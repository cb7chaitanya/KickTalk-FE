import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Feed }  from '@/components/Home/Middle/Feed'
import { Carousel } from '@/components/Home/Carousel/Carousel'
import { Popular } from '@/components/Home/Right/Popular'
import React from 'react'

function Home() {
  return (
    <div className='w-full bg-black h-[100vh] overflow-hidden'>
      <Appbar />
      <div className='flex bg-black'>
        <div className='w-[20vw]'>
          <Sidebar />
        </div>
        <div className='flex w-[80vw] flex-wrap'>
          <Carousel/>
          <div className='flex '>
            <Feed />
            <Popular />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home