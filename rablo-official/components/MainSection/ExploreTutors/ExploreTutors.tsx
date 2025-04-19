import { tutors } from "@/StaticData/ExploreTutors";
import Image from "next/image";
import React from "react";

const ExploreTutors = () => {
  return (
    <div className="flex flex-col p-[6.25vw] gap-[5vw] relative">
      {/* <div className="flex text-center"> */}
      <p className="font-[Merriweather] font-bold text-[2.5vw] text-center underline">Master concepts with masterminds</p>
      {/* <div className="w-[36.458vw] relative">
          <Image
            src="/mainSection/icons/Search.svg"
            alt="search"
            width={24}
            height={24}
            className="absolute top-[1vw] left-[0.5vw]"
          />
          <input
            type="text"
            placeholder="Search by subject or grade..."
            className="w-full border px-[2vw] py-[0.833vw] rounded-[0.833vw] text-[0.833vw] outline-none border-[#5271FF]"
          />
        </div> */}
      {/* </div> */}
      <div className="absolute top-[8vw] right-[0.8vw]">
        <Image
          src="/mainSection/images/Shapes.png"
          alt="shapes"
          width={80}
          height={80}
        />
      </div>
      <div className="flex gap-[4.167vw] relative">
        {tutors.map((tutor, index) => (
          <div key={index} className="w-[26.406vw] relative">
            <Image
              src={tutor.image}
              alt={tutor.name}
              width={200}
              height={20}
              className="rounded-lg absolute top-0 right-0"
            />
            <div className="h-[20.625vw] py-[2.083vw] px-[1.25vw] bg-[#EBEFFF] mt-[6.25vw] flex flex-col gap-[2vw] font-[Poppins]">
              <p className="text-[1.667vw] font-semibold">{tutor.name}</p>
              <p className="text-[1.25vw]">{tutor.occupation}</p>
              <Image
                src="/mainSection/images/Ratings.png"
                alt="ratings"
                width={459}
                height={60}
              />
              <p className="text-[1.25vw]">{tutor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTutors;
