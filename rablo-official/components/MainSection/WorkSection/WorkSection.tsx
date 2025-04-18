import Image from "next/image";
import React from "react";

const WorkSection = () => {
  return (
    <section className="w-[87.86vw] mx-auto mb-24 relative">
      <Image
        src="/BackgroundShapes.png"
        alt="bgImage"
        fill
        className="absolute top-0 left-0 w-[100vw] h-[18.75vw] -z-10 object-contain"
      />
      <h2 className="font-bold text-center text-3xl py-8">How does it work?</h2>

      <div className="relative flex flex-col items-center gap-[4.167vw]">
        <div className="w-[41.667vw] h-[19.375vw] bg-[#D2DAFF] rounded-xl p-4 shadow-md text-center flex flex-col gap-[2.083vw] z-10">
          <Image
            src="/Ellipse 3.png"
            className="mx-auto mt-2 object-contain"
            alt="magnifying"
            width={100}
            height={100}
          />
          <p className="font-bold mt-3 text-[1.667vw]">Search</p>
          <p className="mt-2 text-[1.25vw]">
            Find a tutor by subject or specific need.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:mt-[-3rem]">
          <div className="w-[41.667vw] h-[19.375vw] bg-[#D2DAFF] rounded-xl p-4 shadow-md text-center flex flex-col gap-[2.083vw]">
            <Image
              src="/Frame 50.png"
              className="h-[7vh] mx-auto mt-3"
              alt="frame"
              width={100}
              height={100}
            />
            <p className="font-bold mt-3 text-[1.667vw]">Connect</p>
            <p className="mt-2 text-[1.25vw]">
              Chat or call to discuss availability and goals.
            </p>
          </div>

          <div className="relative w-[41.667vw] h-[19.375vw] bg-[#D2DAFF] rounded-xl p-4 shadow-md text-center flex flex-col gap-[2.083vw]">
            <Image
              src="/Frame 50 (1).png"
              className="h-[7vh] mx-auto mt-3"
              alt="frame2"
              width={100}
              height={100}
            />
            <p className="font-bold mt-3 text-[1.667vw]">Learn</p>
            <p className="mt-2 text-[1.25vw]">
              Start lessons and track your progress overtime.
            </p>
            <img
              src="/Shapes.png"
              className="w-[5vw] h-[5vw] absolute bottom-[1vw] right-[-5vw]"
              alt="shape"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
