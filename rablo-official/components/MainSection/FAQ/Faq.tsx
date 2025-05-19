'use client'
import React from 'react'
import AccCompo from './AccCompo'
const Faq = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center p-[6.25vw] gap-[4.17vw]'>
      
            
            <h1 className='text-[2.5vw] font-[Merriweather] font-[700] border-b-2 inline-block align-[0.1em] py-[0.22vw] leading-none  '>Frequently Asked Questions</h1>
            
            <div className='w-[87.5vw] text-[1.67vw]'>
              <AccCompo/>
            </div>
        
    </div>
  )
}

export default Faq;