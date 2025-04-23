import Image from "next/image";


const WorkSection = () => {
  return (
    <section id="work" className="w-[87.86vw] mx-auto mb-24 relative">
      <div className="absolute top-0 left-0 w-[90vw] h-[18.75vw] -z-10 object-contain  overflow-hidden">
      <Image
        src="/BackgroundShapes.png"
        alt="bgImage"
        fill
        className=""
      />
      </div>
      <h2 className="font-bold text-center text-3xl py-8 font-[Merriweather]">How does it work?</h2>

      <div className="relative flex flex-col font-[Poppins] items-center gap-[4.167vw]">
        <div className="w-[41.667vw] h-[19.375vw] bg-[#D2DAFF] rounded-xl p-4 text-center flex flex-col gap-[2.083vw] z-10 hover:shadow-xl">
          <Image
            src="/Ellipse 3.png"
            className="mx-auto mt-2 object-contain"
            alt="magnifying"
            width={70}
            height={70}
          />
          <p className="font-bold mt-3 text-[1.667vw]">Search</p>
          <p className="mt-2 text-[1.25vw]">
            Find a tutor by subject or specific need.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:mt-[2 rem]">
          <div className="w-[41.667vw] h-[19.375vw] bg-[#D2DAFF] rounded-xl p-4 text-center flex flex-col gap-[2.083vw] hover:shadow-xl">
            <Image
              src="/Frame 50.png"
              className="h-[7vh] mx-auto mt-3"
              alt="frame"
              width={70}
              height={70}
            />
            <p className="font-bold mt-3 text-[1.667vw]">Connect</p>
            <p className="mt-2 text-[1.25vw]">
              Chat or call to discuss availability and goals.
            </p>
          </div>

          <div className="relative w-[41.667vw] h-[19.375vw] bg-[#D2DAFF] rounded-xl p-4 text-center flex flex-col gap-[2.083vw] hover:shadow-xl">
            <Image
              src="/Frame 50 (1).png"
              className="h-[7vh] mx-auto mt-3"
              alt="frame2"
              width={70}
              height={70}
            />
            <p className="font-bold mt-3 text-[1.667vw]">Learn</p>
            <p className="mt-2 text-[1.25vw]">
              Start lessons and track your progress overtime.
            </p>
            <img
              src="/Shapes.png"
              className="w-[5vw] h-[5vw] absolute bottom-[1vw] right-[-5vw]"
              alt="shape"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
