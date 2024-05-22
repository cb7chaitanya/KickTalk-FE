import { Appbar } from '@/components/Home/Appbar'
import { PostPanel } from '@/components/Home/Middle/PostPanel'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import { getCommunityEndpoint, getCommunityPostsEndpoint } from '@/conf/config'
import { detailsAtom } from '@/store/atoms/user'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { TbGhost2 } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Community() {
  const {communityId} = useParams()
  const getCommunityHandler = getCommunityEndpoint.replace(":communityId", communityId)
  const authHeaders = localStorage.getItem('Authorization')
  const getCommunityPostHandler = getCommunityPostsEndpoint.replace(":communityId", communityId)
  const [community, setCommunity] = useState({})
  const [communityPosts, setCommunityPosts] = useState([])
  const [postCount, setPostCount] = useState(0)
  const [subscriberCount, setSubscriberCount] = useState(0)
  const details = useRecoilValue(detailsAtom)
  const userId = details._id
  useEffect(() => {
    const fetchCommunity = async() => {
      await axios.get(getCommunityHandler,{
        headers: {
          'Authorization': authHeaders
        }
      }).then((res)=>{
        console.log(res.data.community)
        setCommunity(res.data.community)
        setPostCount(res.data.community?.Count?.posts)
        setSubscriberCount(res.data.community?.Count?.subscribers)
      })
    }
    const fetchCommunityPosts = async() => {
      await axios.get(getCommunityPostHandler,{
        headers: {
          'Authorization': authHeaders
        }
      }).then((res)=>{
        console.log(res.data.posts)
        setCommunityPosts(res.data.posts)
      })
    }
    fetchCommunity()
    fetchCommunityPosts()
    return () => {

    }
  }, [])
  const admin = community?.admin
  const flag = admin === userId ? true : false
  return (
    <div className='w-full h-screen text-white overflow-x-hidden'>
      <Appbar />
      <Sidebar />
      <div className='relative w-[100vw] transform translate-x-[18%] h-[50vh] text-white border-b-white border mb-8'>
        <div className='border-2 border-zinc-400 w-[150px] ml-4 h-[150px] rounded-xl fixed top-20'>
          <img src={community?.Banner?.url} className='w-[150px] h-[150px] rounded-xl' alt="banner" />
        </div>
        <div className='fixed inline-flex top-[35%] text-2xl font-bold left-[15%] text-white'>
          <div>{community?.name}</div>
          <div className='self-end'>{flag===false ? <div className='inline-flex fixed top-[35%] right-[35%]'>
            <button><MdEdit className='text-xl mr-4' /></button>
            <button><MdDelete className='text-xl ml-4' /></button>
          </div> : <div></div>}</div>  
        </div>
        <div className='fixed top-[45%] left-[15%] text-lg text-gray-500'>{community?.description}</div>
        <div className='inline-flex fixed top-[65%] left-[15%]'>
          <div className='inline-flex text-gray-500 mr-2'>{subscriberCount} Subscribers</div>
          <div className='inline-flex text-gray-500'>
            {postCount} Posts
          </div>
        </div>
      </div>
      {postCount > 0 ? <div className='w-[100vw] transform translate-x-[18%]'>
        {communityPosts.map((post)=>{
          return <PostPanel post={post} key={post._id}/>
        })
        }
      </div> : <div className='text-2xl p-4 font-bold w-[100vw] transform translate-x-[40%]'>
        No Posts in this community
        <TbGhost2 className='text-8xl ml-24 text-slate-700/30'/>
        </div>}
    </div>
  )
}

export default Community