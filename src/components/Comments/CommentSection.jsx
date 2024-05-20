import React, { useState} from 'react'
import { Input } from '../Form/Modals/Input'
import { IoMdSend } from "react-icons/io";
import CommentCard from './CommentCard';
import axios from 'axios';
import { createCommentEndpoint } from '@/conf/config';

function CommentSection({className, comments, setComments}) {
  const commentCount = comments.length
  const [commentInput, setCommentInput] = useState("")
  const postComment = () => {
    axios.post(createCommentEndpoint, {content: commentInput}, {
      headers: {
        'Authorization': localStorage.getItem("Authorization")
      }
    }.then((res) => {
      console.log(res.data)
    }))
    setComments([...comments, commentInput])
    setCommentInput("")  
  }
  console.log(comments)
  return (
    <div className={`${className} bg-zinc-800 min-h-[45vh] w-[70vw] flex flex-col`}>
      <div className='mt-2 ml-4'>Total Comments: {commentCount}</div>
      <div className='inline-flex'>
        <Input className={"border border-white w-[50vw]"} placeholder={""} label={"Add a comment"}/>
        <button className='border border-white px-2 h-[32px] mt-[36px]'><IoMdSend /></button>
      </div>
      {commentCount > 0 ? comments.map((comment, index) => <CommentCard key={index} comment={comment}/>): <div className='mt-2 ml-4'>No comments</div>}
    </div>
  )
}

export default CommentSection