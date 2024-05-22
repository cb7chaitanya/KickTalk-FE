import { Appbar } from "@/components/Home/Appbar"
import { Sidebar } from "@/components/Home/Sidebar/Sidebar"
import { getPostByIdEndpoint, deletePostEndpoint } from "@/conf/config"
import { useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import CommentSection from "@/components/Comments/CommentSection"
import { Badge } from "@/components/ui/badge"
import { detailsAtom } from "@/store/atoms/user"
import { useRecoilValue } from "recoil"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function Post() {
    const authHeaders = localStorage.getItem("Authorization")
    const [post, setPost] = useState({})
    const { postId } = useParams()
    const getPostEndpoint = getPostByIdEndpoint.replace(':postId', postId)
    const details = useRecoilValue(detailsAtom)
    const userId = details._id
    const author = post.author
    const flag = author === userId ? true : false
    const deletePostHandler = deletePostEndpoint.replace(':postId', postId)
    const navigate = useNavigate()
    const deletePost = async() => {
        await axios.delete(deletePostHandler, {
            headers: {
                'Authorization': authHeaders
            }
        }).then((res) => {
            console.log(res.data)
            navigate('/home')
        })
    }
    useEffect(()=> {
        const getPost = async()=>{
            await axios.get(getPostEndpoint, {
                headers: {
                    'Authorization': authHeaders
                }
            }).then((res) => {
                console.log(res.data.post)
                setPost(res.data.post)
            }).catch((error) => {
                console.error(error)
            })
        }
        getPost()
    }, [postId])
    const badges = post.tags
    const title = post.title
    const content = post.content
    return( 
    <div className="w-full h-[100vh] text-white bg-black">
        <Appbar />
        <Sidebar />
        <div className="bg-black min-h-[140vh]">
            <div className='w-[70vw] transform translate-x-[35%] translate-y-[20%] h-[65vh] border bg-zinc-800 rounded-t-xl flex flex-col items-center'>
                <div className="inline-flex my-3 w-[95%]">
                    <div className="ml-3">
                    <div className="text-2xl font-bold">{title}</div>
                    <div className="self-end">
                        {flag===true && <button className="fixed right-16"><MdEdit className='hover:text-red-500'/></button>}
                        {flag===true && <button className="fixed right-24" onClick={deletePost}><MdDelete className='hover:text-red-500'/></button>}
                    </div>
                    {badges && badges.map((badge, index) => (
                    <Badge variant="default" className="bg-white text-black hover:bg-white mx-1" key={index}>
                        {badge}
                    </Badge>
                    ))}    
                    </div>
                </div>
                <div className="w-[95%] h-[45vh] border rounded-xl flex">
                    <div className="ml-4 mt-2 text-xl">{content}</div>
                </div>
            </div>
            <CommentSection className={"border border-white absolute top-[80%] left-[25%]"}/>
        </div>
    </div>
    )
}