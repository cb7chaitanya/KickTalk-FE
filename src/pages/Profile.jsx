import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import React, { useState } from 'react'
import { detailsAtom } from '@/store/atoms/user'
import { useRecoilValue } from 'recoil'
import Bio from '@/components/Profile/Bio'

function Profile() {
  const details = useRecoilValue(detailsAtom)
  return (
    <div className='text-white w-full h-screen flex'>
      <Appbar />
      <Sidebar />
      <div className='flex flex-col'>
        <div className='w-[100vw] fixed left-[18%] top-[11%] h-[60vh] text-white border-b-white border'>
          {/*Profile Pane: Avatar, Follow, Following Count, bio, username*/}
          <Bio bio={details.bio}/>
          
        </div>
      </div>
    </div>
  )
}

export default Profile