export function Popular(){
    return (
        <div className="w-[20vw] pt-8 bg-zinc-800 border-xl">
            <h1 className="text-2xl text-white">Popular Communities</h1>
            <div className="flex flex-col">
                <button className="text-xl py-2 px-3 hover:bg-gray-700 text-white">Premier League</button>
                <button className="text-xl py-2 px-3 hover:bg-gray-700 text-white">EPL</button>
            </div>
        </div>
    )
}