"use client";

import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "./FilmCard";
import { useSearchParams, useRouter } from "next/navigation";
import { Pagination } from "@mui/material";

const Films = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState(null);
  const [total, setTotal] = useState(0); 
  const searchParams = useSearchParams();
  const router = useRouter();
  const LIMIT = 12;

  // Get the current page from the URL, default to 1
  const page = Number(searchParams.get("page")) || 1;

  // Ensure page 1 is set in the URL if no query param exists
  useEffect(() => {
    if (!searchParams.get("page")) {
      router.replace("?page=1");
    }
  }, [searchParams, router]);

  // Fetch data when the component mounts or when the page changes
  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/film?page=${page}&limit=${LIMIT}`
        );
        setData(response.data?.films || []); 
        setTotal(response.data?.total || 0);
        setPageInfo(response.data.pagination || {});
        setLoading(false); 
      } catch (err) {
        console.error(err);
        setLoading(false); 
      }
    };

    fetchFilms();
  }, [page]); // Re-run effect when `page` changes

  // Handle pagination
  const handlePagination = (_, value) => {
    router.push(`?page=${value}`); // Update URL with the new page number
  };

  return (
    
    <Suspense fallback={"Loading..."}>
      <div className="pt-[150px] space-y-10">
      {/* Title */}
      <div className="text-4xl text-center">Films</div>

      {/* Films Grid */}
      <div className="mx-auto w-[90%] shadow bg-white rounded-3xl">
        <div className="sm:p-8 p-4 lg:p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <FilmCardSkeleton key={idx} />
              ))
            : data.map((item) => <FilmCard key={item._id} film={item} />)}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-5 pb-10">
          <Pagination
            count={pageInfo?.pages || 1} // Calculate total pages
            page={page} // Display the current page
            color="primary"
            onChange={handlePagination}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default Films;

const FilmCardSkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-4 bg-white rounded-lg shadow-md p-4 animate-pulse">
      {/* Skeleton for image */}
      <div className="w-full h-[150px] sm:h-[200px] bg-gray-300 rounded-md"></div>

      {/* Skeleton for text */}
      <div className="flex-1 flex h-16 w-full flex-col gap-2">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};
