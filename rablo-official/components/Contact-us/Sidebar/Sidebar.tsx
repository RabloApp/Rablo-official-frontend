import { sidebarData, sidebarIcons } from "@/StaticData/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[27.34vw] bg-[#0A66C2] p-[2.08vw] flex flex-col gap-[4.17vw] relative">
      <div className="w-[14.53vw] flex items-center gap-[1.6vw]">
        <Link href="/">
          <Image
            src="/sidebar/images/arrow.svg"
            className="w-[1.11vw] h-[1.11vw]"
            width={0}
            height={0}
            alt=""
          />
        </Link>
        <Image
          src="/sidebar/images/logo.svg"
          className="w-[7.34vw] h-[1.67vw]"
          width={0}
          height={0}
          alt=""
        />
      </div>

      <div className="absolute right-0">
        <Image
          src="/sidebar/images/Ellipse.svg"
          className="w-[2.08vw] h-[4.17vw]"
          width={0}
          height={0}
          alt=""
        />
      </div>

      <div className="w-[23.18vw] h-[5.83vw] flex flex-col gap-[0.83vw] text-[#FFFFFF]">
        <h1 className="font-[Poppins] font-semibold text-[1.67vw] ">
          Get in touch
        </h1>
        <p className="font-normal text-[1vw]">
          We’d love to hear from you. Our friendly team is here to chat.
        </p>
      </div>

      <div className="w-[23.18vw] h-[16.04] flex flex-col gap-[2.08vw] ">
        {sidebarData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[23.18] flex justify-center items-center gap-[1vw] text-[#FFFFFF]"
            >
              <Image
                src={item.image}
                className="w-[1.67vw] h-[1.67vw]"
                width={0}
                height={0}
                alt=""
              />
              <div className=" w-[20.68vw] h-[3.54vw] flex flex-col gap-[0.42vw] ">
                <h1 className="font-[poppins] font-normal text-[1.25vw]">
                  {item.title}
                </h1>
                <p className="font-[poppins] font-medium text-[0.95vw]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-[13.33vw] flex flex-row gap-[1.67vw] pt-[1.56vw]">
        {sidebarIcons.map((item, index) => {
          return (
            <Image
              src={item.icon}
              key={index}
              className="w-[2.08vw] h-[2.08vw] cursor-pointer"
              width={0}
              height={0}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
