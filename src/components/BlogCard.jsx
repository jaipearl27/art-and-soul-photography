"use client";

import Image from "next/image";

export const BlogCard = ({ img }) => {
  return (
    <div className="flex flex-col gap-1">
      <Image src={img} height={450} width={345} alt="" className="h-[400px] object-cover" style={{aspectRatio: '9 / 16'}} />
      <div className="leading-tight">
        <div className="text-base font-bold">Name here</div>
        <div className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero ut, corrupti quam placeat alias repellendus soluta</div>
      </div>
    </div>
  );
};

