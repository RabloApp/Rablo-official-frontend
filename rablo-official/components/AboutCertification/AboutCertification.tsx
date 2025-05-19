import Image from 'next/image'
import React from 'react'

const AboutCertification = () => {
  return (
    <div className='w-full h-[24.22vw] pt-[2.4vw] pb-[5.21vw] px-[6.25vw] flex flex-col justify-center items-center gap-[5.21vw] mb-[5vw]'>
        <h1 className='font-bold font-[Merriweather] text-[2.4vw]'>Our Certification</h1>
        <div className='w-[72.92vw] h-[7.81vw] flex justify-center items-center gap-[5.21vw] '>
            <Image className='w-[10.42vw] h-[7.81vw]' src="/aboutUs/aboutcertificate/image1.svg" width={0} height={0} alt=''/>
            <Image className='w-[10.42vw] h-[7.81vw]' src="/aboutUs/aboutcertificate/image2.svg" width={0} height={0} alt=''/>
            <Image className='w-[10.42vw] h-[7.81vw]' src="/aboutUs/aboutcertificate/image3.svg" width={0} height={0} alt=''/>
            <Image className='w-[10.42vw] h-[7.81vw]' src="/aboutUs/aboutcertificate/image4.svg" width={0} height={0} alt=''/>
            <Image className='w-[10.42vw] h-[7.81vw]' src="/aboutUs/aboutcertificate/image5.svg" width={0} height={0} alt=''/>

        </div>

    </div>
  )
}

export default AboutCertification