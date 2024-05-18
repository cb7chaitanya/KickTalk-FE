export function Input({label, onChange, className, value, placeholder, onKeyDown, type}) {
    return (
        <div>
            <div className="text-sm font-medium text-left py-2 ml-4">
            {label}
            </div>
            <input onChange={onChange} type={type} value={value} className={`${className} px-3 -translate-x-4 pr-12 py-1 rounded bg-zinc-800 ml-6`} placeholder={placeholder} onKeyDown={onKeyDown}/>
        </div>  
    )
}