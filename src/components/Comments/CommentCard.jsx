import { commentEndpoint, commentVoteHandlingEndpoint } from '@/conf/config';
import React, {useState, useCallback} from 'react'
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { useParams } from 'react-router-dom';
import { detailsAtom } from '@/store/atoms/user';
import { useRecoilValue } from 'recoil';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import useThrottle from '@/hooks/useThrottle';

function CommentCard({comment, commentCount, setCommentCount}) {
  const content = comment.content
  const downvotes = comment.votes.downvotes
  const upvotes = comment.votes.upvotes
  const commentId = comment._id
  const [vote, setVote] = useState('unvote')
  const [upvoteCount, setUpvoteCount] = useState(upvotes)
  const [downvoteCount, setDownvoteCount] = useState(downvotes)
  const [downvoteClick, setDownvoteClick] = useState(false)
  const [upvoteClick, setUpvoteClick] = useState(false)
  const authHeaders = localStorage.getItem('Authorization')
  const { postId } = useParams()
  const commentHandleEndpoint = commentEndpoint.replace(':postId', postId)
  const commentHandler = commentHandleEndpoint.replace(':commentId', commentId)
  const commentVotingHandleEndpoint = commentVoteHandlingEndpoint.replace(':postId', postId)
  const commentVoteHandler = commentVotingHandleEndpoint.replace(':commentId', commentId)
  const user =  useRecoilValue(detailsAtom)
  const author = comment.author
  const userId = user._id
  const sendVoteRequest = useCallback(async (vote) => {
    try {
      await axios.post(commentVoteHandler, {action: vote}, {
        headers: {
          'Authorization': authHeaders
        }
      }).then((res)=>{
        console.log(res.data)
      })
    } catch(error){
      console.error(error)
    }
  }, [authHeaders, commentId, postId])
  const throttledVoteRequest = useThrottle(sendVoteRequest, 2000)

  const handleDownvote = () => {
    if(vote==='downvote'){
      setVote('unvote')
      setDownvoteCount(downvoteCount-1)
      setDownvoteClick(false)
      throttledVoteRequest('downvote')
    }
    if(vote==='unvote'){
      setVote('downvote')
      setDownvoteCount(downvoteCount+1)
      setDownvoteClick(true)
      throttledVoteRequest('unvote')
    }
    if(upvoteClick === true){
      setDownvoteClick(true)
      setUpvoteClick(false)
      setUpvoteCount (upvoteCount-1)
      setDownvoteCount(downvoteCount+1)
      setVote('downvote')
      throttledVoteRequest('downvote')
    }
  }
  const handleUpvote = () => {
    if(vote==='upvote'){
        setVote('unvote')
        setUpvoteCount(upvoteCount-1)
        setUpvoteClick(false)
        throttledVoteRequest('unvote')
    }
    if(vote === 'unvote'){
        setVote('upvote')
        setUpvoteCount(upvoteCount+1)
        setUpvoteClick(true)
        throttledVoteRequest('upvote')
    }
    if(downvoteClick === true){
        setUpvoteClick(true)
        setDownvoteClick(false)
        setDownvoteCount(downvoteCount-1)
        setUpvoteCount(upvoteCount+1)
        setVote('upvote')
        throttledVoteRequest('upvote')
    }
}
  const deleteComment = async() => {
    await axios.delete(commentHandler, {
      headers: {
        'Authorization': authHeaders
      }
    }).then((res) => {
      console.log(res.data)
      setCommentCount(commentCount - 1)
    })
  }
  const flag = author === userId ? true : false
  return (
    <div className='border rounded my-3 mx-2 h-20 flex flex-col'>
        <div className='inline-flex w-[100%] h-[70%] p-4'>
            {content}
            {flag===true && <button onClick={deleteComment} className='absolute right-8'><MdDelete className='hover:text-red-500'/></button>}
            {flag===true && <button className='absolute right-24'><MdEdit className='hover:text-red-500'/></button>}
        </div>
        <div className='mx-2 px-2 border inline-flex self-end border-none'>
            <button className={`mx-1 px-2 inline-flex ${upvoteClick ? 'text-red-600' : ''}`} onClick={handleUpvote}><BiSolidUpvote className="hover:text-red-600 mt-1 mr-1"/> {upvoteCount}</button>
            <button className={`mx-1 px-2 inline-flex  ${downvoteClick ? 'text-red-600' : ''}`} onClick={handleDownvote}><BiSolidDownvote className="hover:text-red-600 mt-1 mr-1"/> {downvoteCount}</button>
        </div>
    </div>
  )
}

export default CommentCard