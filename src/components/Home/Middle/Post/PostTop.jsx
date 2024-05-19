import { Badge } from "@/components/ui/badge"
import { IoIosNavigate } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function PostTop({post}){
    const badges = post.tags
    const postId = post._id
    const title = post.title
    const navigate = useNavigate()
    return(
        <div className="inline-flex my-3 w-[95%]">
            <button className="transform translate-x-64 text-2xl absolute" onClick={() => navigate(`/post/${postId}`)}><IoIosNavigate /></button>
            <div className="ml-3">
            <div className="text-2xl font-bold">{title}</div>
                {badges.map((badge) => (
                    <Badge variant="default" className="bg-white text-black hover:bg-white mx-1">
                        {badge}
                    </Badge>
                ))}     
            </div>
        </div>
    )
}