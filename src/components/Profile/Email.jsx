import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function Email({email}) {
  return (
    <div className='text-zinc-400 fixed top-32 left-[35%] inline-flex'>
        <MdOutlineMarkEmailUnread className='mr-2 mt-1 text-xl'/>{`${email}`}
    </div>
  )
}

export default Email