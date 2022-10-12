import styles from './section-two.module.css';
import revealSections from '@helpers/reveal-sections';
import Image from 'next/image';
import sectionImage from '../../public/images/aboutimg3.jpg';

function SectionFive() {
  revealSections();
  return (
    <div
      className="grid text-center section
    xxxs:grid-cols-1
    md:grid-cols-2"
    >
      <div
        className="
      xxxs:pt-3
      md:pt-16 md:px-10"
      >
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          INVEST IN THEIR
          <span className="text-blue-600"> FUTURE</span>
        </h2>
        <p
          className="text-lg mx-auto
        xxxs:w-[90%]
        md:w-[70%] "
        >
          Technology is advancing at an incredible rate, and we're just getting
          started. Code World believes that there&apos;s never been a more
          exciting time to advance our culture - starting with our youngest
          ones. Every kid deserves the chance to unlock their innate, unlimited
          capacity to learn.
        </p>
        <p
          className="text-lg mx-auto
        xxxs:w-[90%] xxxs:-mb-0
        md:w-[70%] "
        >
          Whether or not they pursue coding as a career, we want to provide kids
          with the skills that will help them more easily pursue their dreams in
          the digital age.
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

export default SectionFive;
