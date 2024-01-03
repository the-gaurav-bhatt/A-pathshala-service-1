'use client';
import CourseData from '../data/CourseData';

import { useState } from 'react';
import CourseFilter from './CourseFilters';
import CourseList from '../teachers/CourseList';
import CourseItemsByLevel from './CourseItemsByLevels';
import CategorySidebar from './CategorySideBar';
const Courses = () => {
  const COURSES = CourseData;
  const [filteredCourses, setFilteredCourses] = useState(COURSES);
  const [isClosed, setIsClosed] = useState(false);

  console.log(filteredCourses);
  console.log('Showing filtered COurses' + filteredCourses);
  const handleFilterChange = ({ category = '', search = '' }) => {
    let courses = COURSES;
    if (category) {
      courses = COURSES.filter((course) => course.category === category);
    }
    if (search) {
      const searchTerm = search.toLowerCase();
      courses = COURSES.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm) ||
          course?.description?.toLowerCase().includes(searchTerm)
      );
    }
    setFilteredCourses(courses);
    console.log(filteredCourses);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setIsClosed(false);
  };
  return (
    <>
      <div className="flex ">
        {isClosed ? (
          // <button onClick={handleOpen} className="block">
          <svg
            className="w-8 h-8 ms-3 mt-3 me-3 hover:cursor-pointer"
            onClick={handleOpen}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12H3" />
            <path d="M21 6H3" />
            <path d="M21 18H3" />
          </svg>
        ) : (
          // </button>
          <CategorySidebar setIsClosed={setIsClosed} />
        )}
        <div className="container mx-auto">
          <CourseFilter onFilterChange={handleFilterChange} />
          <CourseList courses={filteredCourses} gridColumns={3} />
          <h2 className=" flex justify-center items-center text-3xl m-6 font-bold">
            Explore Courses Levelwise
          </h2>
          <CourseItemsByLevel />
        </div>
      </div>
    </>
  );
};

export default Courses;
