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
            className="bg-[#EFF1FC] flex flex-col gap-[1.458vw] rounded-2xl shadow-sm hover:shadow-md transition-all text-left py-[1.563vw] px-[1.863vw]"
          >
            <div className="mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <p className="text-[1vw] font-semibold mb-3 text-center">
              {feature.title}
            </p>
            <p className="text-[0.833vw] text-gray-700">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CraftedForTutors;
