"use client";

import { BlogCard } from "@/components/BlogCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";

const Photography = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(12);
  // const [filter, setFilter] = useState("All");
  const [pageInfo, setPageInfo] = useState(null); // To handle pagination info
  const searchParams = useSearchParams(); // Used for reading query params
  const router = useRouter(); // Used for setting query params

  // Ensure `page` has a default value
  useEffect(() => {
    const currentPage = searchParams.get("page");
    if (!currentPage) {
      router.push("?page=1"); // Set default page=1 if not present
    }
  }, []);

  const page = Number(searchParams.get("page")) || 1; // Get page number from URL, default to 1

  // Fetch data when the page or filter changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/photography?page=${page}&limit=${limit}`
        );
        setData(res.data.Photographies); // Set photography data
        setPageInfo(res.data.pagination); // Set pagination info
        setLoading(false); // Data fetching done
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    setLoading(true); // Set loading state before fetching
    fetchData(); // Call fetch data function
  }, [page]);

  const handlePagination = (_, value) => {
    router.push(`?page=${value}`); // Update URL with new page number
  };

  return (
    <div className="pt-[150px] space-y-10">
      {/* Page Title */}
      <div className="text-4xl text-center">Photography</div>

       <div className="bg-white mx-auto w-[90%] grid grid-col shadow rounded-3xl p-5">
      {/* Filter Buttons */}
        {/* <div className="flex justify-center space-x-4 mb-6">
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
              filter === "International"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            International
          </button>
        </div> */}

        {/* Photography Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <PhotographySkeleton key={idx} />
              ))
            : data &&
              data.map((item) => (
                <BlogCard key={item.id} img={item?.thumbnail} item={item} />
              ))}
        </div>

        {/* Pagination */}
        {pageInfo && (
          <div className="flex justify-center mt-5">
            <Pagination
              count={pageInfo?.pages || 1} // Calculate total pages based on backend response
              page={pageInfo?.page || 1} // Ensure correct page is displayed
              color="primary"
              onChange={handlePagination}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Photography;

const PhotographySkeleton = () => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      {/* Image Section */}
      <div className="relative w-full">
        <div className="h-[250px] bg-gray-300 rounded-md w-full animate-pulse"></div>
      </div>

      {/* Content Section */}
      <div className="leading-tight space-y-4 px-4">
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded-md w-full animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded-md w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded-md w-4/5 animate-pulse"></div>
        </div>

        {/* Read More Button */}
        <div className="flex items-center mt-3 gap-2">
          <div className="h-4 bg-gray-300 rounded-md w-20 animate-pulse"></div>
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
        </div>

        {/* Type/Category */}
        <div className="h-4 bg-gray-300 rounded-md w-1/4 mt-4 animate-pulse"></div>
      </div>
    </div>
  );
};
