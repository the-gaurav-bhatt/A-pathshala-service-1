'use client';
import { courseContext } from '@/app/become-teacher/create-course/page';
import React, { useContext, useState } from 'react';
import axios from 'axios';
// import { cookieContext } from '@/app/layout';
import BounceSpinners from '../spinners/BounceSpinners';
import ProgressBar from '../spinners/ProgressBar';
function CreateNewCourse({ setNext }) {
  // const { cookie } = useContext(cookieContext);
  const { setCourseId, courseId } = useContext(courseContext);
  console.log(courseId);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setuploadedImageUrl] = useState('');
  const [imgUploadUrl, setImgUploadUrl] = useState('');
  const [imagePath, setPathToImage] = useState('');
  const [completedPercentage, setCompletedPercentage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [course, setCourse] = useState({
    title: '',
    subtitle: '',
    requirements: '',
    description: '',
    price: 0,
    discount: 0,
    language: '',
    binary: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const handleFileChange = (event) => {
    const myFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCourse({ ...course, binary: reader.result });
    };
    setFile(myFile);
    reader.readAsDataURL(myFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNext(true);

    setIsSubmitting(true);
    let formData = new FormData();
    // formData.append('binary', file);
    formData.append('title', course.title);
    formData.append('subtitle', course.subtitle);
    formData.append('description', course.description);
    formData.append('price', course.price);
    formData.append('category', 'Class 10');
    formData.append('subCategories', 'lkdfj');
    formData.append('discount', course.discount);
    formData.append('language', course.language);
    formData.append('binary', file);
    formData.append('requirements', course.requirements);
    try {
      const res = await axios.post(
        'https://a-pathshala-service-2.onrender.com/api/v1/course/createCourse',
        formData,
        {
          headers: {
            Authorization: cookie,
          },
        }
      );
      // console.log(res);
      if (res.status === 200) {
        setCourseId(res.data.bucketName);

        setIsSuccess(true);
        setIsSubmitting(false);
        setNext(true);
      } else {
        setIsSubmitting(false);
        console.log(res);
      }
    } catch (error) {
      setIsSubmitting(false);

      console.log(error);
    }
  };

  // working on simple image upload system
  const handleSubmitBro = async (event) => {
    event.preventDefault();

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
    // if (res.status == 200) {
    const hi = await fetch(
      process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_GETPHOTO,
      {
        method: 'POST',
        body: JSON.stringify({
          key: imagePath,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );
    const data = await hi.json();
    console.log(data);
    setuploadedImageUrl(data.url);
    // }
  };
  const handleImageChange = async (event) => {
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
    setImgUploadUrl(data.url.url);
    setPathToImage(data.url.key);
  };
  return (
    <>
      <form onSubmit={handleSubmitBro} method="get">
        <input type="file" onChange={handleImageChange} />
        Upload <button type="submit">Submit</button>
        {
          <div className=" w-1/4">
            <ProgressBar progress={completedPercentage} />
          </div>
        }
        {uploadedImageUrl && (
          <img className="w-50 h-50" src={`${uploadedImageUrl}`} />
        )}
      </form>
    </>
  );
  // return (
  //   <div className="flex flex-col pt-10 items-center justify-center min-h-screen bg-gray-100">
  //     <form
  //       onSubmit={handleSubmit}
  //       datatype="form-data"
  //       encType="multipart/form-data"
  //       className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
  //     >
  //       <h1 className="text-3xl font-bold text-gray-800 mb-6">
  //         Create a new course
  //       </h1>
  //       <div className="mb-4">
  //         <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
  //           Title
  //         </label>
  //         <input
  //           id="title"
  //           type="text"
  //           name="title"
  //           value={course.title}
  //           onChange={handleInputChange}
  //           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  //           required
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="subtitle"
  //           className="block text-gray-700 font-bold mb-2"
  //         >
  //           Subtitle
  //         </label>
  //         <input
  //           id="subtitle"
  //           type="text"
  //           name="subtitle"
  //           value={course.subtitle}
  //           onChange={handleInputChange}
  //           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  //           required
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="requirements"
  //           className="block text-gray-700 font-bold mb-2"
  //         >
  //           Requirements
  //         </label>
  //         <div>
  //           <input
  //             id="requirements"
  //             type="text"
  //             name="requirements"
  //             value={course.requirements}
  //             onChange={handleInputChange}
  //             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  //             // required
  //           />
  //         </div>
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="description"
  //           className="block text-gray-700 font-bold mb-2"
  //         >
  //           Description
  //         </label>
  //         <textarea
  //           id="description"
  //           name="description"
  //           value={course.description}
  //           onChange={handleInputChange}
  //           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  //           // required
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
  //           Price
  //         </label>
  //         <input
  //           id="price"
  //           type="number"
  //           name="price"
  //           value={course.price}
  //           onChange={handleInputChange}
  //           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  //           // required
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="discount"
  //           className="block text-gray-700 font-bold mb-2"
  //         >
  //           Discount
  //         </label>
  //         <input
  //           id="discount"
  //           type="number"
  //           name="discount"
  //           value={course.discount}
  //           onChange={handleInputChange}
  //           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="language"
  //           className="block text-gray-700 font-bold mb-2"
  //         >
  //           Language
  //         </label>
  //         <input
  //           id="language"
  //           type="text"
  //           name="language"
  //           value={course.language}
  //           onChange={handleInputChange}
  //           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  //           // required
  //         />
  //       </div>
  //       <div className="mb-4">
  //         <label
  //           htmlFor="binary"
  //           className="block text-gray-700 font-bold mb-2"
  //         >
  //           Thumbnail
  //         </label>
  //         {course.binary ? (
  //           <img
  //             src={course.binary}
  //             alt="Course binary"
  //             className="mb-2"
  //             style={{ maxWidth: '100%' }}
  //           />
  //         ) : null}
  //         <div className="flex items-center">
  //           <label
  //             htmlFor="binary-upload"
  //             className="flex-1 cursor-pointer bg-white rounded-md border-gray-300 hover:border-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
  //           >
  //             <svg
  //               className="w-8 h-8 text-gray-400"
  //               fill="none"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path d="M12 4v16m8-8H4" />
  //             </svg>
  //             <span className="ml-2 text-sm text-gray-600">
  //               Upload a file or drag and drop
  //             </span>
  //             <input
  //               id="binary-upload"
  //               type="file"
  //               accept="image/*"
  //               className="sr-only"
  //               onChange={handleFileChange}
  //             />
  //           </label>
  //           {course.binary ? (
  //             <button
  //               type="button"
  //               className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
  //               onClick={() => setCourse({ ...course, binary: '' })}
  //             >
  //               Remove
  //             </button>
  //           ) : null}
  //         </div>
  //       </div>
  //       <div className="flex justify-center">
  //         <button
  //           type="submit"
  //           disabled={isSubmitting}
  //           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
  //         >
  //           {isSubmitting ? (
  //             <span>
  //               {' '}
  //               <BounceSpinners />{' '}
  //             </span>
  //           ) : (
  //             ' Create course'
  //           )}
  //         </button>
  //       </div>
  //       {isSuccess && (
  //         <p className="mt-4 text-center text-green-500 font-bold">
  //           Course Created Successfully !
  //         </p>
  //       )}
  //     </form>
  //   </div>
  // );
}

export default CreateNewCourse;
