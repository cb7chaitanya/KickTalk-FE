import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { useCallback, useState } from "react";
import { postVoteHandlingEndpoint} from "@/conf/config";
import useThrottle from "@/hooks/useThrottle";
import axios from "axios";

export function PostBottom({post}){
    const upvotes = post.votes.upvotes
    const downvotes = post.votes.downvotes
    const [vote, setVote] = useState('unvote')
    const [upvoteCount, setUpvoteCount] = useState(upvotes)
    const [downvoteCount, setDownvoteCount] = useState(downvotes)
    const [downvoteClick, setDownvoteClick] = useState(false)
    const [upvoteClick, setUpvoteClick] = useState(false)
    const authHeaders = localStorage.getItem('Authorization')
    const postId = post._id
    const postVoteHandleEndpoint = postVoteHandlingEndpoint.replace(':postId', postId)
    const sendVoteRequest = useCallback(async (vote) => {
        try {
            const response = await axios.post(postVoteHandleEndpoint, {action: vote, postId: post._id}, 
                {headers: 
                    {
                        'Authorization': authHeaders
                    }
                }).then((res)=>{
                    console.log(res.data)
                })
        } catch(error){
            console.error(error)
        }
    }, [post._id, authHeaders])

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
    return (
        <div className="w-[95%] mt-3">
            <div className="inline-flex border w-[100%] h-[5vh] rounded-t-lg">
                <button className={`mx-2 px-2 border inline-flex ${upvoteClick ? 'text-red-600' : ''}`} onClick={handleUpvote}><BiSolidUpvote className="hover:text-red-600 mt-1 mr-1"/>{`${upvoteCount}`}</button>
                <button className={`mx-2 px-2 border inline-flex ${downvoteClick ? 'text-red-600' : ''}`} onClick={handleDownvote}><BiSolidDownvote className="hover:text-red-600 mt-1 mr-1"/>{`${downvoteCount}`}</button>
                <button className="mx-8 px-2 border hover:bg-black duration-400"><FaComments /></button>
            </div>
        </div>
    )
}