import React, { useState } from 'react'
import axios from "axios"
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'

function Bio({bio}) {
  console.log(bio)
  const [bios, setBios] = useState('')
  return ( bio ?
    (<div className='inline-flex text-white w-16 translate-y-32 ml-4 text-2xl'>
      {bio}
    </div>) :
    (<Input label="" placeholder="Enter bio..." onChange={(e) => {setBios(e.target.value)}} className="w-[30vw] outline-none ml-8 py-2"/> )
  )
}

export default Bio