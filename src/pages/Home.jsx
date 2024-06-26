import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import { Feed }  from '@/components/Home/Middle/Feed'
import { Carousel } from '@/components/Home/Carousel/Carousel'
import { Popular } from '@/components/Home/Right/Popular'
import React, { useState } from 'react'
import { useEffect, useCallback } from "react"
import { getUserDetailsEndpoint, getAllPostsEndpoint } from '@/conf/config'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { detailsAtom } from '@/store/atoms/user'
import { postAtom } from '@/store/atoms/post'
import axios from 'axios'
import CommunityModal from '@/components/Form/Modals/communityModal'
import PostModal from '@/components/Form/Modals/postModal'
import ProfileModal from '@/components/Form/Modals/profileModal'

function Home() {
  const [details, setDetails] = useRecoilState(detailsAtom)
  const setPosts = useSetRecoilState(postAtom)
  const authHeaders = localStorage.getItem("Authorization")
  const fetchData = useCallback(async() => {
    try{await axios.get(getUserDetailsEndpoint, {
      headers: {
        'Authorization': authHeaders
      }
    }).then((res) => {
      setDetails(res.data.user)
    })}
    catch(error) {
      console.error(error)
    }
  })
  const fetchPostData = useCallback(async() => {await axios.get(getAllPostsEndpoint, {
    headers: {
      'Authorization': authHeaders
    }
  }).then((res) => {
    setPosts(res.data.posts.reverse())
  })})
  useEffect(() => {
      fetchData()
      fetchPostData()
      return () => {
      
      }
  }, [])

  return (
    <div className='w-full bg-black h-[100vh] overflow-x-hidden'>
      <Appbar />
      <div className='flex bg-black'>
        <div className='w-[20vw]'>
          <Sidebar/>
        </div>
        <div className='flex w-[80vw] flex-wrap'>
          <div className='flex '>
            <Feed/>
            <Popular />
            <PostModal />
            <ProfileModal />
            <CommunityModal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home