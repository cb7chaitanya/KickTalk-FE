import { SearchBar } from "./Search"

export function Navbar({avatar}) {
    return (
        <div className="bg-black sticky flex h-16 justify-between border-b-2">
            <div className="text-zinc-200 flex flex-col justify-center h-full ml-4 font-semibold text-2xl">
                KickTalk
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="border-2 w-10 h-10 transform -translate-x-4 translate-y-3 rounded-lg">
                {avatar}
            </div>
        </div>
    )
} 