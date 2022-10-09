import styles from './section-two.module.css';
import revealSections from '@helpers/reveal-sections';
import Image from 'next/image';

function SectionEight() {
  revealSections();
  return (
    <div className="grid grid-cols-2 text-center section">
      <div className="pt-20 px-10">
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          <span className="text-blue-600">BUILDING</span> STRONG COMMUNITIES
        </h2>
        <p className="text-lg w-[70%] mx-auto">
          We pride ourselves in partnering with local schools to boost STEM
          education in communities across Bali through our Code World learning
          center.
        </p>
        <p className="text-lg w-[70%] mx-auto">
          For our students, Code World offers the invaluable opportunity of a
          meaningful career path that positively impacts their lives and
          communities.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <figure>
            <Image
              className="rounded-lg"
              src="/images/aboutimg5.jpg"
              alt="Code world students"
              height={400}
              width={600}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionEight;
