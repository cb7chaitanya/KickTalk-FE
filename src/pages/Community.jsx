import { Appbar } from '@/components/Home/Appbar'
import { PostPanel } from '@/components/Home/Middle/PostPanel'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import { getCommunityEndpoint, getCommunityPostsEndpoint, subscribeCommunityEndpoint, unsubscribeCommunityEndpoint } from '@/conf/config'
import { detailsAtom } from '@/store/atoms/user'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { TbGhost2 } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { RiCommunityLine } from "react-icons/ri";

function Community() {
  const {communityId} = useParams()
  const getCommunityHandler = getCommunityEndpoint.replace(":communityId", communityId)
  const authHeaders = localStorage.getItem('Authorization')
  const getCommunityPostHandler = getCommunityPostsEndpoint.replace(":communityId", communityId)
  const [community, setCommunity] = useState({})
  const [communityPosts, setCommunityPosts] = useState([])
  const [postCount, setPostCount] = useState(0)
  const [subscriberCount, setSubscriberCount] = useState(0)
  const [subscribed, setSubscribed] = useState(false)
  const details = useRecoilValue(detailsAtom)
  const userId = details._id
  const deleteCommunityHandler = getCommunityEndpoint.replace(":communityId", communityId)
  const subscribeHandler = subscribeCommunityEndpoint.replace(":communityId", communityId)
  const unsubscribeHandler = unsubscribeCommunityEndpoint.replace(":communityId", communityId)
  const navigate = useNavigate()
  const subscribeCommunity = async() => {
    await axios.post(subscribeHandler,{
      headers: {
        'Authorization': authHeaders
      }
    }).then((res) => {
      console.log(res.data)
      setSubscribed(true)
    })
  }
  const unsubscribeCommunity = async() => {
    await axios.delete(unsubscribeHandler,{
      headers: {
        'Authorization': authHeaders
      }
    }).then((res) => {
      console.log(res.data)
      setSubscribed(false)
    })
  }
  const deleteCommunity = async() =>  {
    await axios.delete(deleteCommunityHandler,{
      headers: {
        'Authorization': authHeaders
      }
    }).then((res) => {
      console.log(res.data)
      navigate('/home')
    })
  }
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
  const arrayCheck = Array.isArray(community?.subscribers)
  const status = arrayCheck && community?.subscribers.find((subscriber) => subscriber._id === userId) ? true : false
  if(status===true){
    setSubscribed(true)
  }
  console.log(status)
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
          <div className='self-end'>{flag===true ? <div className='inline-flex fixed top-[35%] right-[35%]'>
            <button><MdEdit className='text-xl mr-4 hover:text-red-500' /></button>
            <button onClick={deleteCommunity}><MdDelete className='text-xl ml-4 hover:text-red-500' /></button>
          </div> : <div className='inline-flex fixed top-[35%] right-[35%]'>
            {subscribed && <button onClick={unsubscribeCommunity} className='text-white text-sm font-normal inline-flex px-2 py-1 bg-zinc-900 rounded-2xl border hover:bg-zinc-700 duration-300'><RiCommunityLine className="mt-1 mr-1"/>Unsubscribe</button> }
            {!subscribed && <button onClick={subscribeCommunity} className='text-white text-sm font-normal inline-flex px-2 py-1 bg-zinc-900 rounded-2xl border hover:bg-zinc-700 duration-300'><RiCommunityLine className="mt-1 mr-1"/>Subscribe</button> } 
          </div>}</div>  
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