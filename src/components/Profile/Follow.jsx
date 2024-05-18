import React from 'react'

function Follow({followers, following}) {
  const followerCount = followers.length
  const followingCount = following.length
  return (
    <div className='text-zinc-400 fixed top-32 left-[55%] inline-flex'>
      <div className='hover:underline'>{`${followerCount} Followers`}</div>
      <div className='ml-4 hover:underline'>{`${followingCount} Following`}</div>
    </div>
  )
}

export default Follow