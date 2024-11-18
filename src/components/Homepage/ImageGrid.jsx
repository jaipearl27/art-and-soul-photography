'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ImageGrid = () => {

  const [ImageArray, setImageArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/global/image-grid`)
      .then(({ data }) => {
        setImageArray(data?.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0.5">
      {ImageArray.map((item, index) => (
        <div
          key={index}
          className="aspect-square w-full bg-gray-200 overflow-hidden"
        >
          <img
            src={item?.imageUrl}
            alt={`Sample Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
