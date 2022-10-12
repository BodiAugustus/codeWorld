import Image from 'next/image';
import { GiLaptop, GiTeacher } from 'react-icons/gi';
import sectionPic from '../../public/images/cw1.png';
import styles from './section-three.module.css';
function SectionTwo() {
  return (
    <div
      className=" grid mx-10 
     xxxs::grid-cols-1 xxxs:h-[95vh]
     xxs:-mt-5 xxs:h-[105vh]
     xs:-mt-14 xs:h-[100vh]
     md:grid-cols-[1fr_2fr_1fr] md:mb-10 md:h-[42vh]
     "
    >
      <GiLaptop
        className="mx-auto mt-auto fill-blue-600
        text-[14rem] "
      />
      <div
        className="text-center px-3 font-poppins
        xxxs:pt-4
      md:pt-16"
      >
        <h2
          className="font-extrabold tracking-tight
        xxxs:text-2xl
        md:text-4xl"
        >
          <span className="text-blue-600">LEARN</span> TO{' '}
          <span className="text-emerald-500">CODE!</span>
        </h2>
        <p
          className="text-lg  text-center mx-auto
          xxxs:mb-1
          xs:-mb-10

        md:w-[80%] md:mb-0"
        >
          At our digital learning center, kids learn to code in a fun, safe, and
          inspiring environment, with a project-based curriculum that they love.
          Parents love it too, because their kids make real progress and gain
          valuable skills while having a great time. Everyone wins at Code
          World!
        </p>
      </div>
      <GiTeacher
        className="text-[14rem] mx-auto  fill-emerald-500
        
        "
      />
    </div>
  );
}

export default SectionTwo;
