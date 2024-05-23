import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RiCommunityLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { Button } from './Button';
import { MdOutlineDescription } from "react-icons/md";
import StateButton from "./StateButton";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { profileModalAtom, postModalAtom, communityModalAtom} from '../../../store/atoms/Modal'
import { detailsAtom } from '../../../store/atoms/user';
import authAtom from "@/store/atoms/Auth";

export const Sidebar = () => {
    const [profileModal, setProfileModal] = useRecoilState(profileModalAtom)
    const [postModal, setPostModal] = useRecoilState(postModalAtom)
    const [communityModal, setCommunityModal] = useRecoilState(communityModalAtom)
    const details = useRecoilValue(detailsAtom)
    const exists = details?.profile?.avatar.exists
    const flag = exists===false ? false : true
    const setAuthenticated = useSetRecoilState(authAtom)
    const logout = () =>{
        window.localStorage.clear()
        setAuthenticated(false)
    }
    const emptyFunction = () => {

    }
    return (
        <div className="w-[18vw] h-[100vh] mt-12 bg-zinc-800 border-r-2 py-4 text-white fixed text-xl rounded-br-xl">
            <ul className="mt-4 flex flex-col justify-start items-start">
                <Button navigation="home" onClick={emptyFunction} className="" label={<IoHomeOutline className='inline-flex text-blue-600 mr-2'/>} title="Home" />
                <Button navigation="community" onClick={emptyFunction} className="" label={<RiCommunityLine className='inline-flex mr-2 text-blue-600'/>} title="Communities" />
                {flag===false ? <StateButton title={"Create Profile"} isOpen={profileModal} setIsOpen={setProfileModal} label={<CiUser className='inline-flex mr-2 text-blue-600' />}/> : <Button navigation="profile" onClick={emptyFunction} className="" label={<CiUser className='inline-flex mr-2 text-blue-600'/>} title="Profile" />}
                <StateButton title={"Create Post"} label={<GoPlus className='inline-flex mr-2 text-blue-600'/>} isOpen={postModal} setIsOpen={setPostModal}/>
                <StateButton title={"Create Community"} label={<IoCreateOutline className='inline-flex mr-2 text-blue-600'/>} isOpen={communityModal} setIsOpen={setCommunityModal}/>
                <Button navigation="" onClick={logout} className="mt-6" label={<VscSignOut className='inline-flex mr-2 text-blue-600'/>} title="SignOut" />
            </ul>
        </div>
    );
}

