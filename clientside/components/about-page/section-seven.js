import styles from './section-four.module.css';
import revealSections from '@helpers/reveal-sections';
import sectionImage from '../../public/images/aboutimg4.jpg';
import Image from 'next/image';

function SectionSeven() {
  revealSections();
  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1
    md:grid-cols-2"
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
      md:pt-24 md:px-10 "
      >
        <h2
          className="font-poppins font-extrabold 
        xxxs:-mt-14
        md:mt-4 tracking-tight"
        >
          <span className="text-blue-600">FUN</span> BAKED IN
        </h2>
        <p
          className="mx-auto text-lg
        xxxs:w-[90%]
        md:w-[70%] "
        >
          If you love what you&apos;re doing then work doesn't feel like work.
          That&apos;s why positivity and fun are baked into every aspect of what
          we do at Code World.
        </p>
        <p
          className="mx-auto text-lg
        xxxs:w-[90%]
        md:w-[70%] "
        >
          Our custom made and regularly updated curriculum teaches kids to code
          by building projects that they both use and love, including complete
          games and websites. Kids are hardly even aware they&apos;re learning -
          just having fun!
        </p>
        <figure
          className="xxxs:block xxxs:min-w-[90%] xxxs:mx-4
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

export default SectionSeven;
