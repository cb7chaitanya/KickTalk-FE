import { Badge } from "@/components/ui/badge"

export function PostTop({post}){
    const badges = post.tags
    return(
        <div className="inline-flex mx-3 my-3 border rounded-2xl w-[95%]">
            <div className="rounded-2xl p-4 border"></div>
            <div className="ml-3 font-bold text-white font-3xl">Community name</div>
            <div className="ml-3">
                {badges.map((badge) => (
                    <Badge variant="default" className="bg-white text-black hover:bg-white mx-1">
                        {badge}
                    </Badge>
                ))}     
            </div>
        </div>
    )
}