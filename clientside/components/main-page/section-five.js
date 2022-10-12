import styles from './section-five.module.css';
import revealSections from '@helpers/reveal-sections';
import Link from 'next/link';

function SectionFive() {
  revealSections();
  return (
    <div
      className="relative overflow-hidden
    md:w-[120%]
    lg:w-[100%]"
    >
      <div
        className={`${styles.img_div} flex flex-col section
      `}
      >
        <h2
          className="  text-white relative font-extrabold tracking-tight 
        xxxs:text-center
        small:w-[90%]
        md:w-[100%] md:text-5xl"
        >
          JOIN CODE WORLD TODAY
        </h2>
        <p
          className="relative text-slate-100 text-xl
        xxxs:text-center
        xs:w-[90%]
        md:w-full"
        >
          Unlock your childs path to a brighter future!
        </p>
        <Link href="/courses">
          <button className="px-4 py-4 cursor-pointer bg-emerald-500 rounded-lg font-bold  text-white text-xl relative transition-all .3 linear hover:bg-emerald-400 hover:scale-105 active:bg-emerald-600 active:scale-100">
            ENROLL NOW
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SectionFive;
