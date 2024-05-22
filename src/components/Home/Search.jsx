import { CiSearch } from "react-icons/ci";

export function SearchBar(){
    return (
        <div className="inline-flex ">
            <input placeholder="Search..." className="bg-zinc-700 px-6 py-1 rounded-l-lg"/>
            <button className="text-white border-slate-300 border rounded-r-lg px-2 py-1"><CiSearch /></button>
        </div>
    )
}