"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "../BlogCard";

const WeddingList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/photography`)
      .then((res) => {
        setData(res.data.Photographies);
        console.log(res)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="px-5 md:px-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {data && data?.length > 0 &&
            data?.map((item) => <BlogCard key={item.id} img={item?.thumbnail} item={item} />)}
            {!data || data?.length <= 0 && (
              <div className="text-center py-2 ">No data found..</div>
            )}
        </div>
      </div>
    </>
  );
};

export default WeddingList;
