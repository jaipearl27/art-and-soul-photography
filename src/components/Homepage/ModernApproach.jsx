import React from "react";

const ModernApproach = () => {
  return (
    <div className="text-gray-800 md:py-20 min-h-screen relative">
      <div className="text-center text-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 absolute top-10  md:top-[15%] lg:top-[20%]  xl:top-[25%] left-1/2 -translate-x-1/2 md:-translate-x-[60%]">
        <p>A MODERN APPROACH </p>
        <p>to an AGE OLD TRADITION</p>
      </div>

      <div className="px-5 flex md:justify-between justify-around items-center gap-4 xl:px-16">
        <div className=" w-40 sm:w-[28%] relative bottom-0 md:pt-52 pt-10">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/306b3c30-8166-4514-82d9-1c1263929d2c/0H1A4354+%281%29+small.jpg?format=500w"
              alt="Wedding"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="md:flex flex-col hidden lg:pt-0 pt-20 text-black text-sm justify-center space-y-6 sm:w-[38%]">
          <p className="text-black leading-relaxed ">
            Art and Soul Photography has redefined the essence of wedding
            storytelling, blending artistry and emotion to create timeless
            photographs and films.For over a decade, they have captured
            unforgettable moments, preserving memories that resonate with love
            and authenticity.
          </p>
          <p className="text-black leading-relaxed">
            Celebrated as pioneers in wedding photography and filmmaking, Art
            and Soul has earned accolades for their unparalleled creativity and
            dedication, including being recognized at prestigious industry
            awards.
          </p>
        </div>
        {/* Right Image */}
        <div className=" w-40 sm:w-[34%] md:pb-52 md:pt-0 pt-52">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60b40cb3dd6dc9347755b5ab/1db82b11-0d5e-446f-bfef-3bee15ed4f8a/P1+small.jpg?format=500w"
            alt="Wedding"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden px-10 py-5 text-black text-sm justify-center space-y-6 w-full">
        <p className="text-black leading-relaxed ">
          Celebrated as pioneers in wedding photography and filmmaking, Art and
          Soul has earned accolades for their unparalleled creativity and
          dedication, including being recognized at prestigious industry awards.
        </p>
        <p className="text-black leading-relaxed">
          Renowned for their heartfelt narratives and cinematic excellence, they
          are a trusted name for couples seeking extraordinary visual stories of
          their special day.
        </p>
      </div>
      <div className="flex justify-center xl:text-2xl space-x-1 pt-32 md:space-x-2 md:absolute md:bottom-32 lg:bottom-36  md:left-1/2 md:-translate-x-[30%]">
        <span className="font-serif  text-gray-800">WEDDING</span>
        <span className="font-sans font-bold text-gray-800">ENGAGEMENT</span>
        <span className="font-sans font-bold text-gray-800 bg-gray-300 px-2">
          PRE-WEDDING
        </span>
        <span className="font-serif  text-gray-800">BRIDES</span>
        <span className="font-sans font-bold text-gray-800 bg-gray-300 px-2">
          GROOM
        </span>
      </div>
    </div>
  );
};

export default ModernApproach;
