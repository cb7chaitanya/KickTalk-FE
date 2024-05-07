import { PostTop } from "./Post/PostTop"
import { PostMiddle } from "./Post/PostMiddle"
import { PostBottom } from "./Post/PostBottom"
export function PostPanel(){
    return (
        <div className='w-[60vw] h-[63vh] border bg-zinc-800 rounded-t-xl flex flex-col items-center'>
            <PostTop />
            <PostMiddle />
            <PostBottom />
        </div>
    )
}