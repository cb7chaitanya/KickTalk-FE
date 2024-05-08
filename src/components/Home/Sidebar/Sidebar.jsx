import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RiCommunityLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { Button } from './Button';
import { MdOutlineDescription } from "react-icons/md";

export const Sidebar = () => {
    return (
        <div className="w-[18vw] h-[100vh] mt-12 bg-zinc-800 border-r-2 py-4 text-white fixed text-xl rounded-br-xl">
            <ul className="mt-4 flex flex-col justify-start items-start">
                <Button navigation="home" className="" label={<IoHomeOutline className='inline-flex mr-2'/>} title="Home" />
                <Button navigation="profile" className="" label={<CiUser className='inline-flex mr-2'/>} title="Profile" />
                <Button navigation="about" className="" label={<MdOutlineDescription className='inline-flex mr-2'/>} title="About" />
                <Button navigation="community" className="" label={<RiCommunityLine className='inline-flex mr-2'/>} title="Communities" />
                <Button navigation="createCommunity" className="" label={<IoCreateOutline className='inline-flex mr-2'/>} title="Create Community" />
                <Button navigation="createPost" className="" label={<GoPlus className='inline-flex mr-2'/>} title="Create Post" />
                <Button navigation="/" className="mt-6" label={<VscSignOut className='inline-flex mr-2'/>} title="SignOut" />
            </ul>
        </div>
    );
}

