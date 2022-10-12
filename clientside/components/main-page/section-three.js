import styles from './section-three.module.css';
import revealSections from '@helpers/reveal-sections';
import Link from 'next/link';
import Image from 'next/image';
import sectionPic from '../../public/images/cw1.png';

function SectionThree() {
  revealSections();

  return (
    <div
      className="grid  text-center section
    xxxs:grid-cols-1 
    md:grid-cols-2"
    >
      <div
        className="pt-24 px-10 font-poppins
      xs:pt-0
      xp:-mt-4
      md:pt-20
      lg:pt-24"
      >
        <span
          className="bg-blue-200 rounded-xl px-2 py-1 opacity-70 text-sky-600 text-sm 
        md:mr-0
        lg:mr-[12.5rem] "
        >
          KEEP KIDS ENGAGED
        </span>
        <h2
          className="font-poppins font-extrabold mt-4 tracking-tight
        xxxs:text-2xl
        md:text-4xl"
        >
          HAVE
          <span className="text-blue-600"> FUN</span> CODING
        </h2>
        <p
          className="text-lg  mx-auto
        md:w-[100%]
        lg:w-[80%]"
        >
          Your kids can stay engaged and learn coding while having fun around
          others their own age. Boost problem solving, teamwork and critical
          thinking skills all while becoming a digital wizard at the same time!
          Support and guidance from our expert Code World instructor is always
          nearby to ensure both understanding and progress.
        </p>
        <Link href="/courses">
          <button className="px-4 py-2 text-2xl bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 hover:scale-105 transition-all .3 linear active:bg-blue-600 active:scale-100">
            Enroll Now!
          </button>
        </Link>
      </div>
      <div className={`${styles.wrapper} xxxs:hidden md:block`}>
        <div className={styles.inner}>
          <figure>
            <Image
              src={sectionPic}
              alt="Code World student holding open laptop"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
