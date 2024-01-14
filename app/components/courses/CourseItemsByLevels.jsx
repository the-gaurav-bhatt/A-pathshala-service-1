'use client';
import CourseCard from './CourseCard';
import { useState, useEffect } from 'react';

const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
};

const CourseItemsByLevel = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_GETALLCOURSES
      );
      const data = await res.json();
      setCourses(data.courses);
    };
    getCourses();
  }, [courses]);
  const coursesByLevel = groupBy(courses, 'category');

  return (
    <div className="container mx-auto px-4">
      {Object.entries(coursesByLevel)
        .slice(0, 8)
        .map(([category, courses]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl my-10 px-10 font-extrabold  z-10 bg-gray-100 shadow-lg rounded-lg  mb-4">
              {category}
            </h2>
            <div className="courses grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courses.slice(0, 8).map((course, val) => (
                <CourseCard key={val} course={course} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CourseItemsByLevel;
