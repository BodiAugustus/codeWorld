import styles from './section-two.module.css';
import revealSections from '@helpers/reveal-sections';
import Image from 'next/image';
import sectionImage from '../../public/images/aboutimg8.png';

function SectionFive() {
  revealSections();
  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1
    md:grid-cols-2
    2xl:w-[75%] 2xl:mx-auto"
    >
      <div
        className="
      xxxs:pt-3
      md:pt-4 md:px-0
      lg:pt-7 lg:px-10
      xl:pt-8"
      >
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          EASY
          <span className="text-blue-600"> ACCESS</span>
        </h2>
        <p
          className="text-lg mx-auto
        xxxs:w-[90%]
        md:w-[95%] 
        lg:w-[100%]
        xl:w-[90%]
        2xl:w-[90%]"
        >
          Every student and parent gets access to a regularly updated Google
          Classroom that is especially set up for their course. Lecture notes,
          examples, slides, news, games and more are all posted to make sure
          students have everything they need to excel both inside and outside of
          class.
        </p>
        <p
          className="text-lg mx-auto
        xxxs:w-[90%] xxxs:-mb-0
        md:w-[95%] 
        lg:w-[100%]
        xl:w-[90%]
        2xl:w-[90%]"
        >
          The Google Classroom also allows for students to easily communicate
          with their classmates as well as send questions to their instructor to
          recieve help whenever needed.
        </p>
      </div>
      <div
        className={`${styles.wrapper} md:px-5 md:pt-8
      lg:px-0 lg:pt-0
      xl:pt-6`}
      >
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

export default SectionFive;
