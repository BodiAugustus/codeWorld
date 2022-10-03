import styles from './section-four.module.css';
import revealSections from '@helpers/reveal-sections';
function SectionSeven() {
  revealSections();
  return (
    <div className="grid grid-cols-2 text-center section">
      <div className={styles.wrapper}>
        <div>
          <figure>
            <img className="rounded-lg" src="/images/aboutimg4.jpg" alt="" />
          </figure>
        </div>
      </div>
      <div className="pt-24 px- text-center">
        <h2 className="font-poppins font-extrabold mt-4 tracking-tight">
          <span className="text-blue-600">FUN</span> BAKED IN
        </h2>
        <p className="w-[70%] mx-auto text-lg">
          If you love what you&apos;re doing then work doesn't feel like work.
          That&apos;s why positivity and fun are baked into every aspect of what
          we do at Code World.
        </p>
        <p className="w-[70%] mx-auto text-lg">
          Our custom made and regularly updated curriculum teaches kids to code
          by building projects that they both use and love, including complete
          games and websites. Kids are hardly even aware they&apos;re learning -
          just having fun!
        </p>
      </div>
    </div>
  );
}

export default SectionSeven;
