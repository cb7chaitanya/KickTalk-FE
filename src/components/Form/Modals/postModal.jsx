import React from 'react'
import { useRecoilState } from 'recoil'
import { postModalAtom } from '@/store/atoms/Modal'

function postModal() {
  const [postModal, setPostModal] = useRecoilState(postModalAtom)
  return ( 
    postModal === true ? (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">postModal</div>) : null
  )
}

export default postModal