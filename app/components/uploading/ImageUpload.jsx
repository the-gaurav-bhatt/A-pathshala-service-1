'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from '../spinners/ProgressBar';
const fetchUrlOfImage = async (imagePath) => {
  // const hi = await fetch(
  //   process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_GETPHOTO,
  //   {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       key: imagePath,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'include',
  //   }
  // );
  // const data = await hi.json();
  // return data;
  return `https://gaurav-aplus-backend.s3.amazonaws.com/${imagePath}`;
};
const ImageUpload = ({ setuploadedImageUrl, uploadedImageUrl }) => {
  const [image, setImage] = useState(null);
  const [imgUploadUrl, setImgUploadUrl] = useState(null);
  const [imagePath, setPathToImage] = useState('');
  const [completedPercentage, setCompletedPercentage] = useState(0);

  const handleSubmitBro = async (e) => {
    console.log(image);
    const res = await axios.put(imgUploadUrl, image, {
      headers: {
        'Content-Type': image.type,
      },
      onUploadProgress: (e) => {
        setCompletedPercentage(Math.round((e.loaded * 100) / e.total));
      },
    });
    console.log(res);
    console.log(imagePath);
    const data = await fetchUrlOfImage(imagePath);
    console.log(data);
    setuploadedImageUrl(data);
    console.log(uploadedImageUrl);
  };

  const handleImageChange = async (event) => {
    console.log('Handle Image change Triggered');
    console.log(event.target.files);
    setImage(event.target.files[0]);
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_PHOTOUPLOAD,
      {
        method: 'POST',
        body: JSON.stringify({
          fileName: event.target.files[0].name,
          contentType: event.target.files[0].type,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );
    const data = await res.json();
    console.log(data);
    setImgUploadUrl(data.url.url);
    setPathToImage(data.url.key);
    console.log(imagePath);
  };

  return (
    <>
      <div className=" bg-gray-200 rounded-sm">
        <input type="file" onChange={handleImageChange} />
        <button
          type="button"
          className="text-sm p-2 my-2 bg-blue-500 text-white rounded-md shadow-md"
          onClick={handleSubmitBro}
        >
          Upload Now
        </button>
      </div>
      {imgUploadUrl && (
        <div className="w-1/4">
          <ProgressBar progress={completedPercentage} />
        </div>
      )}
    </>
  );
};

export default ImageUpload;
