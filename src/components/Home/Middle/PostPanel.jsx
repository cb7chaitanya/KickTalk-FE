import { PostTop } from "./Post/PostTop"
import { PostMiddle } from "./Post/PostMiddle"
import { PostBottom } from "./Post/PostBottom"
import { Link } from "react-router-dom"

export function PostPanel({post}){
    console.log(post)
    return (
        <div className='w-[60vw] h-[63vh] border bg-zinc-800 rounded-xl flex flex-col items-center'>
            <PostTop post={post}/>
            <PostMiddle post={post}/>
            <PostBottom post={post}/>
        </div>
    )
}