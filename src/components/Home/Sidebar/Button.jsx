import {useNavigate} from 'react-router-dom'

export function Button ({navigation, label, title, className}) {
    const navigate = useNavigate()
    return (
        <button className={`w-full px-4 py-4 hover:bg-zinc-900 duration-300 ${className}` } onClick={() => navigate(`/${navigation}`)}>
            {label}{title}
        </button>
    )
}