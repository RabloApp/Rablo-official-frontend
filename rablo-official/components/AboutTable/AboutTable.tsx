import { comparisonData } from "@/StaticData/AboutTable";
import Image from "next/image";
import React from "react";

const AboutTable = () => {
  return (
    <div className="w-full h-[64.64vw] pt-[2.4vw] pb-[5.21vw] px-[13.49vw]">
      <div className="w-[73.02vw] h-[57.03vw]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[1.1vw]">
            <thead>
              <tr className="w-full text-[#5271FF] text-[1.35vw] font-[Merriweather] font-bold text-center">
                <th className="text-left text-[1.35vw] w-[36.93vw]"></th>
                <th className="w-[12.03vw]">Rablo</th>
                <th className="w-[12.03vw]">Your Local <br /> Tutor</th>
                <th className="w-[12.03vw]">LMS Solution</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className={`w-full h-[3.07vw] text-center ${index % 2 !== 0 ? "bg-[#FFE1C25E]" : ""}`}>
                  <td className="text-left py-[0.83vw] px-[1.04vw] border-r border-[#5271FF] text-[#3D3D3D]">
                    {item.feature}
                  </td>

                  {[item.rablo, item.localTutor, item.lmsSolution].map((val, i) => (
                    <td
                      key={i}
                      className={`border-r border-[#5271FF] align-middle ${i === 2 ? "border-r-0" : ""}`}
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          className="w-[2.19vw] h-[2.19vw]"
                          src={`/aboutUs/aboutTable/${val ? "Done" : "Clear"}.svg`}
                          width={0}
                          height={0}
                          alt={val ? "Done" : "Clear"}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutTable;
