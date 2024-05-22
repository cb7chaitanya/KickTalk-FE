import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import React from 'react'
import { useParams } from 'react-router-dom'

function Community() {
  const {communityId} = useParams()
  return (
    <div className='w-full h-screen text-white'>
      <Appbar />
      <Sidebar />
      
    </div>
  )
}

export default Community