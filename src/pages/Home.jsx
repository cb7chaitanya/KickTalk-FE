import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import { Feed }  from '@/components/Home/Middle/Feed'
import { Carousel } from '@/components/Home/Carousel/Carousel'
import { Popular } from '@/components/Home/Right/Popular'
import React from 'react'
import { detailsAtom } from '@/store/atoms/user'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { useEffect } from 'react'
import { getUserDetailsEndpoint } from '@/conf/config'

function Home() {
  const [details, setDetails] = useRecoilState(detailsAtom)
  
  useEffect(() => {
    async function fetchData() {await axios.get(getUserDetailsEndpoint).then((res) => {
      setDetails(res.data)
    })}
    fetchData()
    return () => {
      
    }
  }, [details])

  return (
    <div className='w-full bg-black h-[100vh] overflow-x-hidden'>
      <Appbar />
      <div className='flex bg-black'>
        <div className='w-[20vw]'>
          <Sidebar />
        </div>
        <div className='flex w-[80vw] flex-wrap'>
          <Carousel/>
          <div className='flex '>
            <Feed />
            <Popular />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home