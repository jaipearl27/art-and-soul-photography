"use client";

import { BlogCard } from "@/components/BlogCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Photography = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/photography`)
      .then((res) => {
        setData(res.data.Photographies);
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-[150px] space-y-10">
      <div className="text-4xl text-center">Photography</div>
      <div className="mx-auto w-[90%] shadow bg-white rounded-3xl p-14 grid grid-cols-4 gap-10">
        {data && data?.map((item) => <BlogCard img={item?.thumbnail} />)}
        {!data ||
          (data?.length <= 0 && (
            <div className="text-center py-2 ">No data found..</div>
          ))}
      </div>
    </div>
  );
};

export default Photography;
