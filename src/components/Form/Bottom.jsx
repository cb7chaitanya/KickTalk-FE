import { Link } from "react-router-dom"

export function Bottom({label, buttonText, onClick}) {
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <button className="pointer underline pl-1 cursor-pointer" onClick={onClick}>
        {buttonText}
      </button>
    </div>
}