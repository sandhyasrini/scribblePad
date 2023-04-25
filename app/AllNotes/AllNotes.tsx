'use client'
import React, {FocusEvent, useState} from 'react'

function AllNotes(): JSX.Element {
  const [visibility, isVisible] = useState(false)

  function handleOnKeyDown(e: FocusEvent<HTMLTextAreaElement>): void {

  }
  return (
    <div className=' mx-3 border-gray-300 border-[2px] rounded-md p-0'>
    <textarea className='w-[100%] rounded-md border-[0px] rounded-b-none border-gray-300 h-[2rem] border-b-0 resize-none mb-[-5px] focus:outline-none focis-visible:border-none hidden' placeholder={'Heading'} onFocus={handleOnKeyDown} />
    <textarea className='w-[100%] rounded-md border-[0px] rounded-t-none border-gray-300 h-[7rem]  border-t-0 resize-none focus:outline-none' placeholder={'New Note...'} onFocus={handleOnKeyDown} />
    </div>
  )
}

export default AllNotes