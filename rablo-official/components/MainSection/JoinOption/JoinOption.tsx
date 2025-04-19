"use client";
import Link from "next/link";
import React from "react";

const JoinOption = () => {
  return (
    <div className="w-full h-[29.11vw] mx-auto bg-[#ffffff] py-[5.21vw]  text-black bg-[url(/JoinOption/Ellipse.svg)] bg-size-[100%] bg-top bg-no-repeat font-[Poppins]">
      <div className=" w-[98.96vw] mx-auto p-[0.52vw]  flex flex-col justify-center items-center  gap-y-[2.52vw]">
        <h2 className="text-[2.08vw] font-[500] ">
          Ready to start your learning journey?
        </h2>
        <div className="flex gap-[3.75vw] justify-center items-center">
          <Link
            href="/join"
            className="w-[17.396vw] p-[0.833vw] text-[1.042vw] nav-button1"
          >
            Get started as a student
          </Link>
          <Link
            href="/join"
            className="w-[9.115vw] py-[0.833vw] px-[0.5vw] text-[1.042vw] nav-button1"
          >
            Join as a tutor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinOption;
