import { SearchBar } from "./Search"
import { useRecoilValue } from "recoil"
import { detailsAtom } from "@/store/atoms/user"
import { RxAvatar } from "react-icons/rx";

export function Appbar() {
    const details = useRecoilValue(detailsAtom)

    return (
        <div className="bg-black fixed z-[2] w-[100vw] flex h-[5vw] justify-between border-b-2">
            <div className="text-zinc-200 flex flex-col justify-center h-full ml-4 font-semibold text-2xl">
                KickTalk
            </div>
            <div className='absolute'>
                <SearchBar />
            </div>
            
        </div>
    )
} 