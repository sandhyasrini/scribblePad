import React from 'react'

function AllNotes() {
  return (
    <div className='border-[1px] mx-3 p-2'>
        <p className='mb-3'>Notes</p>
    <textarea className='w-[100%] rounded-md border-[2px] border-gray-300 h-[7rem] resize-none' placeholder={'New Note...'} />
    </div>
  )
}

export default AllNotes