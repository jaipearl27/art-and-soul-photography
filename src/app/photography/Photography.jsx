"use client";

import { BlogCard } from "@/components/BlogCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Photography = () => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState("All"); 
  useEffect(() => {
   
    const fetchData = () => {
      const queryParam = filter !== "All" ? `?type=${filter}` : "";
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/photography${queryParam}`)
        .then((res) => {
          setData(res.data.Photographies);
          console.log("RES", res);
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, [filter]); 

  return (
    <div className="pt-[150px] space-y-10">
      {/* Page Title */}
      <div className="text-4xl text-center">Photography</div>

      {/* Filter Buttons */}
      <div className="bg-white mx-auto w-[90%] grid grid-col shadow rounded-3xl p-5">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 border rounded ${
              filter === "All" ? "bg-blue-600 text-white" : "text-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Indian")}
            className={`px-4 py-2 border rounded ${
              filter === "Indian" ? "bg-blue-600 text-white" : "text-gray-600"
            }`}
          >
            Indian
          </button>
          <button
            onClick={() => setFilter("International")}
            className={`px-4 py-2 border rounded ${
              filter === "International" ? "bg-blue-600 text-white" : "text-gray-600"
            }`}
          >
            International
          </button>
        </div>

        {/* Photography Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {data &&
            data.map((item) => (
              <BlogCard key={item.id} img={item?.thumbnail} item={item} />
            ))}

          {(!data || data.length <= 0) && (
            <div className="text-center py-2">No data found..</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Photography;
