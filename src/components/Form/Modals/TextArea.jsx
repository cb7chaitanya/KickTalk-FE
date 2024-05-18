import React from 'react'

function TextArea({label, onChange, className, value, placeholder}) {
  return (
    <div>
        <div className={`${className} text-sm font-medium text-left py-2 ml-4`}>
            {label}
        </div>
        <textarea onChange={onChange} type="text" value={value} className={`${className} px-3 pr-12 py-1 h-48 w-80 rounded bg-zinc-800`} placeholder={placeholder}/> 
    </div>
  )
}

export default TextArea