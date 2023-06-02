'use client';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import YouTubeVideo from '../youtubeEmbed/YoutubeVideo';
const CourseContent = () => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  const toggleSection = (sectionId) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter((id) => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

  const isSectionExpanded = (sectionId) => {
    return expandedSections.includes(sectionId);
  };

  return (
    <>
      <h3 className="text-2xl py-2 font-bold">Course Content</h3>
      <div className="flex flex-col border-2">
        {sections.map((section) => (
          <div
            key={section.id}
            className="py-4 bg-blue-50 border-b justify-center items-center ps-4 p-0 md:px-2 rounded-md"
          >
            <div
              className="flex items-center px-4 justify-between cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <h2 className="text-base sm:text-lg font-bold">
                {section.name}: {section.title}
              </h2>
              <svg
                className={`ml-2 md:ml-4 h-4 sm:h-6 w-4 sm:w-6 transform ${
                  isSectionExpanded(section.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isSectionExpanded(section.id) && (
              <div className="flex flex-col mt-2">
                {section.topics.map((video) => (
                  <div key={video.id} className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      className="mx-2 sm:mx-3 h-4 sm:h-5 w-4 sm:w-5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 3.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H3zm-3 1a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.788 5.363a1 1 0 011.035.068l2.5 1.75a1 1 0 010 1.638l-2.5 1.75A1 1 0 016.25 9.75v-3.5a1 1 0 01.538-.887z"
                      ></path>
                    </svg>
                    {showVideo && <YouTubeVideo videoId={'GnodscC2p-A'} />}
                    {video.free ? (
                      <button
                        onClick={() => setShowVideo(!showVideo)}
                        className="text-blue-500 hover:text-blue-700 text-sm sm:text-base"
                      >
                        <span>{video.title}</span>
                      </button>
                    ) : (
                      <div className="flex items-center">
                        <span className="text-sm sm:text-base">
                          {video.title}
                        </span>
                        <img
                          src="/locked.svg"
                          className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-2">
                  <ul className="list-disc list-inside">
                    {section.studyMaterials?.map((material) => (
                      <li key={material.id} className="list-none ps-2">
                        <a href={material.url} className="text-sm sm:text-base">
                          {material.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseContent;
const sections = [
  {
    id: 1,
    name: 'Section 1',
    title: 'All about IT (Information Technology) and Computer Engineering',
    topics: [
      {
        id: 1,
        title: 'Introduction to the field of Computer Science and Technology',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'Different Domains of Computer Engineering (Mobile, Web, Cloud, DevOps, Networking, AI/ML)',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'All about foundational subjects and their importance (O.S, DBMS, C.N, OOPS)',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'Which programming language to choose as a Beginner? (Java, C, C++, Python, JavaScript)',
        free: false,
        url: '',
      },
      {
        id: 5,
        title:
          'How to choose a particular Domain of computer science and technology as a Newbie? (Web, Mobile, DevOps)',
        free: false,
        url: '',
      },
      {
        id: 6,
        title: 'Assignment for Section 1',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 2,
    name: 'Section 2',
    title: 'All about Real World, Companies and the Role of Engineers',
    topics: [
      {
        id: 1,
        title: 'How a company is created?',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'How companies ran previously when there were no Internet vs how it is now?',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'Types of companies: Big Tech Giant (FAANGM) vs Startups',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'Types and stages of startup: Series A funded, Series B funded, IPO',
        free: false,
        url: '',
      },
      {
        id: 5,
        title:
          'Your growth in startup / Risks in startup as an engineer vs in Big Tech Giants',
        free: false,
        url: '',
      },
      {
        id: 6,
        title: 'Service-based company vs product-based company',
        free: false,
        url: '',
      },
      {
        id: 7,
        title: 'All about startup and company culture in Nepal',
        free: false,
        url: '',
      },
      {
        id: 8,
        title: 'Why Nepalese aspire to go to Australia and wash dishes?',
        free: false,
        url: '',
      },
      {
        id: 9,
        title:
          'How can we bring all Big Tech Giant offices to Nepal? Is there a way?',
        free: false,
        url: '',
      },
      {
        id: 10,
        title: 'In the next Section, we will start learning DSA for 4 days',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 3,
    name: 'Section 3, 4, 5',
    title: 'DSA (Data Structures and Algorithms)',
    topics: [
      {
        id: 1,
        title: 'We will learn DSA for the next 3 days',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'Topics: Sorting, Searching, Binary search, time and space complexity',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'We will create LeetCode and GFG accounts and solve 5 easy questions',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'We will learn topics like sorting, searching, binary search, time and space complexity',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 6,
    name: 'Section 6',
    title: 'Ace DSA and Land Your Dream Job at FAANG',
    topics: [
      {
        id: 1,
        title: 'How to succeed in DSA and get hired at FAANG?',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'How to be consistent and connect with like-minded great folks outside Nepal?',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'How much time does it require to learn DSA and crack coding interviews?',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'How to maintain professional social handles like LinkedIn, LeetCode, GFG, and Twitter?',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 7,
    name: 'Section 7',
    title: 'All about CP (Competitive Programming) and hiring through CP',
    topics: [
      {
        id: 1,
        title: 'What is CP and how to get started?',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'What are the coding platforms to make CP public profile?',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'How to succeed in CP and be consistent?',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'What are the companies that hire through CP?',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'What are some of the top coding contests in CP, e.g., ICPC?',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 8,
    name: 'Section 8',
    title: 'All about open-source contribution and web development',
    topics: [
      {
        id: 1,
        title: 'Fundamentals of JavaScript and web development',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'Basics of Git and GitHub (version control system)',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'Let’s contribute to A+ pathshala code and see how hiring happens through open source',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'Doing (1000 project, learning 1000 languages) vs (learning 1 language and 1 tech stack properly)',
        free: false,
        url: '',
      },
      {
        id: 5,
        title:
          'All about good first issues and simple documentation contribution',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 9,
    name: 'Section 9',
    title: 'Hiring process in different companies, how should we prepare?',
    topics: [
      {
        id: 1,
        title: 'All about hiring process in Big-Tech Giants',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'All about hiring process in startups',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'All about hiring process in service-based companies',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'All about salary structure in FAANG vs startups',
        free: false,
        url: '',
      },
      {
        id: 5,
        title:
          'All about base pay + stock stipend + joining bonus + extra expenditure',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 10,
    name: 'Section 10',
    title:
      'Hidden internships and opportunities for IT students that we are not aware of',
    topics: [
      {
        id: 1,
        title:
          'What are some of the remote paid internships provided for all students?',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'We will target GSOC for next year, for that you have to stay connected with A+ pathshala',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'Strategies to target Next GSOC',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 11,
    name: 'Section 11',
    title: 'All about freelancing and contract-based work',
    topics: [
      {
        id: 1,
        title: 'Nepali client vs US client in terms of pay',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'How to create freelancing profile, how to find clients as a freshman',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'What are PRs (Pull Requests)?',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'How to manage PRs?',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'How to create credibility for clients as a newbie?',
        free: false,
        url: '',
      },
      {
        id: 6,
        title: 'All about Replit, Upwork, freelance.com',
        free: false,
        url: '',
      },
      {
        id: 7,
        title:
          'What are the competitive edges for developers to enter into the world of entrepreneurship and startups?',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 12,
    name: 'Section 12',
    title: 'The world of Mobile Development, Flutter, Dart, and more',
    topics: [
      {
        id: 1,
        title: 'Introduction to the field of Mobile Application Development',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'Different tech stacks used for App Development and Popular ones',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'Roadmap to become a mobile App Developer',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'Basics of Flutter',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'Roadmap to become a Flutter Developer',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 13,
    name: 'Section 13',
    title:
      'Let’s Dive into another Domain of Computer Science: Networking and Cyber Security',
    topics: [
      {
        id: 1,
        title: 'What is Networking and Cybersecurity?',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'Prerequisites to become a Cybersecurity expert and excel in this career domain',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'Roadmap to become a Network Engineer, career options, and job roles in the Networking domain',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'Roadmap for Non-IT background students and newbies',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: '10 years of industry experience in 10 minutes',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 14,
    name: 'Section 14',
    title:
      'All about Work Culture and Hiring Process in Nepali Software Companies',
    topics: [
      {
        id: 1,
        title: 'What type of projects do Nepali companies get?',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'What is the hiring process in these companies?',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'What qualifications and skills are required to get hired?',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'Salary range of Nepali software engineers as per experience',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'Why is our education system not enough or not even basic?',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 15,
    name: 'Section 15',
    title: 'What Next?',
    topics: [
      {
        id: 1,
        title:
          'Some of the best practices while learning for beginner, intermediate, and advanced engineers',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'Let’s see how you can shape your career and future via A+ Pathshala',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'How to start working on your A+ score?',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'How to increase your A+ score rapidly?',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'What to do after this Bootcamp?',
        free: false,
        url: '',
      },
    ],
  },
];
// const sections = [
//   {
//     id: 1,
//     name: 'Section 1',
//     title: 'Introduction to Computer Science and Technology',
//     topics: [
//       {
//         id: 1,
//         title: 'Introduction to the field of Computer Science and Technology',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title:
//           'Different domains of computer science e.g mobile,web,cloud,devops,networking,AI/ML',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title:
//           'All about theory and foundational subjects and its importance e.g operating system, DBMS , Computer Networks, OOPS , 1 programming language',
//         free: false,
//         url: '',
//       },
//       {
//         id: 4,
//         title:
//           'Which programming language to choose initially? java/c/c++/python/javascript',
//         free: false,
//         url: '',
//       },
//       {
//         id: 5,
//         title:
//           'How to learn these subjects? Is it necessary initially to be expert at programming?',
//         free: false,
//         url: '',
//       },
//       {
//         id: 6,
//         title:
//           'How to choose a particular Domain of a computer science and technology as a beginner?',
//         free: false,
//         url: '',
//       },
//       {
//         id: 7,
//         title: 'Assignment for lecture 1',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Section 2',
//     title: 'How a Company is Created',
//     topics: [
//       {
//         id: 1,
//         title:
//           'How a company ran previously when there were no internet and how it is now?',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'Types of company e.g Big tech Giant vs startups',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title:
//           'Types and stages of startup e.g series A funded, series B funded, IPO',
//         free: false,
//         url: '',
//       },
//       {
//         id: 4,
//         title:
//           'Your growth in startup / risks in startup as an engineer vs in Big tech giants',
//         free: false,
//         url: '',
//       },
//       {
//         id: 5,
//         title: 'Service based company vs product based company',
//         free: false,
//         url: '',
//       },
//       {
//         id: 6,
//         title: 'All about startup and company culture in Nepal',
//         free: false,
//         url: '',
//       },
//       {
//         id: 7,
//         title:
//           'Why Nepalese aspire to go to Australia and wash dishes? why Nepal is one of the poorest countries? Is it only because of politics? Is there a way that we can change the culture of Nepali going to Australia not to wash dishes and earn 1 lakh a month instead going to Australia to do engineering and earn 10 lakh a month?',
//         free: false,
//         url: '',
//       },
//       {
//         id: 8,
//         title:
//           "Or even How can we bring all Big Tech Giant offices in Nepal, is there a way? Yes… That’s you, the country's economy is dependent on you",
//         free: false,
//         url: '',
//       },
//       {
//         id: 9,
//         title:
//           'Before Learning hiring process and skill required to be a global engineer let’s basics of DSA',
//         free: false,
//         url: '',
//       },
//       {
//         id: 10,
//         title: 'In the next lecture, we will start learning DSA for 4 days',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Section 3',
//     title: 'DSA - Dilli Raj Timalsina',
//     topics: [
//       {
//         id: 1,
//         title: 'We will learn DSA for Next 3 days',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title:
//           'Topics: Sorting, Searching, Binary search, time and space complexity',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title:
//           'We will create leetcode and gfg account and will solve 5 easy questions',
//         free: false,
//         url: '',
//       },
//       {
//         id: 4,
//         title:
//           'We will learn topics like sorting, searching, binary search, time and space complexity',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: 'Section 4',
//     title: 'How to Succeed in DSA - Prince Singh',
//     topics: [
//       {
//         id: 1,
//         title: 'How to succeed in DSA',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title:
//           'How to be consistent and connect with like-minded great folks from outside Nepal',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title:
//           'How much time it requires to learn DSA and crack coding interviews',
//         free: false,
//         url: '',
//       },
//       {
//         id: 4,
//         title: 'How to maintain LinkedIn, LeetCode, and GFG',
//         free: false,
//         url: '',
//       },
//       {
//         id: 5,
//         title: 'Prince impact on Indian DSA culture, some of the tweet reply',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: 'Section 5',
//     title: 'All about Competitive Programming - Ayushman Khan',
//     topics: [
//       {
//         id: 1,
//         title:
//           'All about competitive programming – getting started with competitive programming',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'How to maintain CP profile',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: 'Section 6',
//     title:
//       'Basics of JavaScript and Open Source Contribution - Dilli Raj Timalsina',
//     topics: [
//       {
//         id: 1,
//         title:
//           'Here we will learn basics of JavaScript and start contributing to the backend of A+ Pathshala service 1',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'Basics of Git and GitHub (version control system)',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title:
//           'Development: 2 types - i) doing 1000 projects and learning 1000 languages, ii) learning the basic fundamental tech stack and contributing to a large codebase which is actually a profitable company and has a huge user base, let’s say more than 100k+ users',
//         free: false,
//         url: '',
//       },
//       {
//         id: 4,
//         title: 'All about the open-source world and open-source contribution',
//         free: false,
//         url: '',
//       },
//       {
//         id: 5,
//         title:
//           'Our first open-source contribution: contributing to A+ Pathshala backend service, i.e., we will add email service functionality in A+ Pathshala',
//         free: false,
//         url: '',
//       },
//       {
//         id: 6,
//         title: 'All about good first issues',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: 'Section 7',
//     title: 'Hiring Process and Salary Structure - Dilli Raj Timalsina',
//     topics: [
//       {
//         id: 1,
//         title: 'All about the hiring process in Big Tech Giants',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'All about the hiring process in startups',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title: 'All about the hiring process in service-based companies',
//         free: false,
//         url: '',
//       },
//       {
//         id: 4,
//         title: 'All about Salary structure in FAANG vs startup',
//         free: false,
//         url: '',
//       },
//       {
//         id: 5,
//         title:
//           'All about base pay + stock stipend + joining bonus + extra expenditure',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: 'Section 8',
//     title: 'Global Opportunities and GSOC - Dilli Raj Timalsina',
//     topics: [
//       {
//         id: 1,
//         title: 'All about global opportunities: ',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title:
//           'We will target GSOC for next year, for that you have to stay connected with A+ Pathshala',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title: 'Strategies to target for Next GSOC',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: 'Section 9',
//     title: 'Freelancing and Contract-based Work - Biplop Karki',
//     topics: [
//       {
//         id: 1,
//         title: 'All about freelancing and contract-based work',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'Nepali client vs US client in terms of pay',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title:
//           'How to create a freelancing profile, how to find clients as a freshman',
//         free: false,
//         url: '',
//       },
//       {
//         id: 4,
//         title: 'What are PRs',
//         free: false,
//         url: '',
//       },
//       {
//         id: 5,
//         title: 'How to manage PRs',
//         free: false,
//         url: '',
//       },
//       {
//         id: 6,
//         title: 'How to create credibility for clients as a newbie',
//         free: false,
//         url: '',
//       },
//       {
//         id: 7,
//         title: 'All about Replit, Upwork, and Freelance.com',
//         free: false,
//         url: '',
//       },
//       {
//         id: 8,
//         title:
//           'You will get a chance to interview with the founder of Freelance.com',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: 'Section 10',
//     title: 'From Nepal to Google - Avishkar Jang Gurung',
//     topics: [
//       {
//         id: 1,
//         title: 'His life journey',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'Challenges faced as a Nepali',
//         free: false,
//         url: '',
//       },
//       {
//         id: 3,
//         title: 'His experience of being a part of Google, California',
//         free: false,
//         url: '',
//       },
//       {
//         id: 4,
//         title:
//           'His life journey: being a part of MI7 Solutions and founding of CloudFactory',
//         free: false,
//         url: '',
//       },
//       {
//         id: 5,
//         title: 'Advice for Nepali engineers to reach Google',
//         free: false,
//         url: '',
//       },
//       {
//         id: 6,
//         title: 'Words for future aspiring engineers',
//         free: false,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 11,
//     name: 'Section 11',
//     title: 'Software Companies in Nepal - Bishworaj Poudel',
//     topics: [
//       {
//         id: 1,
//         title: 'All about software companies in Nepal',
//         free: true,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'Hiring in companies like esewa, khalti, and all',
//         free: true,
//         url: '',
//       },
//       {
//         id: 3,
//         title:
//           'Salary of software engineer in Nepal for experienced and for fresher',
//         free: true,
//         url: '',
//       },
//       {
//         id: 4,
//         title: 'Internship stipend in Nepal',
//         free: true,
//         url: '',
//       },
//       {
//         id: 5,
//         title: 'All about Application Development',
//         free: true,
//         url: '',
//       },
//       {
//         id: 6,
//         title: 'Basics of Flutter',
//         free: true,
//         url: '',
//       },
//       {
//         id: 7,
//         title: 'Roadmap to become a Flutter developer',
//         free: true,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 12,
//     name: 'Section 12',
//     title: 'Cyber Security and Networking - Jiwan Bhattrai',
//     topics: [
//       {
//         id: 1,
//         title: 'All about cyber security',
//         free: true,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'All about ethical hacking',
//         free: true,
//         url: '',
//       },
//       {
//         id: 3,
//         title: 'All about Networking',
//         free: true,
//         url: '',
//       },
//       {
//         id: 4,
//         title: 'Roadmap to become Networking experts',
//         free: true,
//         url: '',
//       },
//       {
//         id: 5,
//         title: 'Career option as a Network Engineer',
//         free: true,
//         url: '',
//       },
//       {
//         id: 6,
//         title: 'Some basic fundamentals of Networking',
//         free: true,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 13,
//     name: 'Section 13',
//     title: 'Company Culture and Education System - Nishant Phuyal',
//     topics: [
//       {
//         id: 1,
//         title: 'Nishant Phuyal: Founder and CEO of XYZ company in Nepal',
//         free: true,
//         url: '',
//       },
//       {
//         id: 2,
//         title:
//           'All about company culture, salary, and types of projects in Nepal',
//         free: true,
//         url: '',
//       },
//       {
//         id: 3,
//         title: 'All about our education system',
//         free: true,
//         url: '',
//       },
//       {
//         id: 4,
//         title: 'How our education system alone is not enough',
//         free: true,
//         url: '',
//       },
//     ],
//   },
//   {
//     id: 14,
//     name: 'Section 14',
//     title: 'Shaping Your Career and A+ Pathshala - Whole A+ Team',
//     topics: [],
//   },
// ];
