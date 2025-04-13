import Image from "next/image";
import React from "react";
import { navMidItems, navRightItems } from "@/app/StaticData/Header";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full px-[4.22vw] py-[0.83vw] bg-[#FFFFFF] flex justify-between items-center border border-black">
      <Image src="/header/images/logo.svg" width={167} height={60} alt="Logo" />
      <ul className="flex gap-[1.7vw]">
        {navMidItems.map((item, index) => {
          return (
            <Link key={index} href={item.path} className="text-[1.2vw]">
              {item.label}
            </Link>
          );
        })}
      </ul>

      <div className="flex justify-between items-center gap-[1.7vw]">
        {navRightItems.map((item, index) => {
          return (
            <div key={index}>
              {item.button ? (
                <Link
                  href={item.path}
                  className={`cursor-pointer ${
                    item.label === "Sign up" ? "nav-button2" : "nav-button1"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link href={item.path} className="text-[1.2vw]">{item.label}</Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
