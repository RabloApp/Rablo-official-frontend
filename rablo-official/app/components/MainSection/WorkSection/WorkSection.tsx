import React from "react";

const WorkSection = () => {
  return (
    <div className="w-[87.86vw] mx-auto relative mb-4" >
        <img src="/Background Shapes.png" alt="bgImage" />
      <div className="font-bold text-center text-3xl p-3 absolute top-[3rem] left-[35vw]">
        How does it work ?
      </div>
      <div className="absolute top-[7.78vw] left-[17.57vw]">
      <div
        className="w-[25vw] h-[22vh] rounded-xl mx-auto mt-5 bg-[#D2DAFF] p-2 "
      >
        <img src="/Ellipse 3.png" className=" h-[5vh] mx-auto mt-2" alt="magnifying" />
        <p className="w-fit mx-auto font-bold mt-3 text-xl">Search</p>
        <p className="w-fit mx-auto  mt-2 ">Find a tutor by subject or specific need.</p>
        </div>
      
      <div className="flex w-fit mx-auto gap-8 mt-4 pb-12">
        <div className="w-[28vw] h-[22vh] rounded-xl mt-5 bg-[#D2DAFF]">
          <img src="/Frame 50.png" className="h-[7vh] mx-auto mt-3" alt="frame" />
          <p className="w-fit mx-auto font-bold mt-3 text-xl">Connect</p>
          <p className="w-fit mx-auto  mt-2 ">Chat or call to discuss availability and goals.</p>
        </div>
        <div className="flex relative">
        <div className="w-[28vw] h-[22vh] rounded-xl mt-5 bg-[#D2DAFF]">
          <img src="/Frame 50 (1).png" className="h-[7vh] mx-auto mt-3" alt="fame2" />
          <p className="w-fit mx-auto font-bold mt-3 text-xl">Learn</p>
          <p className="w-fit mx-auto  mt-2 ">Start lessons and track your progress overtime.</p>
        </div>
        <img src="/Shapes.png" className="h-[5vw] w-[5vw] absolute bottom-[1vw] right-[-4.8vw]" alt="shape" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default WorkSection;
