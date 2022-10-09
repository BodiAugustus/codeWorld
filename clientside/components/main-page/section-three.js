import styles from './section-three.module.css';
import revealSections from '@helpers/reveal-sections';
import Link from 'next/link';

function SectionThree() {
  revealSections();

  return (
    <div className="grid grid-cols-2 text-center section">
      <div className="pt-32 px-10 font-poppins">
        <span className="bg-blue-200 rounded-xl px-2 py-1 opacity-70 text-sky-600 text-sm mr-[15rem] ">
          KEEP KIDS ENGAGED
        </span>
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          HAVE
          <span className="text-blue-600"> FUN</span> CODING
        </h2>
        <p className="text-lg w-[80%] mx-auto">
          Your kids can stay engaged and learn coding while having fun around
          others their own age. Boost problem solving, teamwork and critical
          thinking skills all while becoming a digital wizard! Support and
          guidance from our expert Code World instructor is always nearby to
          ensure both understanding and progress.
        </p>
        <Link href="/courses">
          <button className="px-4 py-2 text-2xl bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 hover:scale-105 transition-all .3 linear active:bg-blue-600 active:scale-100">
            Enroll Now!
          </button>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <figure>
            <img src="/images/cw1.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
