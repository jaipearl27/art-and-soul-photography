"use client";

import { useEffect, useState } from "react";
import { PhotoCard } from "../PhotoCard";
import axios from "axios";

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
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-1">
          {data && data?.length > 0 &&
            data?.map((item) => <PhotoCard img={item?.thumbnail} item={item}/>)}
            {!data || data?.length <= 0 && (
              <div className="text-center py-2 ">No data found..</div>
            )}
        </div>
      </div>
    </>
  );
};

export default WeddingList;
