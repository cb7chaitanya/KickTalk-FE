import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { postModalAtom } from '@/store/atoms/Modal'
import { MdCancelPresentation } from "react-icons/md";
import { Input } from './Input';
import axios from 'axios'
import { getSubscribedCommunities, createPostEndpoint } from '@/conf/config';
import { postBody } from '@/zod/postSchema';
import { Badge } from '@/components/ui/badge';
import TextArea from './TextArea';
import { userPostAtom } from '@/store/atoms/post';

export default function PostModal() {
  const [postModal, setPostModal] = useRecoilState(postModalAtom)
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    community: "",
    tags: [""]
  })
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [communities, setCommunities] = useState("")
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const authHeaders = localStorage.getItem("Authorization")
  const title = postData.title
  const content = postData.content
  const community = postData.community
  const [userPosts, setUserPosts] = useRecoilState(userPostAtom)

  const handleAddTag = (e) => {
    if (e.key === "Enter"  && tagInput) {
      e.preventDefault();
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const emptyFunction = () => {

  }

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSelect = (e) => {
    if (e.target && e.target.value) {
      const selectedCommunity = e.target.value
      setSelectedCommunity(selectedCommunity);
    }
  };

  const createPost = async() => {
    const validationResult = postBody.safeParse({title, content, tags, community})
    if(validationResult.success){
      try{
        const body = {
          title : postData.title,
          content : postData.content,
          tags : postData.tags,
          communityName : postData.community
        }
        const response = await axios.post(createPostEndpoint, body, {
          headers : {
            'Authorization': authHeaders
          }
        }).then((res) => {
          console.log(res.data)
          setUserPosts(...userPosts, res.data)
        })
      } catch(error){
        console.error(error)
      }
    } else{
      alert('Invalid Input')
    }
  }
  useEffect(() => {
    const fetchSubscribedCommunities = async() => {
      try{        
        await axios.get(getSubscribedCommunities, {
          headers: {
            'Authorization': authHeaders
        }}).then((response) => {
          console.log(response.data)
          setCommunities(response.data)
        }).catch((error) => {
          console.error(error)
        })
      } catch(error){
        console.error(error)
      }
    }
    fetchSubscribedCommunities()
  }, [])
  const flag = Array.isArray(communities) === true ? true : false
  return ( 
    postModal === true ? (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
      <div className="bg-zinc-900 rounded-lg p-4 h-96 w-1/2 ">
        <button className='absolute top-24 right-80 mr-2' onClick={() => setPostModal(false)}><MdCancelPresentation />
</button>
        Create a post
        <form>
        <select
              className="bg-zinc-900 shadow-zinc-950 shadow-md text-white p-2 fixed right-80 mr-24"
              value={selectedCommunity}
              onChange={(e) => handleSelect(e)}
            >
              <option value="" disabled>
                Select...
              </option>
              {flag===true && communities.map((community) => {
                return <option value={community}>{community}</option>;
              })}
          </select>
          <Input label="Title" type="text" value={title} onChange={(e) => setPostData({...postData, title: e.target.value})} placeholder={"Title"} onKeyDown={emptyFunction}/>
          <Input label="Tags" type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder={"Tags"} onKeyDown={handleAddTag}/>
          <div className='inline-flex ml-2 mt-4'>
            {tags?.map((tag, index) => (
            <Badge
              key={index}
              variant="default"
              className="px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2"
              onClick={() => handleRemoveTag(index)}
            >
              {tag}
            </Badge>
            ))}
          </div>
          <TextArea label="Content" value={content} onChange={(e) => setPostData({...postData, content: e.target.value})} placeholder={"Content"} onKeyDown={emptyFunction} className={"fixed right-80 top-56 mr-4"}/>
        </form>
        <button onClick={createPost} className='mt-20 ml-2 bg-zinc-950 py-1 px-4 rounded-xl text-white hover:bg-zinc-800 duration-300 border border-bg-white'>Post</button>
      </div>
    </div>
    ) : null
    
  )
}

 