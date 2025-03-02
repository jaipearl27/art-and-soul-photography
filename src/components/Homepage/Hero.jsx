"use client";

import Image from "next/image";

 const Hero = ({ img, width = "100", height = "100", customClass }) => {
  return (
    <>
      <Image
        src={img}
        width={1920}
        height={1080}
        className={`w-screen ${customClass}`}
        alt=""
      />
    </>
  );
};

export default Hero