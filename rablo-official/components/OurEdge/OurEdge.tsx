import Image from 'next/image'
import React from 'react'
import { ourEdge } from '@/StaticData/OurEdge'

const OurEdge = () => {
  return (
    <div className='w-full h-[31.41vw] flex flex-col items-center gap-[2.4vw] pt-[0.52vw] pb-[5.21vw] overflow-hidden'>
           <h1 className='font-bold font-[Merriweather] text-[2.4vw]'>Our Competitive Edge</h1>
           <div className='full h-[18.65vw] flex gap-[2.08vw] px-[21.93vw]'>

{
   ourEdge.map((item, index)=>{
    return(
        <div key={index} className='w-[20.31vw] h-[18.65vw] bg-[#EFF1FC] rounded-[0.83vw] p-[1.56vw] flex flex-col items-center gap-[1.46vw]'>
                <Image className='w-[6.25vw] h-[6.25vw]' src={item.image} width={20} height={20} alt='img'/>
                <div className='flex flex-col items-center gap-[0.94vw]'>
                    <h2 className='font-[poppins] text-[1.25vw] font-bold'>{item.title}</h2>
                <p className='text-justify font-[poppins] text-[#5B5B5B] font-normal text-[0.9vw]'>{item.description}</p>
                </div>
                
            </div>
    )
   }) 
}
           
          
           </div>
    </div>
  )
}

export default OurEdge