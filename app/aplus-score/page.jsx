import { FiCheckCircle } from 'react-icons/fi';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaHandsHelping,
  FaUserFriends,
} from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
const HomePage = () => {
  return (
    <div className="w-[100vw]">
      <header className="bg-blue-500 py-6 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to A+ Pathshala</h1>
        <p className="mt-4 text-lg">Unlock Your Potential with A+ Score</p>
      </header>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            What is the A+ Score?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center">
              <FiCheckCircle className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">
                  Official Individual Student Profile
                </p>
                <p>Provided by A+ Pathshala</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaGraduationCap className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">
                  Equivalent to Engineering Degree
                </p>
                <p>Recognized by global companies</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaHandsHelping className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">First Job Guarantee</p>
                <p>Minimum salary of 12 LPA</p>
              </div>
            </div>
            <div className="flex items-center">
              <IoIosRocket className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">Valued by Top Companies</p>
                <p>Facebook, Amazon, Apple, Netflix, Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="md:container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Evaluation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:px-8 gap-8">
            <div className="flex items-center">
              <FaUserFriends className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">A+ Public Activity</p>
                <p>
                  Encourage students to share their learnings on A+ social
                  handles, provide links to tutorials, projects, and
                  documentation, and highlight their participation in external
                  events.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaLaptopCode className="w-16 h-16 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">Professional/Tech Profile</p>
                <p>
                  Mention the importance of having a strong presence on
                  platforms like GitHub, LinkedIn, Twitter, LeetCode, and
                  Codeforces.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <IoIosRocket className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">Gen-Z Exams</p>
                <p>
                  Describe the relevance of participating and performing well in
                  hackathons, coding contests, and Gen-Z-style exams.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaLaptopCode className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">Open Source Contribution</p>
                <p>
                  Emphasize the value of having pull requests merged in large
                  organizations&apos; codebases.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaHandsHelping className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">Personal/Collaborative Projects</p>
                <p>
                  Highlight the significance of working on real-world projects
                  with a user base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            A+ Pathshala Opportunities
          </h2>
          <table className="w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-blue-500 text-white font-semibold">
                  A+ Score
                </th>
                <th className="py-4 px-6 bg-blue-500 text-white font-semibold">
                  Internship Guarantee
                </th>
                <th className="py-4 px-6 bg-blue-500 text-white font-semibold">
                  Job Guarantee
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-20 font-bold border-b border-black">
                  {'>=100'}
                </td>
                <td className="py-4 px-20 font-bold border-b border-black">
                  Fixed within 3 months
                </td>
                <td className="py-4 px-20 font-bold border-b border-black">
                  -
                </td>
              </tr>
              <tr>
                <td className="py-4 px-20 font-bold border-b border-black">
                  {' '}
                  {'>=175'}
                </td>
                <td className="py-4 px-20 font-bold border-b border-black">
                  -
                </td>
                <td className="py-4 px-20 font-bold border-b border-black">
                  Within 5 months ₹12,00,000/year
                </td>
              </tr>
              <tr>
                <td className="py-4 px-20 font-bold border-b border-black">
                  {' '}
                  {'>=300'}
                </td>
                <td className="py-4 px-20 font-bold border-b border-black">
                  -
                </td>
                <td className="py-4 px-20 font-bold border-b border-black">
                  {' '}
                  Within 5 months ₹24,00,000/year
                </td>
              </tr>
              <tr>
                <td className="py-4 px-20 font-bold border-b border-black">
                  {' '}
                  {'>=400'}
                </td>
                <td className="py-4 px-20 font-bold border-b border-black">
                  -
                </td>
                <td className="py-4 px-20 font-bold border-b border-black">
                  {' '}
                  Job at FAANGM* Company
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-center text-sm">
            *FAANGM Companies (Facebook, Amazon, Apple, Netflix, Google,
            Microsoft)
          </p>
        </div>
      </section>

      {/* <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <p className="font-semibold text-lg">John Doe</p>
              <p className="mt-2">
                "Thanks to A+ Pathshala, I achieved an A+ Score of 400+ and got
                an amazing job offer from Facebook. Highly recommended!"
              </p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <p className="font-semibold text-lg">Jane Smith</p>
              <p className="mt-2">
                "A+ Pathshala helped me improve my skills and boost my career.
                With an A+ Score, I secured an internship at Amazon and never
                looked back."
              </p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <p className="font-semibold text-lg">Michael Johnson</p>
              <p className="mt-2">
                "The A+ Pathshala program is the best investment I made for my
                future. I achieved a high A+ Score and landed a dream job at
                Google. Thank you!"
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Join A+ Pathshala Now</h2>
          <p className="text-lg mb-8">
            Take the first step towards a successful career. Enroll in our
            program and unlock your potential.
          </p>
          <a
            href="/courses/1"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
