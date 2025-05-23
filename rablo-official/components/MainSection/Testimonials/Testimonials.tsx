import React from "react";
import Image from "next/image";
import TestimonialData from "@/StaticData/Testimonials";
const Testimonails = () => {
  return (
    <div id="testimonials" className="w-full p-[6.25vw] relative">
      <Image
        src="/Testimonials/images/sideshape.svg"
        alt="shape"
        width={100}
        height={100}
        className="absolute w-[5.21vw] h-[5.21vw] left-[1vw]  mt-[21vw]"
      />
      <div className="flex flex-col items-center justify-center gap-[4.17vw]">
        <h1 className="font-[Merriweather] text-[2.5vw] font-[700] underline underline-offset-[25%] decoration-[0.16vw]">
          Testimonials
        </h1>

        <div className="flex items-center justify-center gap-[5.21vw] ">
          {TestimonialData.map((item, index) => {
            return (
              <div
                key={index}
                className="group w-[25.69vw] py-[0.83vw] flex items-start justify-center gap-[4vw]  rounded-[0.83vw] border-[#EBEFFF] border-[0.05vw]"
              >
                {/* left */}
                <div className="w-[12.76vw] h-[18.33vw] rounded-[1.04vw] overflow-hidden flex items-center justify-center ">
                  <Image
                    src={item.pic}
                    alt="Testimonial"
                    width={0}
                    height={0}
                    className=" w-[12.76vw] h-[18.33vw] grayscale group-hover:grayscale-0 transition-all duration-100 "
                  />
                </div>

                {/* right */}
                <div className="flex flex-col w-[9.44vw] font-[Poppins] items-start justify-center gap-[0.83vw]">
                  <Image
                    src={"/Testimonials/images/quotes.svg"}
                    alt="quotes"
                    width={0}
                    height={0}
                    className="w-[2.23vw] h-[1.46vw] ml-[0.48vw]"
                  ></Image>
                  <div className="flex flex-col items-start justify-center gap-[2vw]">
                    <p className="text-[1.04vw] font-[400] p-[0.52vw]">
                    {item.description}
                  </p>
                  <h2 className="text-[1.04vw] font-[400]">{item.title}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
