
import Image from 'next/image'
import React from 'react'
import {tutors, students} from "@/StaticData/Benefits"

const Benefits = () => {
  return (
    <div className='w-full h-[41.46vw] bg-[#5271FF80] flex flex-col justify-center items-center gap-[3.5vw] relative'>

      {/* Decorative background shapes at bottom left */}
      <div className='absolute bottom-[-2vw] left-[3vw] flex flex-col z-0'>
        <Image src="/mainSection/images/circle.svg" width={0} height={0} alt='circle' className='mb-[-1vw] w-[8.33vw] h-[8.33vw]' />
        <Image className='mt-[-1.33vw] ml-[-1.56vw] w-[6vw] h-[6vw]' src="/mainSection/images/shapes.svg" width={0} height={0} alt='shapes' />
      </div>

      {/* Title */}
      <h1 className='font-bold text-[2.6vw] border-b-2 z-10'>Benefits of choosing Rablo</h1>

      {/* Boxes Container */}
      <div className='w-[87.5vw] h-[21.46vw] flex justify-between gap-[4.4vw] z-10'>

        {/* Box 1 */}
        <div className='w-[41.67vw] h-[21.46vw] rounded-[0.83vw] bg-white pt-[2.08vw] pb-[2.08vw] pl-[1.25vw] pr-[1.25vw] flex flex-col gap-[1.25vw] ml-[20px]'>
          <h2 className='font-bold text-[1.7vw]'>For Tutors</h2>
          <div>
           {
            tutors.map((item, index)=>{
              return(
                <div key={index} className='flex items-center gap-[0.9vw] p-[0.5vw]'>
                <Image src={item.image} width={48} height={48} alt='icon' />
                <p className='text-[1.25vw] font-medium'>{item.label}</p>
              </div>
              )
            })
           }
          </div>
        </div>

        {/* Box 2 */}
        <div className='w-[41.67vw] h-[21.46vw] rounded-[0.83vw] bg-white pt-[2.08vw] pb-[2.08vw] pl-[1.25vw] pr-[1.25vw] flex flex-col gap-[1.25vw]'>
          <h2 className='font-bold text-[1.7vw]'>For Students</h2>
          <div>
            {
              students.map((item, index)=>{
                return(
                  <div key={index} className='flex items-center gap-[0.9vw] p-[0.5vw]'>
              <Image src={item.image} width={48} height={48} alt='icon' />
              <p className='text-[1.25vw] font-medium'>{item.label}</p>
            </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Benefits
