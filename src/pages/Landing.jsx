import React from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'


function Landing() {
  return (
    <div className='relative w-full h-screen'>
      <AuroraBackground/>
      <div className="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-2">
        <h1 className='text-6xl font-bold leading-4'>KickTalk</h1>
      </div>
    </div>
  )
}

export default Landing