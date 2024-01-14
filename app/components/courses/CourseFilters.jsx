'use client';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

const CourseFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_GETALLCOURSES
      );
      const data = await res.json();
      setCategories(data.categories);
    };
    getCourses();
  }, []);

  const handleCategoryClick = (category) => {
    onFilterChange({ category });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ search: debouncedSearchTerm });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <form onSubmit={handleSearchSubmit} type="submit">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="search"
          >
            Search courses
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Categories
          </label>
          <div className="flex flex-wrap -mx-2">
            <Categories
              categories={categories}
              onCategoryClick={handleCategoryClick}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

const Categories = ({ categories, onCategoryClick }) => {
  return categories.map((category, val) => (
    <button
      key={val}
      className="bg-gray-200 m-2 rounded-full py-2 px-4 text-gray-700 font-bold mr-2 mb-2"
      onClick={() => onCategoryClick(category)}
    >
      {category}
    </button>
  ));
};

export default CourseFilter;
