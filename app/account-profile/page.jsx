'use client';
import { useState, useEffect } from 'react';

async function getData() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_PROFILE,
      {
        credentials: 'include',
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    return data.profileInfo;
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw error; // Re-throw for handling elsewhere
  }
}

const Page = () => {
  const [profileInfo, setProfileInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getData();
        setProfileInfo(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch only once

  return (
    // Render content based on loading, error, or profileInfo states
    <>Hi Bro</>
  );
};

export default Page;

//   if (!profileInfo) {
//     return <>No Profile Info Found</>;
//   } else
//     return (
//       <div className="bg-gray-100 min-h-screen">
//         <div className="container mx-auto px-4 py-8">
//           {/* <div className="bg-white shadow-md rounded-md p-4">
//             <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
//             <p>
//               <span className="font-semibold">Name: </span>
//               {profileInfo.name}
//             </p>
//             <p>
//               <span className="font-semibold">Email: </span>
//               {profileInfo.email}
//             </p>
//             <p>
//               <span className="font-semibold">Role: </span>
//               {profileInfo.role}
//             </p>
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold mb-2">Courses</h3>
//               {profileInfo.courses.length > 0 ? (
//                 <table className="table-auto w-full">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2">Course Name</th>
//                       <th className="px-4 py-2">Course Code</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {profileInfo.courses.map((course) => (
//                       <tr key={course._id}>
//                         <td className="border px-4 py-2">{course.name}</td>
//                         <td className="border px-4 py-2">{course.code}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               ) : (
//                 <p>No courses found.</p>
//               )}
//             </div>
//             {/* ... */}
//           {/* </div> */} */
//         </div>
//       </div>
//     );
// };

// export default page;
