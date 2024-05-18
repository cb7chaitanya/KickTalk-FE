import React from 'react'
import { CiUser } from "react-icons/ci";

function Username({username}) {
  return (
    <div className='text-zinc-400 fixed top-24 left-[35%] inline-flex'><CiUser className='mr-2 mt-1 text-xl'/>{`@${username}`}</div>
  )
}

export default Username