import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { communityModalAtom } from '@/store/atoms/Modal'
import { MdCancelPresentation } from "react-icons/md";
import { Input } from './Input';
import TextArea from './TextArea';
import { communityBody } from '@/zod/communitySchema';
import axios from "axios"
import { createCommunityEndpoint } from '@/conf/config';

export default function CommunityModal() {
  const [communityModal, setCommunityModal] = useRecoilState(communityModalAtom)
  const [communityData, setCommunityData] = useState({
    name: '',
    description: '',
    bannerImage: null
  })

  const name = communityData.name
  const description = communityData.description
  const authHeaders = localStorage.getItem("Authorization")
  const bannerImage = communityData.bannerImage
  
  const createCommunity = async() => {
    const validationResult = communityBody.safeParse({ name: name, description: description, bannerImage: bannerImage })
    if(validationResult.success){
      try{
        const formData = new FormData()
        formData.append('name', communityData.name)
        formData.append('description', communityData.description)
        formData.append('bannerImage', communityData.bannerImage)
        const response = await axios.post(createCommunityEndpoint, formData, {
          headers : {
            'Authorization': authHeaders
          }
        }).then((res) => {
          console.log(res.data)
        })
      } catch(error){
        console.error(error)
      }
    } else{
      alert('Invalid Inputs')
    }
  }

  const emptyFunction = () => {

  }

  return (
    communityModal === true ? (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
      <div className="bg-zinc-900 rounded-lg p-4 h-96 w-1/2 ">
      <button className='absolute top-24 right-80 mr-2' onClick={() => setCommunityModal(false)}>
        <MdCancelPresentation />
      </button>
      Create a community
      <form>
        <div className='inline-flex'>
        <Input label="Name" type="text" value={name} onChange={(e) => setCommunityData({...communityData, name: e.target.value})} placeholder={"Name"} onKeyDown={emptyFunction}/>
        <Input label={"Banner"} type="file" value={bannerImage} onChange={(e) => setCommunityData({...communityData, bannerImage: e.target.files[0]})} placeholder={"Banner"} onKeyDown={emptyFunction}/>
        </div>
        <TextArea label="Description" value={description} onChange={(e) => setCommunityData({...communityData, description: e.target.value})} placeholder={"Description"} onKeyDown={emptyFunction} className={"fixed right-96 top-56 mr-28"}/>
        <button onClick={createCommunity} className='fixed top-[415px] bg-zinc-950 py-1 px-4 rounded-xl text-white hover:bg-zinc-800 duration-300 border border-bg-white'>Create</button>
      </form>
      
      </div>
    </div>) : null
  )
}