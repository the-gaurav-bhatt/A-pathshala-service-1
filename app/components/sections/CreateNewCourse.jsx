'use client';
import React, { useEffect, useState } from 'react';
import BounceSpinners from '../spinners/BounceSpinners';
import ImageUpload from '../uploading/ImageUpload';
function CreateNewCourse({ givenCourse, setNext, setCourseId }) {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(givenCourse);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadedImageUrl, setuploadedImageUrl] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [course, setCourse] = useState({
    title: '',
    subtitle: '',
    requirements: '',
    description: '',
    price: 0,
    discount: 0,
    language: '',
    thumbNail: '',
  });

  useEffect(() => {
    if (givenCourse) {
      setCourse({
        title: givenCourse.title || '',
        subtitle: givenCourse.subtitle || '',
        requirements: givenCourse.requirements || '',
        description: givenCourse.description || '',
        price: givenCourse.price || 0,
        discount: givenCourse.discount || 0,
        language: givenCourse.language || '',
        thumbNail: givenCourse.thumbNail || '',
      });
    }
  }, [givenCourse]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCourse = { ...course, thumbNail: uploadedImageUrl };
    console.log('Hitting Update Course ');
    let url;
    try {
      setIsSubmitting(true);
      if (givenCourse.Id) {
        url =
          process.env.NEXT_PUBLIC_BACKEND +
          process.env.NEXT_PUBLIC_EDITCOURSE +
          `?courseId=${givenCourse._id}`;
      } else {
        url =
          process.env.NEXT_PUBLIC_BACKEND +
          process.env.NEXT_PUBLIC_SETCOURSEMETA;
      }
      console.log(url);
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',

        body: JSON.stringify({
          newCourse,
        }),
      })
        .then(async (res) => {
          return res;
        })
        .then(async (data) => {
          // console.log(data);
          const newData = await data.json();
          if (newData.success) {
            setIsSuccess(true);
            setIsSubmitting(false);
            // setLoading(false);
            if (!givenCourse._id) {
              setCourseId(newData._id);
            }
            setNext(true);
            console.log(newData);
          } else {
            // setLoading(false);
            setIsSubmitting(false);

            throw new Error(data);
          }
        });
    } catch (err) {
      setIsSubmitting(false);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col pt-10 items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        datatype="form-data"
        encType="multipart/form-data"
        className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {givenCourse ? 'Edit Course' : 'Create a new course'}
        </h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={course.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subtitle"
            className="block text-gray-700 font-bold mb-2"
          >
            Subtitle
          </label>
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            value={course.subtitle}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="requirements"
            className="block text-gray-700 font-bold mb-2"
          >
            Requirements
          </label>
          <div>
            <input
              id="requirements"
              type="text"
              name="requirements"
              value={course.requirements}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              // required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            // required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={course.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            // required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="discount"
            className="block text-gray-700 font-bold mb-2"
          >
            Discount
          </label>
          <input
            id="discount"
            type="number"
            name="discount"
            value={course.discount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="language"
            className="block text-gray-700 font-bold mb-2"
          >
            Language
          </label>
          <input
            id="language"
            type="text"
            name="language"
            value={course.language}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            // required
          />
        </div>
        <ImageUpload
          setuploadedImageUrl={setuploadedImageUrl}
          uploadedImageUrl={uploadedImageUrl}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting || !uploadedImageUrl}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {isSubmitting ? (
              <span>
                {' '}
                <BounceSpinners />{' '}
              </span>
            ) : givenCourse?._id ? (
              'Update Course '
            ) : (
              ` Create course`
            )}
          </button>
        </div>
        {isSuccess && (
          <p className="mt-4 text-center text-green-500 font-bold">
            Course Created Successfully !
          </p>
        )}
      </form>
    </div>
  );
}

export default CreateNewCourse;
