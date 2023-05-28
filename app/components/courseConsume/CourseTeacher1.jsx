import React from 'react';
import Link from 'next/link';
const CourseTeachers = () => {
  const team = [
    {
      name: 'Prince Singh',
      position: "India's top 1 Rank in Leetcode ",

      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/prince-singh-314a65187/',
        },
      ],
      image: '/prince.jpg',
    },
    {
      name: 'Jiwan Bhattarai',
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
      image: '/jiwan.jpg',
    },
    {
      name: 'Nishant Phuyal',
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/nishant-phuyal/',
        },
      ],
      position: 'Co-Founder and CEO',
      company: 'ReflexIT Solution',
      qualifications: ['Software Engineer', 'Project Manager'],
      image: '/Nishant.jpg',
    },
    {
      name: 'Bishworaj Poudel',
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/bishworajpoudelofficial/',
        },
      ],
      position: 'Mobile App Developer',
      qualifications: ['Flutter Developer', 'YouTuber (260k+ subs)'],
      image: '/bishworaj.jpg',
    },
    {
      name: 'Biplop Karki',
      socialMedia: [
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/biplabk123/',
        },
      ],
      position: 'Freelance Developer | CTO at ClampHook',
      qualifications: ['Entrepreneur', 'CTO at ClampHook', 'CEO at Hyperse'],
      image: '/Biplop.jpeg',
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
      qualifications: ['Open Source Enthusiast', 'Target GSOC-2024'],
      image: '',
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
          Our Teachers
        </h2>
        <p className="mt-1 text-gray-600 ">Creative people</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200"
          >
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src={member.image}
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-bold  text-gray-800 ">{member.name}</h3>
                <p className="text-xs uppercase text-gray-500">{member.tag}</p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">{member.position}</p>

            <div className="mt-3 rounded-full space-x-1">
              {member.socialMedia.map((social, index) => (
                <Link
                  key={index}
                  className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm "
                  href={social.url}
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
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTeachers;
