import React from 'react'
import { useRecoilState } from 'recoil'
import { communityModalAtom } from '@/store/atoms/Modal'

export default function communityModal() {
  const [communityModal, setCommunityModal] = useRecoilState(communityModalAtom)
  return (
    communityModal === true ? (<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">communityModal</div>) : null
  )
}