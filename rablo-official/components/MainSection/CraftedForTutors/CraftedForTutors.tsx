import Image from "next/image";
import React from "react";
import { features } from "@/StaticData/craftedForTutors";

const CraftedForTutors: React.FC = () => {
  return (
    <section className="py-16 font-[Merriweather] px-6 max-w-7xl mx-auto">
      <div className="flex justify-center">
        <p className="w-[26.354vw] leading-12 text-[3vw] sm:text-4xl font-bold mb-2 text-center">
          Craft
          <span className="underline decoration-[0.65vw] decoration-indigo-200">
            ed for Tutors of{" "}
          </span>
          All Disciplines
        </p>
      </div>
      <div className="py-[4.167vw] font-[Poppins] flex gap-[2.083vw]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#EFF1FC] flex flex-col gap-[1.46vw] rounded-2xl shadow-sm hover:shadow-md transition-all text-left p-[1.56vw]"
          >
            <div className="mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                width={0}
                height={0}
                className="mx-auto w-[6.25vw]"
              />
            </div>
            <p className="text-[1.25vw] font-bold mb-3 text-center">
              {feature.title}
            </p>
            <p className="text-[0.9vw] font-normal text-gray-700">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CraftedForTutors;
