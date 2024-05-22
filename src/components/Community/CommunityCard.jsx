import React from 'react'
import { FiUsers } from "react-icons/fi";
import { BsFileEarmarkPost } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { IoIosNavigate } from "react-icons/io";

function CommunityCard({community}) {
    const communityName = community.name
    const communityDescription = community.description
    const communitySubscribers = community.Count.subscribers
    const communityPosts = community.Count.posts
    const communityId = community._id
    const navigate = useNavigate()
  return (
    <div className='w-[60%] mb-4 p-2 h-[20vh] rounded-lg border flex flex-col'>
        <div className='text-3xl mb-2 text-white '>
            {communityName}
            <button className='ml-4' onClick={() => navigate(`/${communityId}`)}>
                <IoIosNavigate className='text-xl text-white' />
            </button>
        </div>
        <div className='text-lg text-gray-400'>
            {communityDescription}
        </div>
        <div className='inline-flex text-white'>
            <div className='inline-flex'>
            <FiUsers className='text-xl mr-2' />
            {communitySubscribers}
            </div>
            <div className='inline-flex'>
            <BsFileEarmarkPost className='text-xl mx-2' />
            {communityPosts}
            </div>
        </div>
    </div>
  )
}

export default CommunityCard