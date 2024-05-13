import React from 'react'

function Avatar({avatar, exists}) {
  return ( exists===true ? (
    <div>
      {avatar}
    </div>
  ) : (
    <div>
      
    </div>   
  )
)
}

export default Avatar