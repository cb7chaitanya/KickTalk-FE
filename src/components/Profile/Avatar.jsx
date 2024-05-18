import React from 'react'

function Avatar({avatar}) {
  return (
    <div className='border-2 border-zinc-400 w-[100px] ml-4 h-[100px] rounded-full fixed top-20'>
      <img className='w-[100px] h-[100px] rounded-full' src={avatar} alt="profile picture"/>
    </div>
  )
}

export default Avatar