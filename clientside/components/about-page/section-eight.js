import styles from './section-two.module.css';
import revealSections from '@helpers/reveal-sections';
function SectionEight() {
  revealSections();
  return (
    <div className="grid grid-cols-2 text-center section">
      <div className="pt-20 px-10">
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          <span className="text-blue-600">BUILDING</span> STRONG COMMUNITIES
        </h2>
        <p className="text-lg w-[70%] mx-auto">
          We pride ourselves in partnering with entrepreneurs to boost STEM
          education in communities across the country through our
          state-of-the-art learning centers.
        </p>
        <p className="text-lg w-[70%] mx-auto">
          For our franchise owners, Code Ninjas offers the invaluable
          opportunity of a meaningful career path that positively impacts and
          strengthens their communities.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <figure>
            <img className="rounded-lg" src="/images/aboutimg5.jpg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SectionEight;
