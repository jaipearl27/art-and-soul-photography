"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Page = () => {
  const { id } = useParams();
  const [photography, setPhotography] = useState(null);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/photography/${id}`)
      .then(({ data }) => {
        setPhotography(data?.photography);
        setMediaFiles(data?.mediaFiles);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen pt-24 text-[#00000096] lg:px-40 px-20">
      <h1 className="text-5xl font-bold mb-4 text-center mt-20">
        {photography?.name}
      </h1>
      <p className=" text-base text-center leading-relaxed mt-10">
        {photography?.description}
      </p>

      <MediaFilesComponent mediaFiles={mediaFiles} />
    </div>
  );
};

export default Page;


const MediaFilesComponent = ({ mediaFiles }) => {
  return (
    <div className="media-container">
      {mediaFiles.map((file, index) => {
        const imagesToShow = (index % 2 === 0) ? 1 : 2;
        const imagesSlice = mediaFiles.slice(index, index + imagesToShow);

        return (
          <div key={index} className="flex space-x-4 mb-4 max-w-full h-[100dvh] justify-center">
            {imagesSlice.map((image, idx) => (
              <img
                key={idx}
                src={image.url} // Assuming `image.url` is the path to the image
                alt={`image-${index}-${idx}`}
                className={` ${imagesToShow === 2 && idx === 0 ? 'max-w-1/2 border-black border' : 'h-full'} rounded-md`}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};


