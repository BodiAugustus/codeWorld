import styles from './section-four.module.css';
import revealSections from '@helpers/reveal-sections';
import Link from 'next/link';
import Image from 'next/image';

function SectionFour() {
  revealSections();
  return (
    <div className="grid grid-cols-2 text-center section">
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <figure>
            <Image
              src="/images/main-img-1.webp"
              alt="Code World student coding"
              width={600}
              height={400}
            />
          </figure>
        </div>
      </div>
      <div className="pt-20 px-10 font-poppins">
        <span className="bg-blue-200 rounded-xl px-2 py-1 opacity-70 text-sky-600 text-sm mr-[21rem] ">
          AGES 9 TO 15
        </span>
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          FROM BEGINNER TO <span className="text-blue-600">EXPERT</span>
        </h2>
        <p className="w-[80%] mx-auto text-lg">
          Our curriculum is guaranteed to take your child from novice to wizard
          utilizing the latest technologies and methods. Your child will learn
          all of the skills required to create their own online based
          businesses, find high-paying professional opportunities right out of
          high school, or else secure easy recruitment into highly favorable
          university computer science programs and research opportunities.
        </p>
        <Link href="/about">
          <button className="px-4 py-2 text-2xl bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 hover:scale-105 transition-all .3 linear active:bg-blue-600 active:scale-100">
            Learn More &rarr;
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SectionFour;
