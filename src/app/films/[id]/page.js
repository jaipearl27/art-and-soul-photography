"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const FilmViewPage = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/film/${id}`)
      .then(({ data }) => {
        setFilm(data?.film);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-gray-100">
      {/* Thumbnail or Video */}
      <div className="relative w-full">
        {loading ? (
          <div className="w-full h-[60vh] md:h-[80vh] bg-gray-300 animate-pulse flex justify-center items-center rounded-md relative ">
            {/* Play Button Triangle Skeleton */}
            <div className="w-0 h-0 border-t-[30px] border-b-[30px] border-l-[45px] border-l-gray-400 border-t-transparent border-b-transparent animate-pulse "></div>
          </div>
        ) : isPlaying ? (
          <iframe
            src={film.mediaFiles[0].url}
            title={film.name}
            className="w-full h-[60vh] md:h-[80vh] object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="w-full h-[60vh] relative md:h-[80vh]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
              <PlayArrowIcon className="h-24 w-24 text-red-700" size={30} />
            </div>
            <img
              src={film.thumbnail}
              alt={film.name}
              className="h-full w-full object-cover cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Film Details */}
      <div className="p-6 md:p-12 bg-white shadow-lg rounded-lg mt-6 mx-auto max-w-4xl">
        {loading ? (
          <>
            <div className="h-8 w-3/4 bg-gray-300 rounded animate-pulse mb-4"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse mb-6"></div>
            <div className="h-20 bg-gray-300 rounded animate-pulse"></div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">{film.name}</h1>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Type:</strong> {film.type}
            </p>
            <p className="text-gray-600 text-sm mb-6">
              <strong>Release Date:</strong>{" "}
              {new Date(film.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {film.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FilmViewPage;
