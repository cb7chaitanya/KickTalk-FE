import { CiSearch } from "react-icons/ci";

export function SearchBar(){
    return (
        <div className="flex transform translate-y-3 translate-x-60">
            <input placeholder="Search..." className="bg-zinc-700 px-6 py-1 rounded-l-lg"/>
            <button className="text-white border-slate-300 border rounded-r-lg px-2 py-1"><CiSearch /></button>
        </div>
    )
}