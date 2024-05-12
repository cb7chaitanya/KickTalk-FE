import React, { useState } from 'react'
import { LuPencil } from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function Bio({bio}) {
  const [show, setShow] = useState(false)
  
  return (
    <div className='inline-flex text-white w-full translate-y-32 ml-4'>
      {bio}
      <Dialog>
      <DialogTrigger className='bg-zinc-800 p-2 rounded border'><LuPencil />
</DialogTrigger>
      <DialogContent>
      <DialogHeader>
      <DialogTitle>Edit Bio</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
      </DialogHeader>
      </DialogContent>
      </Dialog>
    </div>
  )
}

export default Bio