'use client'
import React, {FocusEvent, RefObject, useRef, useState} from 'react'
import {MdOutlineDone} from 'react-icons/md'
import {IoMdClose} from 'react-icons/io'
function AllNotes(): JSX.Element {
  const [visibility, isVisible] = useState(false)
  const textRef = useRef<HTMLTextAreaElement>()

  function handleOnKeyDown(e: FocusEvent<HTMLTextAreaElement>): void {
    isVisible(true)
  }

  function clearNotes() : void {
    
  }
  return (
    <div className={`mx-3 border-gray-300 border-[2px] rounded-md p-0`}>
    <textarea ref={textRef as RefObject<HTMLTextAreaElement>} className={`w-[100%] rounded-md border-[0px] rounded-b-none border-gray-300 ${visibility ? 'h-[2rem]' : 'h-[9rem]'} border-b-0 resize-none mb-[-5px] focus:outline-none focis-visible:border-none font-bold`} placeholder={'Heading'} onFocus={handleOnKeyDown}/>
    <textarea className={`${visibility ? 'block' : 'hidden'} w-[100%] rounded-md border-[0px] rounded-t-none border-gray-300 h-[7rem]  border-t-0 resize-none focus:outline-none`} placeholder={'Content...'}  />
    <div className='flex justify-end'>
    <MdOutlineDone height={'1rem'} className='cursor-pointer'/>
    <IoMdClose className='cursor-pointer'/>
    </div>
    </div>
  )
}

export default AllNotes