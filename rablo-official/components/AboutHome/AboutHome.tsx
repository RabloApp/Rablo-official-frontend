import Image from "next/image";
import React from "react";

const AboutHome = () => {
  return (
    <div className="relative">
      <div className="absolute top-[0.78vw] left-[15.31vw] z-10">
        <Image
          className="w-[42.08vw] h-[33.54vw] "
          src="/aboutUs/aboutHome/EllipseImg.svg"
          width={0}
          height={0}
          alt="img"
        />
      </div>
      <div className="absolute top-[10.99vw] left-[68.18vw] z-10">
         <Image
          className="w-[11.61vw] h-[13.59vw] opacity-[0.5] "
          src="/aboutUs/aboutHome/imageLeft.svg"
          width={0}
          height={0}
          alt="img"
        />
      </div>
      <div className="absolute top-[24.32vw] left-[-3.5vw] z-10">
        <Image
          className="w-[20.31vw] h-[20.47vw] opacity-[0.5]"
          src="/aboutUs/aboutHome/imageRight.svg"
          width={0}
          height={0}
          alt="img"
        />
      </div>
      <div className="relative w-full h-[46.35vw] flex justify-center items-center overflow-hidden z-50">
        <div className="w-[55.89vw] h-[16.98vw] flex flex-col gap-[5.21vw]">
          <div className="flex flex-col items-center gap-[1.46vw] relative z-50">
            <h1 className="text-[4.17vw] font-[Merriweather] font-normal">
              A Ready To Teach <span className="font-bold border-b-[3px] inline-block leading-[0.9]">Platform</span>
            </h1>
            <p className="font-[poppins] text-[1vw] font-normal">
              We help you to <span className="font-bold">Connect</span> your
              students, <span className="font-bold">Conduct</span> your classes,
              and establish <span className="font-bold">credibility </span>
              credibility in the market.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-[15.63vw] h-[2.92vw] bg-[#5271FF] text-center text-[0.94vw] font-[poppins] font-semibold text-white rounded-[0.42vw] hover:cursor-pointer hover:opacity-[0.8]">
              Pre-Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;





























