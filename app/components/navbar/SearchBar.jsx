'use client';
// import { useRouter,Link } from 'next/navigation';
import Link from 'next/link';
import { useState, React } from 'react';
const getCourseName = async (query) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND +
      process.env.NEXT_PUBLIC_QUERY +
      `?query=${query}`
  );
  const data = await res.json();
  return data;
};
const SearchBar = () => {
  const [showModel, setShowModel] = useState(false);

  const [result, setResult] = useState([{}]);
  // const router = useRouter();
  // const handleSearch = (_id) => {
  //   router.push(`/courses/${_id}`);
  // };
  const handleInputChange = async (event) => {
    const result = await getCourseName(event.target.value);
    setResult(result);
    if (event.target.value.length === 0) {
      setShowModel(false);
    } else setShowModel(true);
  };

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <img
          src="/search.svg"
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
      <input
        type="text"
        className="block w-full relative pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 sm:text-sm"
        placeholder="Search..."
        onClick={() => setShowModel(!showModel)}
        onChange={handleInputChange}
        list="options"
        // onSubmit={}
      />
      {result.length >= 1 && (
        <div
          className={`absolute top-full  dropdown-content dropdown-start   ${
            showModel ? 'block' : 'hidden'
          } rounded-sm  w-full h-fit shadow-lg  z-50 bg-white  overflow-y-auto`}
        >
          <ul className="drop-shadow-sm max-h-96 overflow-y-auto">
            {result.slice(0, 10).map((result, index) => (
              <li
                key={index}
                onClick={() => {
                  setShowModel(false);
                }}
                className="hover:bg-gray-200 hover:text-gray-950 cursor-pointer pl-4 py-1 text-sm text-gray-700 "
              >
                <Link href={`/courses/${result._id}`}>{result.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
