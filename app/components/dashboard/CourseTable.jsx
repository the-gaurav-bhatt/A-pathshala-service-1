'use client';
import useSWR, { mutate } from 'swr';
import { FiEdit, FiTrash2, FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
const fetcher = (url, options = {}) =>
  fetch(url, { ...options, credentials: 'include' }).then((res) => res.json());

const CoursesTable = () => {
  const router = useRouter();
  const { data: courses, error } = useSWR(
    process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_GETCOURSE,
    fetcher
  );

  console.log(courses);
  const handleDelete = async (courseId) => {
    // Implement your delete logic here
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_DELETECOURSE
      }/${courseId}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    );

    if (response.ok) {
      console.log('Item deleted successfully');
      mutate(
        `${process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_GETCOURSE}`
      )
        .then(() => console.log('Data revalidated'))
        .catch((err) => console.error('Failed to revalidate data:', err));
    } else {
      const errorData = await response.json();
      console.error('Error:', errorData.message);
    }

    console.log('Deleting course with ID:', courseId);
  };

  const handleEdit = (courseId) => {
    // Implement your edit logic here
    console.log('Editing course with ID:', courseId);
    router.push(`/account-profile/dashboard/${courseId}`);
  };

  if (error)
    return (
      <div className=" font-bold text-lg">You Have No Courses in Your List</div>
    );
  if (!courses) {
    return (
      <div className=" font-bold text-lg flex items-center justify-center">
        You Have No Courses in Your List
      </div>
    );
  } else
    return (
      <>
        <table className="overflow-y-auto h-4/5">
          <thead>
            <tr>
              <th className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                Course
              </th>
              <th className="border-b border-[#eee] py-5 px-4 ">Date</th>
              <th className="border-b border-[#eee] py-5 px-4 ">Description</th>
              <th className="border-b border-[#eee] py-5 px-4 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.length >= 1 &&
              courses?.map((course) => (
                <tr key={course._id}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                    <div className="flex items-center">
                      <img
                        src={course.thumbNail}
                        alt={course.title}
                        className="h-10 w-10 object-cover rounded mr-2"
                      />
                      <div>
                        <h5 className=" font-bold whitespace-nowrap truncate text-black">
                          {course.title}
                        </h5>
                        <p className="text-sm">
                          {course.isFree ? 'Free' : `$${course.price}`}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 ">
                    <p className="text-black text-sm ">{course.createdAt}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 ">
                    <p className="text-black text-sm ">{course.description}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4  flex justify-end items-center space-x-3.5">
                    <button
                      onClick={() => handleEdit(course._id)}
                      className="hover:text-primary text-blue-600"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="hover:text-primary text-red-600"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
};

export default CoursesTable;
