import Image from 'next/image'
import React from 'react'

const FormSection = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto font-[Poppins] h-[54.55vw] w-[70.45vw] relative'>
        
        <div>
            <h1 className='text-[2.42vw] font-[600] '>Reach out to us....</h1>
            <p className='text-[0.81vw] font-[400]  '>You can contact us anytime via <b>admin@rablo.in</b></p>
        </div>
        <form className="form-section flex flex-col items-center justify-center w-[58.33vw] h-[31.92vw] mx-auto gap-[1.21vw]" action=""  >
            <div className='flex flex-col gap-[0.4vw]  h-[5.66vw] w-[37.53vw] mx-auto'>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" required className='border-[0.05vw] rounded-tl-[0.81vw] rounded-br-[0.81vw] w-[37.53vw] h-[2.42vw]'/>
            </div>
            <div className='flex flex-col gap-[0.4vw]  h-[5.66vw] w-[37.53vw] mx-auto'>
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required className='border-[0.05vw] rounded-tl-[0.81vw] rounded-br-[0.81vw] w-[37.53vw] h-[2.42vw]'/>
            </div>
            <div className='flex flex-col gap-[0.4vw]  h-[5.66vw] w-[37.53vw] mx-auto'>
                <label htmlFor="phone-number">Phone Number*</label>
                <textarea id="phone-number" name="message" required className='border-[0.05vw] rounded-tl-[0.81vw] rounded-br-[0.81vw] w-[37.53vw] h-[2.42vw]'></textarea>
            </div>
            <div className='flex flex-col gap-[0.4vw]  h-[11.31vw] w-[37.53vw] mx-auto'>
                <label htmlFor="how-can-we-help">How can we help?*</label>
                <textarea id="how-can-we-help*" name="message" required className='border-[0.05vw] rounded-tl-[0.81vw] rounded-br-[0.81vw] w-[37.53vw] h-[8.08vw]'></textarea>
            </div>
            <button type="submit" className='w-[38.13vw] h-[2.83vw] p-[0.81vw] bg-[#5271FF] rounded-[0.4vw] gap-[0.51vw] font-[600] text-[1.21vw] text-[#FFFFFF] '>Send</button>

        </form>
        <div className='absolute right-[10.5vw] bottom-[13.30vw]  '>
            <Image src="/Platform/images/Shapes.svg" alt="Contact us" width={75} height={75}  />
        </div>

    </div>
  )
}
         
export default FormSection