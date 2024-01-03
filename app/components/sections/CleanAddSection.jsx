'use client';
import { useState, useContext } from 'react';
import VideoUpload from '../uploading/VideoUpload';
const CleanAddSection = ({ section, onChange, onRemove, courseId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState(section.name);
  const [title, setTitle] = useState(section.title);
  const [uploadedUrl, setuploadedUrl] = useState([]);
  const [uploadedMaterialUrl, setuploadedMaterialUrl] = useState([{}]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSave = async () => {
    try {
      setIsSubmitting(true);
      await fetch(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_SETSECTION,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            chapterName: name,
            chapterTitle: title,
            videoTitles: uploadedUrl,
            pdfLinks: uploadedMaterialUrl,
            course: courseId,
          }),
        }
      )
        .then(async (res) => {
          return res;
        })
        .then(async (data) => {
          // console.log(data);
          const newData = await data.json();
          if (newData.success) {
            // setIsSuccess(true);
            setIsSubmitting(false);
            // setLoading(false);
            console.log(newData);
          } else {
            // setLoading(false);
            setIsSubmitting(false);
            // setError(true);
            throw new Error(data);
          }
        });
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <h3 className=" font-extrabold text-2xl py-2">Section</h3>
      <div className="mb-2">
        <label
          className="block font-bold mb-2"
          htmlFor={`name-${section.name}`}
        >
          Name(eg: Chapter X)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={`name-${section.name}`}
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-2">
        <label
          className="block font-bold mb-2"
          htmlFor={`title-${section.title}`}
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={`title-${section.title}`}
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-2">
        <label className="block font-bold mb-2">Videos</label>
        <div className=" mb-2">
          <VideoUpload
            uploadedUrl={uploadedUrl}
            setuploadedUrl={setuploadedUrl}
          />
        </div>
      </div>
      <div className="mb-2">
        <label className="block font-bold mb-2">Materials</label>
        <VideoUpload
          uploadedUrl={uploadedMaterialUrl}
          setuploadedUrl={setuploadedMaterialUrl}
        />
      </div>
      {isSubmitting ? (
        <div className="relative pt-1">
          <div className="text-center mt-2 text-xs font-semibold text-gray-600">
            {`Submitting%`}
          </div>
        </div>
      ) : (
        <div className="flex mt-6 justify-around">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save Section
          </button>
        </div>
      )}
      {isError && (
        <div className=" text-red-600">Error While Saving the Section</div>
      )}
    </div>
  );
};

export default CleanAddSection;
