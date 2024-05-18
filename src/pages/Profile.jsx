import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import React, { useState } from 'react'
import { detailsAtom } from '@/store/atoms/user'
import { useRecoilValue } from 'recoil'
import Bio from '@/components/Profile/Bio'
import Avatar from '@/components/Profile/Avatar'

function Profile() {
  const details = useRecoilValue(detailsAtom)
  return (
    <div className='text-white w-full h-screen flex'>
      <Appbar />
      <Sidebar />
      <div className=''>
        <div className='w-[100vw] fixed left-[18%] top-[%] h-[60vh] text-white border-b-white border'>
          {/*Profile Pane: Avatar, Follow, Following Count, bio, username*/}
          <Bio bio={details.profile.bio} />
          <Avatar avatar={details.profile.avatar.url} />
        </div>
      </div>
    </div>
  )
}

export default Profile