import React, { useEffect, useState} from 'react'
import { Input } from '../Form/Modals/Input'
import { IoMdSend } from "react-icons/io";
import CommentCard from './CommentCard';
import axios from 'axios';
import { commentHandlingEndpoint } from '@/conf/config';
import { useParams } from 'react-router-dom';

function CommentSection({className}) {
  const [comments, setComments] = useState([])
  const [commentCount, setCommentCount] = useState(0)
  const [commentInput, setCommentInput] = useState("")
  const authHeaders = localStorage.getItem("Authorization")
  const { postId } = useParams()
  const commentHandler = commentHandlingEndpoint.replace(':postId', postId) 
  useEffect(() => {
    const getComments = async() => {
      await axios.get(commentHandler, {
        headers: {
          'Authorization': authHeaders
        }
      }).then((res) => {
        console.log(res.data.comments)
        setComments(res.data.comments)
        setCommentCount(res.data.comments.length)
      })
    }
    getComments()
  }, [commentCount])
  const postComment = async() => {
    await axios.post(commentHandler, {content: commentInput}, {
      headers: {
        'Authorization': authHeaders
      }
    }).then((res) => {
      console.log(res.data)
      setCommentCount(commentCount + 1)
      setCommentInput("")
    })
  }
  const emptyFunction = () => {
    
  }

  return (
    <div className={`${className} bg-zinc-800 min-h-[45vh] w-[70vw] flex flex-col`}>
      <div className='mt-2 ml-4'>Total Comments: {commentCount}</div>
      <div className='inline-flex'>
        <Input className={"border border-white w-[50vw]"} placeholder={""} label={"Add a comment"} onKeyDown={emptyFunction} onChange={(e) => setCommentInput(e.target.value)} value={commentInput}/>
        <button className='border border-white px-2 h-[32px] mt-[36px] hover:bg-zinc-600 duration-300' onClick={postComment}><IoMdSend /></button>
      </div>
      {commentCount > 0 ? comments.map((comment, index) => <CommentCard key={index} comment={comment} commentCount={commentCount} setCommentCount={setCommentCount}/>): <div className='mt-2 ml-4'>No comments</div>}
    </div>
  )
}

export default CommentSection