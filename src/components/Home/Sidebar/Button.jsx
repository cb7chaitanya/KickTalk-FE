import {useNavigate} from 'react-router-dom'

export function Button ({navigation, label, title, className, onClick}) {
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        onClick()  
        navigate(`/${navigation}`)
    }
    return (
        <button className={`w-full px-4 py-4 hover:bg-zinc-900 duration-300 ${className}` } onClick={(e) => handleClick(e)}>
            {label}{title}
        </button>
    )
}