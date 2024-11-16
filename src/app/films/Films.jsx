"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "./FilmCard";

const Films = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/film`)
      .then(({ data }) => {
        setData(data?.films);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-[150px] space-y-10">
      {/* Title */}
      <div className="text-4xl text-center">Films</div>

      {/* Films Grid */}
      <div className="mx-auto w-[90%] shadow bg-white rounded-3xl sm:p-8 p-4 lg:p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <FilmCardSkeleton key={idx} />
            ))
          : data.map((item) => <FilmCard key={item._id} film={item} />)}
      </div>
    </div>
  );
};

export default Films;

const FilmCardSkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-4 bg-white rounded-lg shadow-md p-4 animate-pulse">
      <div className="w-full h-[150px] sm:h-[200px] bg-gray-300 rounded-md"></div>

      <div className="flex-1 flex h-16 w-full flex-col gap-2">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};
