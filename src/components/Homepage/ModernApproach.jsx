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
            Considered to be the epitome of Modern Photography and Filmmaking,
            HOTC has transformed the Indian Wedding landscape on a regular
            basis. For almost a decade, House On The Clouds has been creating
            photographs and films which are timeless and have been etched in
            memories of thousands of people forever.
          </p>
          <p className="text-black leading-relaxed">
            Awarded as the Wedding Filmmaker of the year for four consecutive
            years at the Weddingsutra awards along with numerous other awards,
            HOTC is the only company listed on IMDB for its award-winning films.
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
          Considered to be the epitome of Modern Photography and Filmmaking,
          HOTC has transformed the Indian Wedding landscape on a regular basis.
          For almost a decade, House On The Clouds has been creating photographs
          and films which are timeless and have been etched in memories of
          thousands of people forever.
        </p>
        <p className="text-black leading-relaxed">
          Awarded as the Wedding Filmmaker of the year for four consecutive
          years at the Weddingsutra awards along with numerous other awards,
          HOTC is the only company listed on IMDB for its award-winning films.
        </p>
      </div>
      <div class="flex justify-center xl:text-2xl space-x-1 pt-32 md:space-x-2 md:absolute md:bottom-32 lg:bottom-36  md:left-1/2 md:-translate-x-[30%]">
        <span class="font-serif  text-gray-800">
          VOGUE
        </span>
        <span class="font-sans font-bold text-gray-800">
          COSMOPOLITAN
        </span>
        <span class="font-sans font-bold text-gray-800 bg-gray-300 px-2">
          HELLO!
        </span>
        <span class="font-serif  text-gray-800">
          BRIDES
        </span>
        <span class="font-sans font-bold text-gray-800 bg-gray-300 px-2">
          TRAVEL+LEISURE
        </span>
      </div>
    </div>
  );
};

export default ModernApproach;
