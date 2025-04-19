import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-full flex gap-[40px]  p-[6.3vw]">
      <div className="w-[50vw] flex flex-col gap-[48px] mt-[3.65vw] p-[0.83vw] relative">
  <div
    className="-z-10 bg-[url(/mainSection/images/Ellipse.svg)] w-130 h-130 rounded-full absolute -top-40 left-0 opacity-70 bg-cover bg-no-repeat"
    style={{
      maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
    }}
  ></div>
        <h1 className="font-[400] text-[4.17vw]">
          Be <span className="font-semibold border-b-2">Discovered</span> by the
          Right <span className="font-semibold border-b-2">Students</span>.
        </h1>
        <p className="w-[48.96vw] text-[1.2vw] leading-[1.82vw]">
          Join a thriving network of dedicated tutors. Find students, organize
          batches effortlessly, and teach on your terms with the tools you need
          to succeed.
        </p>
        <div className="w-[28.54vw] h-[2.92vh] flex items-center gap-[24px] ">
          <button className="w-[13.65vw] cursor-pointer text-white font-semibold bg-[#5271FF] rounded-[8px] py-3">
            Sign up for free
          </button>
          <button className="w-[13.65vw] cursor-pointer text-black font-semibold border border-[#5271FF] rounded-[8px] py-3 ">
            Get a demo
          </button>
        </div>
      </div>

      <div className="w-[35.42vw] h-[70.42vh] flex flex-col gap-[2.08vw]">
        <div className="w-full h-[16.67vw] flex gap-[2.08vw] ">
          <div className="w-[16.67vw] h-[16.67vw] rounded-tl-[8.33vw] rounded-bl-[8.33vw] bg-[#F2A6AC] flex items-center justify-center overflow-hidden">
            <Image
              src="/mainSection/images/IMG1.svg"
              width={303.86}
              height={354}
              alt=""
              className="object-contain max-w-full max-h-full ml-4"
            />
          </div>
          <div className="w-[16.67vw] h-[16.67vw] rounded-[2.08vw] bg-[#FFD39C]">
            <Image
              src="/mainSection/images/IMG2.svg"
              width={303.86}
              height={354}
              alt=""
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>

        <div className="w-full h-[16.67vw] flex gap-[2.08vw] ">
          <div className="w-[16.67vw] h-[16.67vw] rounded-[2.08vw] bg-[#F2A6AC]">
            <Image
              src="/mainSection/images/IMG3.svg"
              width={303.86}
              height={354}
              alt=""
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="w-[16.67vw] h-[16.67vw] rounded-tr-[8.33vw] rounded-br-[8.33vw] bg-[#FFD39C] overflow-hidden">
            <Image
              src="/mainSection/images/IMG4.svg"
              width={303.86}
              height={354}
              alt=""
              className="object-contain max-w-full max-h-full ml-[-25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;