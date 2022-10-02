import Image from 'next/image';
import { GiLaptop, GiTeacher } from 'react-icons/gi';

function SectionTwo() {
  return (
    <div className=" grid grid-cols-[1fr_2fr_1fr] mx-10 mb-10">
      <GiLaptop className="text-[14rem] mx-auto mt-auto fill-blue-600" />
      <div className="text-center px-3 pt-16 font-poppins">
        <h2 className="font-extrabold tracking-tight">
          <span className="text-blue-600">LEARN</span> TO{' '}
          <span className="text-emerald-500">CODE!</span>
        </h2>
        <p className="text-lg w-[80%] text-center mx-auto">
          At our digital learning center, kids learn to code in a fun, safe, and
          inspiring environment, with a project-based curriculum that they love.
          Parents love it too, because their kids make real progress and gain
          valuable skills while having a great time. Everyone wins at Code
          World!
        </p>
      </div>
      <GiTeacher className="text-[14rem] mx-auto mt-auto fill-emerald-500" />
    </div>
  );
}

export default SectionTwo;
