'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from '../spinners/ProgressBar';

// Function to construct the public URL of the file
const fetchUrlOffile = async (filePath) => {
  return `https://gaurav-aplus-backend.s3.amazonaws.com/${filePath}`;
};

const VideoUpload = ({ setuploadedUrl, uploadedUrl }) => {
  // State variables for handling file uploads
  const [file, setfile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileUploadUrl, setfileUploadUrl] = useState(['']);
  const [filePath, setPathTofile] = useState('');
  const [completedPercentage, setCompletedPercentage] = useState(0);

  // Function to handle file submission
  const handleSubmitBro = async () => {
    // Put the file to the S3 bucket
    const res = await axios.put(fileUploadUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
      onUploadProgress: (e) => {
        setCompletedPercentage(Math.round((e.loaded * 100) / e.total));
      },
    });

    // Fetch the public URL of the uploaded file
    const data = await fetchUrlOffile(filePath);

    // Update the state with the new URL and file name
    setuploadedUrl([...uploadedUrl, data]);
    setUploadedFiles([...uploadedFiles, file.name]);
    console.log(uploadedUrl);
  };

  // Function to handle file selection
  const handlefileChange = async (event) => {
    // Set the selected file
    setfile(event.target.files[0]);

    // Request the upload parameters from the server
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

    // Parse the response
    const data = await res.json();

    // Set the upload URL and file path
    setfileUploadUrl(data.url.url);
    setPathTofile(data.url.key);
  };
  return (
    <>
      <div className="block">
        <div className=" bg-gray-200 rounded-sm">
          <input type="file" onChange={handlefileChange} />
          <button
            type="button"
            className="text-sm bg-blue-500 p-2 m-2 text-white rounded-md shadow-md"
            onClick={handleSubmitBro}
          >
            Upload Now
          </button>
        </div>
        {fileUploadUrl && (
          <div className="w-1/4  border-green-400 text-black">
            <ProgressBar progress={completedPercentage} />
          </div>
        )}
      </div>
      <div className="bg-gray-200 rounded-lg">
        {uploadedFiles.map((fileName, key) => (
          <div key={key} className="flex items-center space-x-4 p-2">
            <span className="text-gray-800">{fileName}</span>
            <svg
              className="w-5 h-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <polyline
                points="10,25 20,35 40,15"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoUpload;
