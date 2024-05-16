import React from 'react'

function StateButton({isOpen, setIsOpen, label, title}) {
    const handleClick = () => {
        setIsOpen(true)
        console.log(isOpen)
    }
  return ( 
    <button className='w-full px-4 py-4 hover:bg-zinc-900 duration-300 ' onClick={handleClick}>
        {label}{title}
    </button>
  )
}

export default StateButton 