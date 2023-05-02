import Link from 'next/link';
import Image from 'next/image';
const PopularTeacherCard = ({ teacher }) => {
  console.log(teacher.image);
  return (
    <Link className="max-w-sm  group" href={'/teachers'}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-300">
        <div className="flex justify-around  items-center">
          <img
            src={teacher.image}
            alt={`Photo of ${teacher.name}`}
            className="rounded-full"
          />
          <div className="flex gap-1">
            <p className="text-yellow-500 text-3xl top-2 font-bold">
              {teacher.rating.toFixed(1)}
            </p>
            <Image
              src={'/star.svg'}
              alt={teacher.name}
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="py-4 px-6">
          <h2 className="text-2xl font-bold mb-2">{teacher.name}</h2>
          <p className="text-gray-600 text-sm line-clamp-4 mb-4">
            {teacher.bio}
          </p>
          <div className="flex justify-between items-center">
            <Link
              href={`/teachers/${teacher.id}`}
              className="bg-yellow-400 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularTeacherCard;
