'use client';

import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-full bg-[#5271FF] font-[Poppins] text-white py-[3.49vw] px-[6.88vw] '>
      <div className='w-[86.25vw] mx-auto '>
      <div className='w-[85%]  flex flex-col md:flex-row justify-between pb-[10px]'>
        <div className='md:w-1/3 mb-6 md:mb-0'>
          
          <p className='text-white text-[1.25vw] font-[400]'>
            Rablo.in welcomes every enthusiast who is willing to learn and be the part 
            of revolution in our E-learning Platform.
          </p>
        </div>
        
        <div className='flex flex-col md:flex-row gap-10 md:gap-[20]'>
          <div>
            <h2 className='text-[1.25vw] font-[600] mb-[1.04vw]'>Company</h2>
            <ul className='space-y-[1.04vw] text-[1.04vw]'>
              <li><Link href="/about-us" className='text-white hover:text-gray-300 transition-colors'>About us</Link></li>
              <li><Link href="/blog" className='text-white hover:text-gray-300 transition-colors'>Blog</Link></li>
              
              
            </ul>
          </div>
          <div>
            <h2 className='text-[1.25vw] font-[600] mb-[1.04vw]'>Support</h2>
            <ul className='space-y-[1.04vw] text-[1.04vw]'>
              <li><Link href="/help" className='text-white hover:text-gray-300 transition-colors'>Help</Link></li>
              <li><Link href="/FAQ" className='text-white hover:text-gray-300 transition-colors'>FAQ</Link></li>
              <li><Link href="/contact" className='text-white hover:text-gray-300 transition-colors'>contact</Link></li>
              
            </ul>
          </div>
          
          {/* Legal  */}
          <div>
            <h2 className='text-[1.25vw] font-[600] mb-[1.04vw]'>Legal</h2>
            <ul className='space-y-[1.04vw] text-[1.04vw]'>
              <li><Link href="/privacy" className='text-white hover:text-gray-300 transition-colors'>Privacy</Link></li>
              <li><Link href="/terms-of-service" className='text-white hover:text-gray-300 transition-colors'>Terms of Service</Link></li>

              <li><Link href="/refund" className='text-white hover:text-gray-300 transition-colors'>Refund</Link></li>
              <li><Link href="/disclaimer" className='text-white hover:text-gray-300 transition-colors'>Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media*/}
      <div className=' mx-auto flex justify-between items-center pt-5'>
        <p className='text-sm '>ALL RIGHTS RESERVED.</p>
        <div className='flex gap-4'>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-full flex items-center justify-center'>
            <Image src="/Footer/images/LinkedIn.svg" alt="LinkedIn" width={25} height={25} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10  rounded-full flex items-center justify-center'>
            <Image src="/Footer/images/Instagram.svg" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10  rounded-full flex items-center justify-center'>
            <Image src="/Footer/images/X.svg" alt="X" width={28} height={28} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10  rounded-full flex items-center justify-center'>
            <Image src="/Footer/images/Facebook.svg" alt="Facebook" width={28} height={28} />
          </a>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;