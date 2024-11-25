"use client";

import Image from "next/image";

export const PhotoCard = ({ img,item }) => {
  function formatDate(date) {

    if (!date || isNaN(new Date(date))) {
      return "-";
    }
  

    const formattedDate = new Date(date).toLocaleDateString("en-US", {

      month: "long",    
      day: "2-digit",   
      year: "numeric",  
    });
  
    return formattedDate;
  }
  return (
    <div className="flex flex-col gap-1">
      <Image src={img} height={450} width={345} alt="" className="h-[400px] object-cover" style={{aspectRatio: '9 / 16'}} />
      <div className="leading-tight">
        <div className="text-base font-bold">{item.name}</div>
        <div className="text-sm">{formatDate(item.date)} </div>
      </div> 
    </div>
  );
};

