import { getAllCommunitiesEndpoint } from "@/conf/config";
import { HiFire } from "react-icons/hi";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { communityAtom } from "@/store/atoms/Community";
import { useRecoilState } from "recoil";
import { UserSearch } from "lucide-react";

export function Popular(){
    const [communities, setCommunities] = useRecoilState(communityAtom)
    const authHeaders = localStorage.getItem("Authorization")
    useEffect(() => {
        const getCommunities = async () => {
            await axios.get(getAllCommunitiesEndpoint, {
                headers: {
                    'Authorization': authHeaders
                }
            }).then((res) => {
                setCommunities(res.data.communities)
                console.log(communities)
            })
        }
        getCommunities()
    }, [])
    
    return (
        <div className="h-[65vh] fixed right-6 w-[18vw] pt-8 bg-zinc-800 border-xl rounded-xl mt-20">
            <div className="text-xl inline-flex text-white mb-2"><HiFire className='text-xl mr-1' />Popular Communities</div>
            <div className="flex flex-col justify-center items-center mr-8">
                <div className="hover:bg-zinc-900 duration:500 h-20 w-[90%] border rounded-xl text-white">
                    <div className="w-full px-2">
                        EPL
                    </div>
                    <div className="px-2">
                        Subscriber Count
                    </div>
                </div>
            </div> 
        </div>
    )
}