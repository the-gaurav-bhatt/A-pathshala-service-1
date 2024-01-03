'use client';
import { useEffect, useState } from 'react';
import CourseData from '../../data/CourseData';
import CourseCard from '../CourseCard';
const PopularCourses = () => {
  const [PopularCourses, setPopularCourses] = useState([]);
  useEffect(() => {
    const findCourse = async () => {
      const result = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_POPULARCOURSE
      );
      const data = await result.json();
      console.log(data);
      setPopularCourses(data);
    };
    findCourse();
  }, []);

  return (
    <>
      <h2 className="font-bold text-3xl text-black m-10 ms-12">
        Popular Courses{' '}
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mx-6 lg:grid-cols-4 overflow-x-auto xl:grid-cols-5">
        {PopularCourses.map((course, ind) => (
          <CourseCard key={ind} course={course} />
        ))}
      </div>
    </>
  );
};

export default PopularCourses;
