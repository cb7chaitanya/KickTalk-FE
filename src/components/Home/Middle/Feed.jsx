import React, {useEffect} from 'react'
import { PostPanel } from './PostPanel'
import { useRecoilValue } from 'recoil';
import { postAtom } from '@/store/atoms/post'

export function Feed() {
  const posts = useRecoilValue(postAtom);
  return (
    <div className='text-white mt-24 -translate-x-[1%] rounded-t-xl justify-center w-[60vw] h-full bg-black'>
      {posts.map((post)=>{
        return <div className='mb-8'>
        <PostPanel post={post} key={post._id}/>
        </div>
      })}
    </div>
  );
}