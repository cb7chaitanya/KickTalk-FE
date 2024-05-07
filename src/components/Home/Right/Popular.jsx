import { HiFire } from "react-icons/hi";

export function Popular(){
    return (
        <div className="w-[20vw] pt-8 bg-zinc-800 border-xl rounded-t-xl mt-6">
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