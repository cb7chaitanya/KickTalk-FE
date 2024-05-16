import React from 'react'

function Bio({bio}) {
  return (
    <div className='inline-flex text-white w-16 translate-y-32 ml-4 text-2xl'>
      {bio}
    </div> 
  )
}

export default Bio