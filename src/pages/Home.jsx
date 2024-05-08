import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import { Feed }  from '@/components/Home/Middle/Feed'
import { Carousel } from '@/components/Home/Carousel/Carousel'
import { Popular } from '@/components/Home/Right/Popular'
import React from 'react'
import { useEffect } from "react"
import { getUserDetailsEndpoint, getAllPostsEndpoint } from '@/conf/config'
import { useSetRecoilState } from 'recoil'
import { detailsAtom } from '@/store/atoms/user'
import { postAtom } from '@/store/atoms/post'
import axios from 'axios'

function Home() {
  const setDetails = useSetRecoilState(detailsAtom)
  const setPosts = useSetRecoilState(postAtom)
  const authHeaders = localStorage.getItem("Authorization")
  useEffect(() => {
      async function fetchData() {await axios.get(getUserDetailsEndpoint, {
        headers: {
          'Authorization': authHeaders
        }
      }).then((res) => {
        setDetails(res.data.user)
      })}
      fetchData()
      return () => {
      
      }
  }, [])

  useEffect(() => {
    async function fetchData() {await axios.get(getAllPostsEndpoint, {
      headers: {
        'Authorization': authHeaders
      }
    }).then((res) => {
      setPosts(res.data.posts)
    })}
    fetchData()
    return () => {
    
    }
  }, [])

  return (
    <div className='w-full bg-black h-[100vh] overflow-x-hidden'>
      <Appbar />
      <div className='flex bg-black'>
        <div className='w-[20vw]'>
          <Sidebar />
        </div>
        <div className='flex w-[80vw] flex-wrap'>
          <div className='flex '>
            <Feed/>
            <Popular />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home