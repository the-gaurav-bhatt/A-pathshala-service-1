import Checkout from '@/app/components/courseConsume/Checkout';
import CourseContent from '@/app/components/courseConsume/CourseContent';
import CourseHeader from '@/app/components/courseConsume/CourseHeader';
import CourseReview from '@/app/components/courseConsume/CourseReview';
// import CourseTeachers from '@/app/components/courseConsume/CourseTeachers';
import CourseTeachers from '@/app/components/courseConsume/CourseTeacher1';
import CourseBenefits from '@/app/components/courseConsume/CourseBenefits';
import { Inter } from 'next/font/google';
// import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });

const getCourse = async (id) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND +
      process.env.NEXT_PUBLIC_COURSEMETA +
      `?_id=${id}`
  );
  const data = await res.json();
  return data;
};
async function CourseDetail({ params }) {
  console.log('Going to fetch Course Detail');
  const data = await getCourse(params.id);
  console.log(data);
  return (
    <div className={` grid grid-cols-3 lg:w-3/4 `}>
      <div className="lg:ms-8 relative pb-8 col-span-3 px-4 sm:px-6 lg:px-8">
        <CourseHeader title={data?.title} />

        <div className="flex">
          <div className="pr-4 p-4 shadow-md rounded-md shadow-sky-300 border-2 border-solid border-sky-100">
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <div className="my-4 " id="description">
              <div className="">
                <div className="h-screen">
                  <img
                    className=" object-fill w-full rounded-xl shadow-md mb-2 shadow-stone-400 h-1/2"
                    src={
                      `https://source.unsplash.com/random/?tech` ||
                      data?.thumbNail
                    }
                  />
                  <p className={inter.className + ' overflow-clip'}>
                    {data?.description}
                  </p>
                </div>
                <CourseContent sections={data.content} />
              </div>
              <div className=" w-screen  md:w-full">
                <Checkout
                  url={data?.content[0]?.videoTitles[0]?.url}
                  teacher={data?.tutor.name}
                  price={data?.price}
                  name={data?.title}
                  rating={4.5}
                />
              </div>
            </div>
            <div className="my-4" id="benefits">
              <CourseBenefits course={course} />
            </div>
            <CourseReview course={course} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* <Checkout course={course} /> */}
      </div>
    </div>
  );
}

export default CourseDetail;
const course = {
  title: 'Kickstart Your Journey on Tech with a 15-Day Bootcamp',
  rating: '',
  teachers: [
    'Dilli Raj Timalsina',
    'Prince Singh',
    'Ayushman Khan',
    'Bishworaj Poudel',
    'Jiwan Bhattrai',
    'Nishant Phuyal',
    'Whole A+ Team',
  ],
  image: '/a.png',
  benefits: [
    'Gain a solid foundation in computer science and technology',
    'Explore different domains and career options within the field',
    'Learn theory and foundational subjects essential for success',
    'Choose the right programming language to start with',
    'Understand the process of company creation and operation',
    'Discover the differences between big tech giants and startups',
    'Learn about software development and contribute to real projects',
    'Explore competitive programming and improve coding skills',
    'Master JavaScript basics and backend development',
    'Contribute to open-source projects and build your portfolio',
    'Gain insights into hiring processes and salary structures',
    'Explore global opportunities and internships',
    'Learn about freelancing and contract-based work',
    'Discover networking and cybersecurity concepts',
    'Understand the software industry in Nepal and its opportunities',
    'Get valuable advice from industry professionals',
    'Learn about the A+ Pathshala and its career-shaping opportunities',
    'And much more!',
  ],
  reviews: [
    {
      id: 1,
      userName: 'Jane Doe',
      userAvatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      date: 'May 1, 2022',
      comment:
        'This course was a great introduction to web development. The instructor was knowledgeable and provided clear explanations. I would recommend this course to anyone who is interested in learning web development.',
    },
    {
      id: 2,
      userName: 'John Smith',
      userAvatar: 'https://randomuser.me/api/portraits/men/9.jpg',
      date: 'May 5, 2022',
      comment:
        'I found this course to be very helpful in learning the basics of web development. The syllabus was well-structured and easy to follow. I particularly enjoyed the sections on React and Vue. Highly recommend!',
    },
    {
      id: 3,
      userName: 'Sarah Johnson',
      userAvatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      date: 'May 10, 2022',
      comment:
        'I really enjoyed this course and learned a lot. The instructor was engaging and the content was well-organized. I appreciated the emphasis on responsive web design and the use of frameworks like React and Vue. Would definitely recommend!',
    },
  ],
  price: '650',
  duration: '15 days',
  level: 'Beginner',
};
