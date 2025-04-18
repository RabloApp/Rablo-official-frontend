import React from 'react'
import Image from 'next/image'
import TestimonialData from '@/app/StaticData/Testimonials'
const Testimonails = () => {
  return (
    <div className='w-full p-[6.25vw] relative'>
        <Image src="/Testimonials/images/sideshape.svg" alt="shape" width={100} height={100} className='absolute w-[5.21vw] h-[5.21vw] left-[1vw]  mt-[21vw]' />
        <div className='flex flex-col items-center justify-center gap-[4.17vw]'>
            <h1 className="font-[Merriweather] text-[2.5vw] font-[700] underline underline-offset-[25%] decoration-[0.16vw]">
                Testimonials
            </h1>

            <div className='flex items-center justify-center gap-[5.21vw] '>

                {
                    TestimonialData.map((item, index) => {
                        return (
                            <div key={index} className='w-[25.69vw] flex items-center justify-center gap-[3.75vw]  rounded-[0.83vw] border-[#EBEFFF] border-[0.05vw]'>
                                {/* left */}
                                <div className='w-[12.76vw] h-[18.33vw] rounded-[1.04vw] overflow-hidden flex items-center justify-center'> 
                                    <Image src={item.pic} alt="Testimonial" width={240} height={352}  />
                                </div>

                                {/* right */}
                                <div className='flex flex-col w-[9.44vw] items-start justify-center gap-[0.83vw]'>
                                    <Image src={"/Testimonials/images/quotes.svg"} alt='quotes' width={42} height={28} className='w-[2.23vw]' ></Image>
                                    <p className='text-[1.04vw] font-[400] p-[0.52vw]'>{item.description}</p>
                                    <h2 className='text-[1.04vw] font-[400]'>{item.title}</h2>
                                </div>
                            </div>
                        )
                    })
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default Testimonails