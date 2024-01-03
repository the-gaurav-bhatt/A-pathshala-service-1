'use client';
// pages/courses.js
import useSWR from 'swr';
import CreateNewCourse from '@/app/components/sections/CreateNewCourse';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = ({ params }) => {
  const _id = params.id;
  console.log(_id);
  const { data: courses, error } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND +
      process.env.NEXT_PUBLIC_COURSE +
      `?courseId=${_id}`,
    fetcher
  );
  console.log(courses);
  return (
    <>
      <CreateNewCourse givenCourse={courses} />
    </>
  );
};

export default Page;
