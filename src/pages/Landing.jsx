import Signup from '@/components/Form/Signup/Signup'
import Signin from '@/components/Form/Signin/Signin'
import { BackgroundBeams } from '@/components/ui/background-beams'
import React from 'react'
import { useRecoilState } from 'recoil'
import { userAtom } from '@/store/atoms/Auth'

function Landing() {
  const [isUser, setUser] = useRecoilState(userAtom)
  function toggleForm(){
    setUser(!isUser)
  }
  return (
    <div className='flex w-full h-screen font-primary'>
      <BackgroundBeams />
      <div className="absolute text-white transform -translate-y-1/2 top-1/2 left-16 z-2 w-3/5">
        <div className='flex flex-wrap'>
          <div className='text-7xl font-bold leading-4 tracking-wide  mb-10'>
            KickTalk
          </div>
          <div className='text-3xl font-medium text-gray-400'>
            A community platform for Football Fans
          </div>
        </div>
      </div>
      <div className='absolute text-white transform -translate-y-3/4 left-1/2 top-3/4 w-2/5'>
        {isUser ? <Signin toggleForm={toggleForm}/> : <Signup toggleForm={toggleForm}/>}
      </div>
    </div>
  )
}

export default Landing