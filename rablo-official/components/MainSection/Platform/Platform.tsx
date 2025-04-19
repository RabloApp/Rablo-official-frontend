import Link from 'next/link'
import React from 'react'
import Image from 'next/image'




// Platform = ({ref} : any) 
const Platform = ()  => {
  return (
    <div className='w-full  py-[50px] relative'>
        <div className="absolute left-[93.30vw] w-[5.21vw] h-[5.21vw] mt-[1vw]">
          <Image
            src="/Platform/images/Shapes.svg"
            alt="Platform"
            fill
            className="object-contain"
          />
        </div>
        <div className='flex flex-col justify-center items-center w-[87.5vw] mx-auto gap-[4.17vw] py-[1.19vw]'>
          <div className='flex flex-col items-center gap-[1.25vw]'>
            <div className='flex flex-col items-center gap-[0.83vw]'>
              <h1 className='text-[3.33vw] font-[700] font-[Merriweather]'>India's 1st All in One Platform</h1>
              <p className='font-[500] text-[1.67vw] font-[Poppins]'>Recognized by StartupIndia & MSME India</p>
            </div>
              
              <p className='text-center font-[Poppins] text-[1.67vw] mt-[20px] text-[#878686] font-[400]'>We are ready to teach Platform to help private educators and small & midsize tuition businesses grow their businesses, run their classes, and establish credibility in the market.</p>
          </div>
            
            
            <div className='flex items-center gap-[8.44vw]'>
                <Image src="/Platform/images/logo1.svg" alt="Platform" width={200} height={174}/>
                <Image src="/Platform/images/logo2.svg" alt="Platform" width={190} height={141} />
            </div>
            <Link href="/join" className='nav-button2 font-[Poppins]'>
                Join Us Now
            </Link>
        </div>
    </div>
  )
}

export default Platform