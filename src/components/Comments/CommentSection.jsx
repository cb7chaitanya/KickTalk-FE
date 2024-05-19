import React from 'react'
import { Input } from '../Form/Modals/Input'
import { IoMdSend } from "react-icons/io";

function CommentSection({className, comments}) {
  const commentCount = comments.length
  return (
    <div className={`${className} bg-zinc-800 min-h-[45vh] w-[70vw] flex flex-col`}>
      <div className='mt-2 ml-4'>Total Comments: {commentCount}</div>
      <div className='inline-flex'>
        <Input className={"border border-white w-[50vw]"} placeholder={""} label={"Add a comment"}/>
        <button className='border border-white px-2 h-[32px] mt-[36px]'><IoMdSend /></button>
      </div>  
    </div>
  )
}

export default CommentSection