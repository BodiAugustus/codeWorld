import styles from './section-six.module.css';
import revealSections from '@helpers/reveal-sections';
import Link from 'next/link';

function SectionSix() {
  revealSections();

  return (
    <div className="grid grid-cols-2 text-center section">
      <div className="pt-36 px-10 relative font-poppins">
        <span className="bg-blue-200 rounded-lg px-2 py-1 opacity-70 text-sky-600 text-sm mr-[16.5rem]">
          INDIVDUAL ATTENTION
        </span>
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          <span className="text-blue-600">SMALL</span> CLASS SIZES
        </h2>
        <p className="w-[80%] mx-auto text-lg">
          With a maximum class size of only ten students, you can be sure that
          your child is getting the right amount of direct attention and
          instruction needed to excel in the digital age.
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
            <img src="/images/main-img-3.webp" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
