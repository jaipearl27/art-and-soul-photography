"use client";

import Image from "next/image";

export const PhotoCard = ({ img }) => {
  return (
    <div className="flex flex-col gap-1">
      <Image src={img} height={450} width={345} alt="" className="h-[400px] object-cover" style={{aspectRatio: '9 / 16'}} />
      <div className="leading-tight">
        <div className="text-base font-bold">Name here</div>
        <div className="text-sm">Oct 10, 2024</div>
      </div>
    </div>
  );
};

