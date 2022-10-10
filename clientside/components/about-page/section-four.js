import styles from './section-four.module.css';
import revealSections from '@helpers/reveal-sections';
import Image from 'next/image';

function SectionFour() {
  revealSections();
  return (
    <div className="grid grid-cols-2 text-center section">
      <div className={`${styles.wrapper} `}>
        <div>
          <figure>
            <Image
              className="rounded-lg"
              src="/images/aboutimg2.webp"
              alt="Code World students"
              height={400}
              width={600}
            />
          </figure>
        </div>
      </div>
      <div className="pt-20 px-10">
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          CODING IS THE NEW <span className="text-blue-600">LITERACY</span>
        </h2>
        <p className="w-[70%] mx-auto text-lg">
          Coding has been called "the literacy of the 21st century” for good
          reason. Just like math, science, and literature, coding is a key
          aspect of understanding our technologically-advanced world.
        </p>
        <p className="w-[70%] mx-auto text-lg">
          There&apos;s a huge need for the younger generation to not only
          understands technology, but to know how it works.
        </p>
      </div>
    </div>
  );
}

export default SectionFour;
