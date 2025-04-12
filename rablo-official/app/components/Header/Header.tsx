import Image from 'next/image'
import React from 'react'
import { navButtons, navItems } from '@/app/StaticData/Header'
const Header = () => {
  return (
    <div className='w-full px-[4.22vw] py-[0.83vw] bg-[#FFFFFF] flex justify-between items-center border border-black'>
        <Image src="/images/logo.svg" width={167} height={60} alt=''/>
        <ul className='flex gap-[1.7vw]'>
          {
            navItems.map((item, index)=>{
              return(
                <div key={index}>
                  <li className='text-[1.2vw]'>{item.label}</li>
                </div>
              )
            })
          }   
        </ul>

<div className='flex justify-between items-center gap-[1.7vw]'>
  {
    navButtons.map((item, index) => {
      return (
        <div key={index}>
          {
            item.button ? (
              <button className={`cursor-pointer ${item.label === "Sign up" ? 'nav-button2' : 'nav-button1'}`}>
                {item.label}
              </button>
            ) : (
              <p className='text-[1.2vw]'>{item.label}</p>
            )
          }
        </div>
      )
    })
  }
</div>
  </div>
  )
}

export default Header








      