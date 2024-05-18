import React from 'react'

function Avatar({avatar}) {
  return (
    <div>
      <img className='w-[100px] ml-4 h-[100px] rounded-full' src={avatar} alt="profile picture"/>
    </div>
  )
}

export default Avatar