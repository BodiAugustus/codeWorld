import styles from './section-six.module.css';
import revealSections from '@helpers/reveal-sections';
import Link from 'next/link';
import Image from 'next/image';
import sectionPic from '../../public/images/main-img-3.webp';

function SectionSix() {
  revealSections();

  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1
    md:grid-cols-2"
    >
      <div
        className=" px-10 relative font-poppins
        xxxs:pt-10
      md:pt-36"
      >
        <span
          className="bg-blue-200 rounded-lg px-2 py-1 opacity-70 text-sky-600 text-sm 
        md:mr-[13.5rem]"
        >
          INDIVDUAL ATTENTION
        </span>
        <h2
          className="font-poppins font-extrabold mt-4 tracking-tight
        xxxs:text-2xl
        md:text-4xl"
        >
          <span className="text-blue-600">SMALL</span> CLASS SIZES
        </h2>
        <p
          className="mx-auto text-lg
        md:w-[80%] "
        >
          With a maximum class size of only ten students, you can be sure that
          your child is getting the right amount of direct attention and
          instruction needed to excel in the digital age.
        </p>
        <Link href="/courses">
          <button
            className="px-4 py-2 text-2xl bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 hover:scale-105 transition-all .3 linear active:bg-blue-600 active:scale-100
          xxxs:-mb-5
          md:-mb-0"
          >
            Enroll Now!
          </button>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <figure>
            <Image
              src={sectionPic}
              alt="Code World student smiling in class "
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
