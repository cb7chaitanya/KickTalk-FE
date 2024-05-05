export function Input({label, placeholder, onChange}) {
    return <div>
      <div className="text-sm bg-black font-medium text-left py-2">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 rounded bg-zinc-800" />
    </div>
}
