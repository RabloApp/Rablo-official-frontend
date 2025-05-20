"use client";
import Image from "next/image";
import React from "react";
import { navMidItems, navRightItems } from "@/StaticData/Header";
import Link from "next/link";

const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[6.4vw] px-[4.22vw] py-[0.83vw] bg-[#FFFFFF] flex justify-between items-center font-[Poppins]">
      <Image src="/header/images/logo.svg" width={167} height={60} alt="Logo" />

      <div className="flex justify-between items-center gap-[4.8vw]">
        <ul className="flex gap-[2.08vw]">
          {navMidItems.map((item, index) => (
            <li key={index}>
              {item.path?.startsWith("http") ? (
                <a
                  href={item.path}
                  className="text-[1.1vw] font-medium hover:text-[#5271FF]"
                  target="_blank"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.path || "#"}
                  className="text-[1.1vw] font-medium hover:text-[#5271FF]"
                  onClick={(e) => {
                    if (item.component) {
                      e.preventDefault();
                      scrollToSection(item.component);
                    }
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center gap-[0.8vw]">
          {navRightItems.map((item, index) => (
            <div key={index}>
              {item.button && (
                <Link
                  href={item.path}
                  className={`cursor-pointer px-[2vw] font-semibold py-[0.5vw] text-[0.833vw] ${
                    item.label === "Sign up" ? "nav-button2" : "nav-button1"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
