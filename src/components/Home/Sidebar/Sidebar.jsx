import Reac, { useState } from 'react'; 
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RiCommunityLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { detailsAtom } from '@/store/atoms/user';

export const Sidebar = () => {
    const [subscribedCommunities, setSubscribedCommunities] = useState([]);
    const subscribed = useRecoilValue(detailsAtom).subscribedCommunities;
    
    return (
        <div className="w-[20vw] h-[100vh] bg-zinc-800 border-r-2 py-4 text-white text-xl">
            <ul className="mt-4 flex flex-col">
                <Link to="/home"><button className="px-4 py-4 w-[100%] hover:bg-zinc-900 duration-300"><IoHomeOutline className='inline-flex mr-2'/>Home</button></Link>
                <Link to="/profile"><button className="px-4 py-4 w-[100%] hover:bg-zinc-900 duration-300"><CiUser className='inline-flex mr-2'/>Profile</button></Link>
                <Link to="/:communityId"><button className="px-4 py-4 w-[100%] hover:bg-zinc-900 duration-300"><RiCommunityLine className='inline-flex mr-2'/>Communities</button></Link>
                <Link to="/createPost"><button className="px-4 py-4 w-[100%] hover:bg-zinc-900 duration-300"><IoCreateOutline className='inline-flex mr-2'/>Create Post</button></Link>
                <Link to="/"><button className="px-4 py-4 w-[100%] hover:bg-zinc-900 duration-300"><VscSignOut className='inline-flex mr-2'/>SignOut</button></Link>
            </ul>
        </div>
    );
}

