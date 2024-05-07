import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaComments } from "react-icons/fa";

export function PostBottom(){
    return (
        <div className="w-[95%] mt-3">
            <div className="inline-flex border w-[100%] h-[5vh] rounded-t-lg">
                <button className="mx-2 px-2 border hover:bg-white duration-400"><BiSolidUpvote className="text-red-600"/></button>
                <button className="mx-2 px-2 border hover:bg-white duration-400"><BiSolidDownvote className="text-red-600"/></button>
                <button className="mx-8 px-2 border hover:bg-black duration-400"><FaComments /></button>
            </div>
        </div>
    )
}