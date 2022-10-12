import styles from './section-four.module.css';
import revealSections from '@helpers/reveal-sections';
import Image from 'next/image';
import sectionImage from '../../public/images/aboutimg2.webp';

function SectionFour() {
  revealSections();
  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1
    md:grid-cols-2
    md:w-[120%] lg:w-[100%]
    xl:w-[100%]"
    >
      <div className={`${styles.wrapper} `}>
        <figure
          className="xxxs:hidden 
        md:block md:mt-12 md:ml-5
        lg:mt-10
        "
        >
          <Image
            className="rounded-lg "
            src={sectionImage}
            alt="Code World students"
          />
        </figure>
      </div>
      <div
        className="
      xxxs:px-2 xxxs:-mt-10
      md:pt-16 md:px-0 md:-mt-0
      lg:px-0 lg:pt-14
      xl:px-10 xl:pt-24"
      >
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          CODING IS THE NEW <span className="text-blue-600">LITERACY</span>
        </h2>
        <p
          className="mx-auto text-lg
        xxxs:w-[90%]
        md:w-[70%] "
        >
          Coding has been called "the literacy of the 21st century” for good
          reason. Just like math, science, and literature, coding is a key
          aspect of understanding our technologically-advanced world.
        </p>
        <p
          className="mx-auto text-lg
        xxxs:w-[90%]
        md:w-[70%] "
        >
          There&apos;s a huge need for the younger generation to not only
          understands technology, but to know how it works.
        </p>
        <figure
          className="
        xxxs:block xxxs:min-w-[90%] xxxs:mx-4
        md:hidden "
        >
          <Image
            className="rounded-lg"
            src={sectionImage}
            alt="Code World students"
          />
        </figure>
      </div>
    </div>
  );
}

export default SectionFour;
