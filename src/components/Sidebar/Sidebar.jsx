import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RiCommunityLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className="w-[20vw] h-[100vh] bg-zinc-800 border-r-2 py-4 text-white text-xl">
            <ul className="mt-4 flex flex-col">
                <Link to="/home"><button className="px-4 py-4"><IoHomeOutline className='inline-flex mr-2'/>Home</button></Link>
                <Link to="/profile"><button className="px-4 py-4"><CiUser className='inline-flex mr-2'/>Profile</button></Link>
                <Link to="/community"><button className="px-4 py-4"><RiCommunityLine className='inline-flex mr-2'/>Communities</button></Link>
                <Link to="/createPost"><button className="px-4 py-4"><IoCreateOutline className='inline-flex mr-2'/>Create Post</button></Link>
                <Link to="/"><button className="px-4 py-4"><VscSignOut className='inline-flex mr-2'/>SignOut</button></Link>
            </ul>
        </div>
    );
}

