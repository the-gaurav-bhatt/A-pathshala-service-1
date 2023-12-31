import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });
const CourseTeachers = () => {
  const team = [
    {
      name: 'Jiwan Bhattarai',
      intro:
        'He is an experienced network security engineer with 14+ years of industry experience and expertise in various certifications such as CCIE #60261, CCNA, CCNP Security, CEH, Cisco FTD, ISE, ASA, and SD-WAN. He excels in ensuring secure network infrastructures.',
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/jiwanbhattarai/',
        },
      ],
      position: 'Sr. Network Security Engineer',
      qualifications: [
        'CCIE #60261',
        'CCNA',
        'CCNP Security',
        'CEH',
        'Cisco FTD',
        'ISE',
        'ASA',
        'SD-WAN',
      ],
      image: '/profiles/jiwan.jpeg',
    },
    {
      name: 'Nishant Phuyal',
      intro:
        ' He is a dynamic entrepreneur leading ReflexIT Solution as its CEO. With a background in software engineering and project management, Nishant brings a wealth of experience to the table. ',
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/nishant-phuyal/',
        },
      ],
      position: 'Co-Founder and CEO',
      company: 'ReflexIT Solution',
      qualifications: ['Software Engineer', 'Project Manager'],
      image: '/profiles/nishant.jpeg',
    },
    {
      name: 'Bishworaj Poudel',
      intro:
        ' Bishworaj Poudel is a skilled mobile app developer, specializing in Flutter development. He is also a popular YouTuber with over 260k subscribers.',
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/bishworajpoudelofficial/',
        },
      ],
      position: 'Youtuber | Mobile App Developer',
      qualifications: ['Flutter Developer', 'YouTuber (260k+ subs)'],
      image: '/profiles/bishworaj.jpeg',
    },
    {
      name: 'Prince Singh',
      position: "India's top 1 Rank at Coding Ninjas ",
      intro:
        'Introducing Prince Singh, a coding prodigy with Institute Rank 1 and Global Rank 111 at Gfg. He also holds All India Rank 1 at Coding Ninjas and Global Rank 13 at Interview Bit, showcasing his exceptional skills and expertise in programming and problem-solving.',

      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/prince-singh-314a65187/',
        },
      ],
      image: '/profiles/prince.jpeg',
    },
    {
      name: 'Biplop Karki',
      intro:
        'Biplop Karki is a versatile freelance developer and serves as the CTO at ClampHook. He has a strong entrepreneurial spirit and holds positions as the CEO at Hyperse.',
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/biplabk123/',
        },
      ],
      position: 'Freelance Developer | CTO at ClampHook',
      qualifications: ['Entrepreneur', 'CTO at ClampHook', 'CEO at Hyperse'],
      image: '/profiles/biplop.jpeg',
    },
    {
      name: 'Dilli Raj Timalsina',
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/dilli-raj-timalsina/',
        },
      ],
      position: 'Co-founder and CTO',
      company: 'A+ Pathshala',
      intro:
        ' Dilli Raj Timalsina is a co-founder and the CTO of A+ Pathshala. He is an open-source enthusiast and has set his sights on participating in the Google Summer of Code (GSOC) in 2024.',
      qualifications: ['Open Source Enthusiast', 'Target GSOC-2024'],
      image: '/profiles/dilli.png',
    },
  ];

  // return (
  //   <div className=" px-4 bg-pink-100 rounded-md py-10 sm:px-6 lg:px-8 mx-auto">
  //     <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
  //       <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
  //         Teachers For This Bootcamp
  //       </h2>
  //     </div>

  //     <div className="grid grid-cols-1 sm:grid-cols-3  gap-6">
  //       {team.map((member) => (
  //         <div
  //           key={member.name}
  //           className="flex flex-col overflow-hidden h-60 bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row"
  //         >
  //           {/*  <!-- Image --> */}
  //           <figure className="flex-1">
  //             <img
  //               src={member.image}
  //               alt="card image"
  //               className="object-cover min-h-full aspect-auto"
  //             />
  //           </figure>
  //           {/*  <!-- Body--> */}
  //           <div className="flex-1 p-6 sm:mx-6 sm:px-0">
  //             <header className="flex gap-4 mb-4">
  //               <div>
  //                 <h3 className="text-xl font-medium text-slate-700">
  //                   {member.name}
  //                 </h3>
  //                 <p className="text-sm line-clamp-2 text-slate-400">
  //                   {member.position}
  //                 </p>
  //               </div>
  //             </header>
  //             <p className=" leading-4 text-xs ">{member.intro}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div
      className={`${inter.className} max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto`}
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">
          Our Teachers
        </h2>
        {/* <p className="mt-1 text-gray-600">Creative people</p> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col rounded-xl p-4 md:p-3 bg-white border border-gray-200"
          >
            <div className="flex items-center gap-x-4">
              <Image
                width={100}
                height={100}
                className="rounded-full w-24 h-24"
                src={member.image}
                alt={`${member.name} profile picture`}
              />
              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 text-lg">
                  {member.name}
                </h3>
                <p className="text-xs uppercase text-gray-500">{member.tag}</p>
              </div>
            </div>

            <p className="mt-3  font-semibold text-gray-700">
              {member.position}
            </p>
            <p className={`${inter.className} text-sm  text-gray-800`}>
              {member.intro}
            </p>

            <div className="mt-3 space-x-1">
              {member.socialMedia.map((social, index) => (
                <a
                  key={index}
                  className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm transition duration-300 ease-in-out"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#89CFF0"
                    version="1.1"
                    viewBox="0 0 455 455"
                    className="rounded-full w-7 h-7"
                  >
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path d="M246.4 204.35v-.665c-.136.223-.324.446-.442.665h.442z"></path>
                      <path d="M0 0v455h455V0H0zm141.522 378.002H74.016V174.906h67.506v203.096zm-33.753-230.816h-.446C84.678 147.186 70 131.585 70 112.085c0-19.928 15.107-35.087 38.211-35.087 23.109 0 37.31 15.159 37.752 35.087 0 19.5-14.643 35.101-38.194 35.101zM385 378.002h-67.524V269.345c0-27.291-9.756-45.92-34.195-45.92-18.664 0-29.755 12.543-34.641 24.693-1.776 4.34-2.24 10.373-2.24 16.459v113.426h-67.537s.905-184.043 0-203.096H246.4v28.779c8.973-13.807 24.986-33.547 60.856-33.547 44.437 0 77.744 29.02 77.744 91.398v116.465z"></path>
                    </g>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTeachers;
