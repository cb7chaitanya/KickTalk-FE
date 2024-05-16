import React from 'react'
import { useRecoilState } from 'recoil'
import { profileModalAtom } from '@/store/atoms/Modal'

function profileModal() {
  const [profileModal, setProfileModal] = useRecoilState(profileModalAtom)
  return ( profileModal === true ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">profileModal</div>) : null
  )
}

export default profileModal