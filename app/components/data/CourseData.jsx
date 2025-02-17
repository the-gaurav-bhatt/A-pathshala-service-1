// import dummyData from './DummyData';
// const getData = () => {
//   const data = dummyData.map((data) => data.courses).flat();
//   console.log(data);
//   return data;
// };
// const CourseData = getData();
// export default CourseData;
// const CATEGORIES = [
//   'Business',
//   'Technology',
//   'Creative Arts',
//   'Health and Wellness',
//   'Personal Development',
// ];
'use client';

import axios from 'axios';

const getCourses = async () => {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_GETALLCOURSES
  );
  return res;
};

export async function CourseData() {
  console.log('The Categories are:');
  const data = await getCourses();
  const CATEGORIES = data.categories;
  const x = data.courses;
  console.log(x);
  return x;
}

// const xdata = [
//   {
//     id: 1,
//     title: 'Shakespearean Tragedies',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 149,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/shakespearean-tragedies',
//     rating: 4.5,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 2,
//     title: 'Victorian Literature',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 149,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/victorian-literature',
//     rating: 4.2,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 3,
//     title: 'American Literature',
//     level: 'Advanced',
//     duration: '12 weeks',
//     price: 249,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/american-literature',
//     rating: 4.8,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 1,
//     title: 'World War II',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 199,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/world-war-ii',
//     rating: 4.6,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 2,
//     title: 'Ancient Civilizations',
//     level: 'Advanced',
//     duration: '12 weeks',
//     price: 299,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/ancient-civilizations',
//     rating: 4.9,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 3,
//     title: 'Renaissance Art',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 149,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/renaissance-art',
//     rating: 4.4,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 1,
//     title: 'Genetics',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 149,
//     category: CATEGORIES[4],
//   },
//   {
//     id: 1,
//     title: 'Healthy Eating Habits',
//     level: 'Beginner',
//     duration: '4 weeks',
//     price: 49.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/healthy-eating-habits',
//     rating: 4.7,
//     category: CATEGORIES[3],
//   },
//   {
//     id: 2,
//     title: 'Sports Nutrition',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 89.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/sports-nutrition',
//     rating: 4.9,
//     category: CATEGORIES[3],
//   },
//   {
//     id: 1,
//     title: 'Web Development with React',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 149.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/web-development-react',
//     rating: 4.5,
//     category: CATEGORIES[1],
//   },
//   {
//     id: 2,
//     title: 'Full Stack Development with Node.js',
//     level: 'Advanced',
//     duration: '12 weeks',
//     price: 249.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/full-stack-development-nodejs',
//     rating: 4.8,
//     category: CATEGORIES[1],
//   },
//   {
//     id: 1,
//     title: 'Creative Writing',
//     level: 'Beginner',
//     duration: '4 weeks',
//     price: 49.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/creative-writing',
//     rating: 4.2,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 2,
//     title: 'Digital Photography',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 99.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/digital-photography',
//     rating: 4.6,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 3,
//     title: 'Graphic Design Fundamentals',
//     level: 'Beginner',
//     duration: '4 weeks',
//     price: 49.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/graphic-design-fundamentals',
//     rating: 4.3,
//     category: CATEGORIES[2],
//   },
//   {
//     id: 1,
//     title: 'Introduction to Meditation',
//     level: 'Beginner',
//     duration: '4 weeks',
//     price: 49.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/introduction-meditation',
//     rating: 4.7,
//     category: CATEGORIES[3],
//   },
//   {
//     id: 2,
//     title: 'Yoga for Beginners',
//     level: 'Beginner',
//     duration: '4 weeks',
//     price: 49.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/yoga-for-beginners',
//     rating: 4.9,
//     category: CATEGORIES[3],
//   },
//   {
//     id: 1,
//     title: 'Public Speaking Mastery',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     price: 149.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/public-speaking-mastery',
//     rating: 4.4,
//     category: CATEGORIES[4],
//   },
//   {
//     id: 2,
//     title: 'Time Management and Productivity',
//     level: 'Beginner',
//     duration: '4 weeks',
//     price: 49.99,
//     image: 'https://placeimg.com/290/190/tech',
//     url: 'https://example.com/time-management-productivity',
//     rating: 4.7,
//     category: CATEGORIES[4],
//   },
// ];
export default CourseData;
