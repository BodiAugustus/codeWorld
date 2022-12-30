import styles from './section-four.module.css';
import revealSections from '@helpers/reveal-sections';
import sectionImage from '../../public/images/aboutimg7.jpg';
import Image from 'next/image';

function SectionTen() {
  revealSections();
  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1
    md:grid-cols-2 md:w-[120%]
    lg:w-[100%]
    2xl:w-[75%] 2xl:mx-auto"
    >
      <div className={styles.wrapper}>
        <figure
          className="
          xxxs:hidden
          md:block  md:mx-10 md:mt-5
          "
        >
          <Image
            className="rounded-lg"
            src={sectionImage}
            alt="Code World student and teacher"
          />
        </figure>
      </div>
      <div
        className="text-center
      md:pt-10 md:px-0
      lg:pt-16 lg:px-10 
      xl:pt-24
      2xl:pt-20"
      >
        <h2
          className="font-poppins font-extrabold 
        xxxs:-mt-14
        md:mt-4 tracking-tight
      xl:-mt-5"
        >
          <span className="text-blue-600">SIMILAR</span> AGE RANGES
        </h2>
        <p
          className="mx-auto text-lg
        xxxs:w-[85%]
        md:w-[70%]
        lg:w-[90%]
        xl:w-[70%]
        2xl:w-[90%] "
        >
          Each of our classes are taught in one of two age groups. We have one
          set of courses for ages nine to twelve and another set of courses for
          ages thirteen to sixteen.
        </p>
        <p
          className="mx-auto text-lg
        xxxs:w-[85%]
        md:w-[70%]
        lg:w-[90%]
        xl:w-[70%]
        2xl:w-[90%] "
        >
          Every course meets two times per week for seventy-five minutes each
          session. There is an optional thirty minutes available after class for
          the teacher to answer any extra questions or assist with student
          projects.
        </p>
        <figure
          className="xxxs:block xxxs:min-w-[90%] xxxs:mx-4 xxxs:mb-6
        md:hidden"
        >
          <Image
            className="rounded-lg"
            src={sectionImage}
            alt="Code World student and teacher"
          />
        </figure>
      </div>
    </div>
  );
}

export default SectionTen;
