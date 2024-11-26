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

        setMediaFiles(formatMediaFiles(data?.mediaFiles));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const formatMediaFiles = (mediaFiles) => {
    if (!Array.isArray(mediaFiles)) return [];

    const formatted = [];
    let toggle = true;

    for (let i = 0; i < mediaFiles.length; ) {
      const chunkSize = toggle ? 1 : 2;
      const chunk = mediaFiles.slice(i, i + chunkSize);

      formatted.push(chunk);

      i += chunkSize;
      toggle = !toggle;
    }

    return formatted;
  };

  return (
    <div className="min-h-screen pt-24 text-[#00000096] lg:px-40 md:px-20 px-5">
      <h1 className="text-5xl font-bold mb-4 text-center mt-20">
        {photography?.name}
      </h1>
      <p className=" text-base text-center leading-relaxed  my-10">
        {photography?.description}
      </p>

      <MediaFilesComponent mediaFiles={mediaFiles} />
    </div>
  );
};

export default Page;

const MediaFilesComponent = ({ mediaFiles }) => {
  return (
    <div className="space-y-2">
      {mediaFiles.map((files, index) => {
        return (
          <div key={index} className="flex gap-2 justify-center max-h-[100dvh] max-w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
            {files.map((file, idx) => {
              return (
                <img
                  key={idx}
                  src={file.url}
                  alt={`image-${index}-${idx}`}
                  className={` ${
                    index % 2 === 0 ? "  max-w-full " : "max-w-1/2 h-full w-1/2 "
                  } rounded-md object-cover min-h-full`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
