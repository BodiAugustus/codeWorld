import styles from './section-two.module.css';
import revealSections from '@helpers/reveal-sections';
import Image from 'next/image';
import sectionImage from '../../public/images/aboutimg1.jpg';

function SectionTwo() {
  revealSections();
  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1
    md:grid-cols-2"
    >
      <div
        className="
      xxxs:pt-8
      md:pt-4 md:px-0 md:mb-10
      lg:pt-2 lg:px-10 lg:mb-0
      xl:pt-10 "
      >
        <h2
          className="font-poppins font-extrabold mt-4 tracking-tight
          xs:w-[95%]
        xxxs:text-3xl
        md:text-4xl"
        >
          KIDS HAVE <span className="text-blue-600"> FUN,</span> PARENTS SEE
          RESULTS
        </h2>
        <p
          className="w-[80%] mx-auto text-lg
        lg:w-[90%]
        xl:w-[80%]"
        >
          At our learning center, kids learn to code while building their own
          projects. They gain problem solving, critical thinking, and STEM
          skills in a fun, safe, and inspiring environment.
        </p>
        <p
          className="w-[80%] mx-auto text-lg
        xxxs:-mb-1
        lg:w-[90%]
        xl:w-[80%]"
        >
          Far from being just another boring class, our lessons keep students
          constantly active and engaged so that they can both learn and have fun
          at the same time!
        </p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <figure>
            <Image
              className="rounded-lg"
              src={sectionImage}
              alt="Code World students"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
