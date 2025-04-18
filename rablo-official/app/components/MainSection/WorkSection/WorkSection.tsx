import React from "react";

const WorkSection = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <div className="font-bold text-center text-3xl p-3">
        How does it work ?
      </div>
      <div
        className="w-[25vw] h-[22vh] rounded-xl mx-auto mt-5 bg-[#D2DAFF] p-2"
      >
        <img src="/Ellipse 3.png" className=" h-[5vh] mx-auto mt-2" alt="magnifying" />
        <p className="w-fit mx-auto font-bold mt-3 text-xl">Search</p>
        <p className="w-fit mx-auto  mt-2 ">Find a tutor by subject or specific need.</p>
        </div>
      
      <div className="flex w-fit mx-auto gap-8 mt-4">
        <div className="w-[28vw] h-[22vh] rounded-xl mt-5 bg-[#D2DAFF]">
          <img src="/Frame 50.png" className="h-[7vh] mx-auto mt-3" alt="frame" />
          <p className="w-fit mx-auto font-bold mt-3 text-xl">Connect</p>
          <p className="w-fit mx-auto  mt-2 ">Chat or call to discuss availability and goals.</p>
        </div>
        <div className="w-[28vw] h-[22vh] rounded-xl mt-5 bg-[#D2DAFF]">
          <img src="/Frame 50 (1).png" className="h-[7vh] mx-auto mt-3" alt="fame2" />
          <p className="w-fit mx-auto font-bold mt-3 text-xl">Learn</p>
          <p className="w-fit mx-auto  mt-2 ">Start lessons and track your progress overtime.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
