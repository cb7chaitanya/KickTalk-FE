import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import React from 'react'
import { communityAtom } from '@/store/atoms/Community'
import { useRecoilValue } from 'recoil'
import CommunityCard from '@/components/Community/CommunityCard'

function Communities() {
  const communities = useRecoilValue(communityAtom)
  console.log(communities)
  return (
    <div className='bg-black h-screen w-full'>
      <Appbar />
      <Sidebar />
      <div className='text-3xl fixed text-white top-[15%] left-[20%] mb-4'>
        All Communities
      </div>
      <div className='fixed top-[30%] left-[20%] w-full'>
      {communities.map((community, index) => (
        <CommunityCard community={community} key={index}/>
      ))}
      </div>
    </div>
  )
}

export default Communities 