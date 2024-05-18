import React, {useState} from 'react'
import { useRecoilState } from 'recoil'
import { profileModalAtom } from '@/store/atoms/Modal'
import { MdCancelPresentation } from "react-icons/md";
import { createProfileEndpoint } from '@/conf/config';
import axios from "axios"
import { Input } from './Input';
import TextArea from './TextArea';
import {profileBody} from '@/zod/profileSchema'
import { detailsAtom } from '@/store/atoms/user';

export default function ProfileModal() {
  const [profileModal, setProfileModal] = useRecoilState(profileModalAtom)
  const [details, setDetails] = useRecoilState(detailsAtom)
  const [profileData, setProfileData] = useState({
    bio: '',
    avatarImage: null
  })
  const authHeaders = localStorage.getItem("Authorization")
  const bio = profileData.bio
  const avatarImage = profileData.avatarImage

  const createProfile = async() => {
    const validationResult = profileBody.safeParse({ bio: bio, avatarImage: avatarImage })
    if(validationResult.success){
      try{
        const formData = new FormData()
        formData.append('bio', profileData.bio)
        formData.append('avatarImage', profileData.avatarImage)
        await axios.post(createProfileEndpoint, formData, {
          headers: {
            'Authorization': authHeaders
          }
        }).then((res)=>{
          console.log(res.data)
          setDetails(res.data)
        })
      } catch(error){
        console.error(error)
      }
    } else {
      alert('Invalid Inputs')
    }  
  }

  return ( profileModal === true ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
      <div className="bg-zinc-900 rounded-lg p-4 h-96 w-1/2">
      <button className='absolute top-24 right-80 mr-2' onClick={() => setProfileModal(false)}>
        <MdCancelPresentation />
      </button>
      <div className='ml-3'>Create your profile</div>
      <form>
        <Input label="Avatar" type="file" onChange={(e) => setProfileData({...profileData, avatarImage: e.target.files[0] })}/>
        <TextArea className="ml-2 " label="Bio" value={bio} onChange={(e) => setProfileData({...profileData, bio: e.target.value})} placeholder={"Bio"}/>
      </form>
      <button onClick={createProfile} className='fixed top-[400px] right-[400px] bg-zinc-950 py-1 px-4 rounded-xl text-white hover:bg-zinc-800 duration-300 border border-bg-white'>Create</button>
      </div>
    </div>) : null
  )
}
