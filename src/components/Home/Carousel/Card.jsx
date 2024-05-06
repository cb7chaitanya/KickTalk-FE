import React from 'react'

export function Card() {
  return (
    <div className='w-[20vw] h-[15vw] mx-8 border border-white text-white mt-2 rounded-xl hover:bg-zinc-700 duration-300'>
        <h1 className='text-2xl font-bold py-2'>Post Title</h1>
        <h1 className='text-md font-semibold py-2'>SubTitle</h1>
        <h1 className='text-sm py-2'>Community Name</h1>
        <h1 className='text-sm py-2'>Author</h1>
    </div>
  )
}