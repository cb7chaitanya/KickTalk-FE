
export function PostMiddle({post}){
    const content = post.content
    return (
        <div className="w-[95%] h-[45vh] border rounded-xl flex">
            <div className="h-[100%] w-[100%] p-3">{content}</div>
        </div> 
    )
}