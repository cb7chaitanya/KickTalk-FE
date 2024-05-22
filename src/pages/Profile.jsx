import { Appbar } from '@/components/Home/Appbar'
import { Sidebar } from '@/components/Home/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { detailsAtom } from '@/store/atoms/user'
import { useRecoilValue, useRecoilState } from 'recoil'
import Bio from '@/components/Profile/Bio'
import Avatar from '@/components/Profile/Avatar'
import Username from '@/components/Profile/Username'
import Email from '@/components/Profile/Email'
import Follow from '@/components/Profile/Follow'
import { getYourPostsEndpoint } from '@/conf/config'
import { userPostAtom } from '@/store/atoms/post'
import axios from 'axios'
import { PostPanel } from '@/components/Home/Middle/PostPanel'

const Profile =  () =>  {
  const details = useRecoilValue(detailsAtom)
  const authHeaders = localStorage.getItem("Authorization")
  const [userPosts, setUserPosts] = useRecoilState(userPostAtom)
  useEffect(() => {
    async function fetchData() {
      try{
      await axios.get(getYourPostsEndpoint, {
        headers: {
          'Authorization': authHeaders
        }
      }).then((res) => {
        console.log(res.data.posts)
        setUserPosts(res.data.posts.reverse())
        console.log(userPosts)
      })
      } catch(error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  const flag = Array.isArray(userPosts) === true ? true : false
  return (
    <div className='text-white w-full h-[100vh] bg-black overflow-x-hidden'>
      <Appbar />
      <Sidebar />
      <div className='bg-black'>
        <div className='w-[100vw] transform translate-x-[18%] h-[50vh] text-white border-b-white border mb-8'>
          {/*Profile Pane: Avatar, Follow, Following Count, bio, username*/}
          <Bio bio={details.profile.bio} />
          <Username username={details.username}/>
          <Avatar avatar={details.profile.avatar.url} />
          <Email email={details.email}/>
          <Follow followers={details.followers} following={details.following}/>
        </div>
      </div>
      <div className='text-white trasnform translate-x-[55%] text-2xl font-semibold mb-8'>
          User Posts
      </div>
      <div className='w-[100vw] h-[50vh] text-white transform translate-x-[30%]'>
          {flag===true && userPosts.map((post) => {
            return (
              <div className='mb-8'>
            <PostPanel key={post._id} post={post} />
            </div>
          )
          })}
        </div>
    </div>
  )
}

export default Profile