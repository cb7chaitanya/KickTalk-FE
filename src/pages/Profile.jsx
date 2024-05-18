import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import React from 'react'
import { detailsAtom } from '@/store/atoms/user'
import { useRecoilValue } from 'recoil'
import Bio from '@/components/Profile/Bio'
import Avatar from '@/components/Profile/Avatar'
import Username from '@/components/Profile/Username'
import Email from '@/components/Profile/Email'
import Follow from '@/components/Profile/Follow'

function Profile() {
  const details = useRecoilValue(detailsAtom)
  return (
    <div className='text-white w-full h-screen flex'>
      <Appbar />
      <Sidebar />
      <div className=''>
        <div className='w-[100vw] fixed left-[18%] h-[50vh] text-white border-b-white border'>
          {/*Profile Pane: Avatar, Follow, Following Count, bio, username*/}
          <Bio bio={details.profile.bio} />
          <Username username={details.username}/>
          <Avatar avatar={details.profile.avatar.url} />
          <Email email={details.email}/>
          <Follow followers={details.followers} following={details.following}/>
        </div>
      </div>
    </div>
  )
}

export default Profile