import React from 'react'
import { PostPanel } from './PostPanel'

export function Feed() {
  return (
    <div className='text-white mx-2 mt-6 flex rounded-t-xl justify-center w-[60vw] h-full border bg-black'>
      <PostPanel />
    </div>
  )
}