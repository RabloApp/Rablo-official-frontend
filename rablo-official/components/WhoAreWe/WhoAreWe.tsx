import Image from "next/image";
import React from "react";

const WhoAreWe = () => {
  return (
    <div className="w-full h-[31.2vw] pt-[0.52vw] pb-[5.21vw] px-[9.32vw]">
      <div className="w-[83vw] flex flex-col gap-[2.29vw]">
        <div className="flex flex-col items-center">
          <h1 className="font-[Merriweather] font-bold text-[2.4vw]">
            Who are we?
          </h1>
          <Image
            className="w-[18.85vw] h-[0.94vw] mt-[-1.3vw]"
            src="/aboutUs/WhoAreWe/Rectangle.svg"
            width={0}
            height={0}
            alt="img"
          />
        </div>
        <p className="font-normal font-[poppins] text-[0.94vw] text-[#525252] text-center leading-[1.8vw]">
          Our company is an AI-Powered Personalised Learning Ecosystem that
          offers technology services related to business growth and teaching
          management with a wide range of <br />
          <span>
            Freemium growth and technology add-ons to assist private educators
            and small and mid-sized tuition businesses in expanding their reach,
            improving quality, and
          </span>{" "}
          automating their operations. 
        </p>

        <div className="flex justify-center">
          <div className="flex w-[64.11vw] h-[11.77vw]">
            <div className="w-[20.47vw] h-[11.77vw] py-[3.23vw] px-[5.21vw] border-r-1 border-[#5271FF]">
              <div className="flex flex-col items-center gap-[0.4vw] ">
                <div className="flex justify-center items-center  text-[#5271FF]">
                  <p className="font-[Merriweather] font-bold text-[2.4vw]">
                    200
                  </p>
                  <p className="font-bold text-[2.8vw] mt-[-0.6vw]">+</p>
                </div>
                <p className="font-medium text-[1.15vw] text-[#9747FF]">
                  Enrolled Students
                </p>
              </div>
            </div>

            <div className="w-[20.47vw] h-[11.77vw] py-[3.23vw] px-[5.21vw] border-r-1 border-[#5271FF]">
              <div className="flex flex-col items-center gap-[0.4vw] ">
                <div className="flex justify-center items-center  text-[#5271FF]">
                  <p className="font-[Merriweather] font-bold text-[2.4vw]">
                    1,000
                  </p>
                  <p className="font-bold text-[2.8vw] mt-[-0.6vw]">+</p>
                </div>
                <p className="font-medium text-[1.15vw] text-[#9747FF]">
                  Enrolled Students
                </p>
              </div>
            </div>

            <div className="w-[20.47vw] h-[11.77vw] py-[3.23vw] px-[5.21vw]">
              <div className="flex flex-col items-center gap-[0.4vw] ">
                <div className="flex justify-center items-center  text-[#5271FF]">
                  <p className="font-[Merriweather] font-bold text-[2.4vw]">
                    8
                  </p>
                  <p className="font-bold text-[2.8vw] mt-[-0.6vw]">+</p>
                </div>
                <p className="font-medium text-[1.15vw] text-[#9747FF]">
                  Enrolled Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
